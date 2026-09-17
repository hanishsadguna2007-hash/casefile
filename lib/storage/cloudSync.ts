import { db } from '@/lib/firebase';
import { UserProfile, UserProgress, Achievement, PointTransaction } from '@/types/user';
import { 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  Unsubscribe,
  collection,
  getDocs,
  query,
  orderBy,
  limit 
} from 'firebase/firestore';

export type SyncState = 'idle' | 'syncing' | 'synced' | 'error';

type SyncListener = (state: SyncState, lastError?: string) => void;
const syncListeners: Set<SyncListener> = new Set();
let currentSyncState: SyncState = 'idle';
let lastSyncError: string | undefined = undefined;

export function getSyncState(): SyncState {
  return currentSyncState;
}

export function subscribeSyncState(listener: SyncListener): () => void {
  syncListeners.add(listener);
  listener(currentSyncState, lastSyncError);
  return () => {
    syncListeners.delete(listener);
  };
}

function updateSyncState(state: SyncState, error?: string) {
  currentSyncState = state;
  lastSyncError = error;
  syncListeners.forEach((l) => l(state, error));
}

/**
 * Strips undefined properties and functions so Firestore setDoc does not reject with:
 * "Function setDoc() called with invalid data. Unsupported field value: undefined"
 */
function sanitizeForFirestore<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Fetches user profile document from Firestore (`users/{uid}`).
 * Ensures points and xp fields are uniformly populated.
 */
export async function fetchUserProfileFromCloud(uid: string): Promise<UserProfile | null> {
  if (!db || !uid) return null;

  try {
    updateSyncState('syncing');
    const userDocRef = doc(db, 'users', uid);
    const snap = await getDoc(userDocRef);

    if (snap.exists()) {
      updateSyncState('synced');
      const data = snap.data() as UserProfile;
      // Ensure points and xp are synchronized from cloud
      const totalPoints = data.points ?? data.xp ?? 0;
      data.points = totalPoints;
      data.xp = totalPoints;
      data.totalPoints = totalPoints;
      return data;
    }

    updateSyncState('idle');
    return null;
  } catch (err: any) {
    console.warn('[CloudSync] Fetch failed:', err?.message || err);
    updateSyncState('error', err?.message);
    return null;
  }
}

/**
 * Persists user profile and points to Cloud Firestore.
 * 1. Writes to `users/{uid}` with points, xp, and dossiers
 * 2. Mirrors summary to `user_points/{uid}` for global rank & leaderboard queries
 */
export async function saveUserProfileToCloud(profile: UserProfile): Promise<boolean> {
  if (!db || !profile || !profile.id || profile.isGuest) {
    return false;
  }

  try {
    updateSyncState('syncing');
    const userDocRef = doc(db, 'users', profile.id);
    const totalPoints = profile.points ?? profile.xp ?? 0;

    const sanitizedUser = sanitizeForFirestore({
      ...profile,
      points: totalPoints,
      xp: totalPoints,
      totalPoints,
      updatedAt: new Date().toISOString(),
    });

    // 1. Save user dossier in Cloud Firestore
    await setDoc(userDocRef, sanitizedUser, { merge: true });

    // 2. Also mirror to user_points collection in Cloud Firestore for cross-user points querying
    try {
      const pointsDocRef = doc(db, 'user_points', profile.id);
      await setDoc(
        pointsDocRef,
        sanitizeForFirestore({
          userId: profile.id,
          username: profile.username || 'Detective',
          points: totalPoints,
          xp: totalPoints,
          totalPoints,
          rank: profile.rank || 'Rookie',
          casesSolved: profile.casesSolved || 0,
          casesAttempted: profile.casesAttempted || 0,
          updatedAt: new Date().toISOString(),
        }),
        { merge: true }
      );
    } catch (ptsErr: any) {
      console.warn('[CloudSync] user_points mirror warning:', ptsErr?.message || ptsErr);
    }

    updateSyncState('synced');
    return true;
  } catch (err: any) {
    console.warn('[CloudSync] Save failed:', err?.message || err);
    updateSyncState('error', err?.message);
    return false;
  }
}

/**
 * Records an immutable point event in Cloud Firestore subcollection `users/{uid}/points_log/{txId}`.
 * This stores the exact breakdown of how points were awarded or updated.
 */
export async function recordPointTransactionInCloud(
  userId: string,
  transaction: Omit<PointTransaction, 'id'>
): Promise<boolean> {
  if (!db || !userId || userId === 'guest-detective-01') return false;

  try {
    const txId = `tx_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const txDocRef = doc(db, 'users', userId, 'points_log', txId);
    
    await setDoc(
      txDocRef,
      sanitizeForFirestore({
        id: txId,
        ...transaction,
      })
    );
    return true;
  } catch (err: any) {
    console.warn('[CloudSync] Failed to record point transaction in cloud:', err?.message || err);
    return false;
  }
}

/**
 * Fetches the user's historical points transactions from Cloud Firestore (`users/{uid}/points_log`).
 */
export async function fetchUserPointsHistoryFromCloud(userId: string): Promise<PointTransaction[]> {
  if (!db || !userId || userId === 'guest-detective-01') return [];

  try {
    const pointsColRef = collection(db, 'users', userId, 'points_log');
    const q = query(pointsColRef, orderBy('timestamp', 'desc'), limit(50));
    const snap = await getDocs(q);

    const transactions: PointTransaction[] = [];
    snap.forEach((docSnap) => {
      transactions.push(docSnap.data() as PointTransaction);
    });
    return transactions;
  } catch (err: any) {
    console.warn('[CloudSync] Failed to fetch points history from cloud:', err?.message || err);
    return [];
  }
}


/**
 * Subscribes to real-time updates for a user's cloud document.
 * This enables instant cross-device updates without requiring manual refresh.
 */
export function subscribeToUserProfile(
  uid: string,
  onUpdate: (profile: UserProfile) => void
): Unsubscribe | null {
  if (!db || !uid) return null;

  try {
    const userDocRef = doc(db, 'users', uid);
    const unsubscribe = onSnapshot(
      userDocRef,
      (snap) => {
        if (snap.exists()) {
          const cloudData = snap.data() as UserProfile;
          onUpdate(cloudData);
        }
      },
      (err) => {
        console.warn('[CloudSync] Real-time listener error:', err.message);
        updateSyncState('error', err.message);
      }
    );
    return unsubscribe;
  } catch (err: any) {
    console.warn('[CloudSync] Could not subscribe:', err.message);
    return null;
  }
}

/**
 * Intelligently merges cloud profile data with local profile data.
 * Ensures that newly solved cases, achievements, or notes from either device are never overwritten.
 */
export function mergeProfiles(cloud: UserProfile, local: UserProfile): UserProfile {
  // If IDs don't match, return cloud
  if (cloud.id !== local.id && !local.isGuest) {
    return cloud;
  }

  // Merge achievements by unique ID
  const achievementMap = new Map<string, Achievement>();
  (cloud.achievements || []).forEach((a) => achievementMap.set(a.id, a));
  (local.achievements || []).forEach((a) => {
    if (!achievementMap.has(a.id)) {
      achievementMap.set(a.id, a);
    }
  });

  // Merge case progress records
  const mergedProgress: UserProgress = { ...(cloud.progress || {}) };
  Object.entries(local.progress || {}).forEach(([caseId, localProg]) => {
    const cloudProg = mergedProgress[caseId];

    if (!cloudProg) {
      mergedProgress[caseId] = localProg;
      return;
    }

    // If local solved but cloud not, or vice versa: solved wins
    const isSolved = cloudProg.status === 'solved' || localProg.status === 'solved';
    const status = isSolved
      ? 'solved'
      : cloudProg.status === 'in_progress' || localProg.status === 'in_progress'
      ? 'in_progress'
      : cloudProg.status;

    // Merge pinned clues
    const pinnedEvidenceIds = Array.from(
      new Set([...(cloudProg.pinnedEvidenceIds || []), ...(localProg.pinnedEvidenceIds || [])])
    );

    // Merge suspicious leads
    const suspiciousEvidenceIds = Array.from(
      new Set([...(cloudProg.suspiciousEvidenceIds || []), ...(localProg.suspiciousEvidenceIds || [])])
    );

    // Merge suspect statuses
    const suspectStatuses = {
      ...(cloudProg.suspectStatuses || {}),
      ...(localProg.suspectStatuses || {}),
    };

    // Keep longer or non-empty notes
    const notes =
      (localProg.notes && localProg.notes.length >= (cloudProg.notes?.length || 0))
        ? localProg.notes
        : cloudProg.notes || '';

    // Verdict attempt result
    const attemptResult = cloudProg.attemptResult || localProg.attemptResult;

    mergedProgress[caseId] = {
      status,
      startedAt: cloudProg.startedAt || localProg.startedAt,
      completedAt: cloudProg.completedAt || localProg.completedAt,
      suspectStatuses,
      pinnedEvidenceIds,
      suspiciousEvidenceIds,
      notes,
      unlockedTimelineIds: Array.from(
        new Set([...(cloudProg.unlockedTimelineIds || []), ...(localProg.unlockedTimelineIds || [])])
      ),
      hintsRevealedCount: Math.max(cloudProg.hintsRevealedCount || 0, localProg.hintsRevealedCount || 0),
      attemptResult,
    };
  });

  // Calculate solved counts from merged progress
  const solvedCount = Object.values(mergedProgress).filter((p) => p.status === 'solved').length;
  const attemptedCount = Math.max(
    cloud.casesAttempted || 0,
    local.casesAttempted || 0,
    Object.keys(mergedProgress).length
  );

  const mergedPoints = Math.max(
    cloud.points ?? cloud.xp ?? 0,
    local.points ?? local.xp ?? 0
  );

  return {
    ...cloud,
    username: cloud.username || local.username,
    email: cloud.email || local.email,
    isGuest: false,
    xp: mergedPoints,
    points: mergedPoints,
    totalPoints: mergedPoints,
    casesSolved: Math.max(cloud.casesSolved || 0, solvedCount),
    casesAttempted: attemptedCount,
    successRate: attemptedCount > 0 ? Math.round((Math.max(cloud.casesSolved || 0, solvedCount) / attemptedCount) * 100) : 0,
    evidenceAnalyzed: Math.max(cloud.evidenceAnalyzed || 0, local.evidenceAnalyzed || 0),
    hintsUsed: Math.max(cloud.hintsUsed || 0, local.hintsUsed || 0),
    streak: Math.max(cloud.streak || 0, local.streak || 0),
    achievements: Array.from(achievementMap.values()),
    progress: mergedProgress,
  };
}
