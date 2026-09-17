'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UserProfile } from '@/types/user';
import { caseRepo, INITIAL_GUEST_PROFILE } from '@/lib/storage/caseRepository';
import { calculateRank } from '@/lib/utils';
import { 
  fetchUserProfileFromCloud, 
  saveUserProfileToCloud, 
  subscribeToUserProfile 
} from '@/lib/storage/cloudSync';
import { 
  auth, 
  googleProvider, 
  isFirebaseConfigured,
  getFirebaseErrorMessage 
} from '@/lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile as firebaseUpdateProfile,
  User as FirebaseUser,
} from 'firebase/auth';
import AuthModal from '@/components/AuthModal';

interface AuthContextType {
  user: UserProfile | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  isAdmin: boolean;
  isAuthenticated: boolean;
  isFirebaseReady: boolean;
  authModalOpen: boolean;
  authModalReason: string;
  openAuthModal: (reason?: string) => void;
  closeAuthModal: () => void;
  loginAsGuest: () => void;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signup: (username: string, email: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateUsername: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalReason, setAuthModalReason] = useState('');

  const openAuthModal = (reason?: string) => {
    setAuthModalReason(reason || '');
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthModalReason('');
  };

  // Load and refresh current detective dossier (local + cloud)
  const refreshProfile = async () => {
    const fbUser = auth?.currentUser;
    if (!fbUser) {
      setUser(null);
      return;
    }
    const localProfile = caseRepo.getUserProfile(fbUser.uid);
    if (localProfile) {
      localProfile.points = localProfile.points ?? localProfile.xp ?? 0;
      localProfile.xp = localProfile.points;
      localProfile.rank = calculateRank(localProfile.xp);
      setUser({ ...localProfile });
    }
    try {
      const cloudProfile = await fetchUserProfileFromCloud(fbUser.uid);
      if (cloudProfile) {
        const hydrated = caseRepo.hydrateFromCloud(cloudProfile);
        hydrated.points = hydrated.points ?? hydrated.xp ?? 0;
        hydrated.xp = hydrated.points;
        hydrated.rank = calculateRank(hydrated.xp);
        setUser({ ...hydrated });
      }
    } catch (err) {
      console.warn('[AuthContext] refreshProfile error:', err);
    }
  };

  // Synchronize Firebase auth state and Cloud Firestore data across devices
  useEffect(() => {
    if (!auth) {
      // Unauthenticated fallback when Firebase is offline
      setUser(null);
      setLoading(false);
      return;
    }

    let cloudUnsubscribe: (() => void) | null = null;

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);

      // Clean up previous real-time listener if any
      if (cloudUnsubscribe) {
        cloudUnsubscribe();
        cloudUnsubscribe = null;
      }

      if (fbUser) {
        // 1. Set active user ID in repository
        caseRepo.setActiveUserId(fbUser.uid);

        // 2. Immediate optimistic render from local cache to prevent UI delay
        let localProfile = caseRepo.getUserProfile(fbUser.uid);
        if (localProfile && localProfile.id === fbUser.uid && !localProfile.isGuest) {
          localProfile.rank = calculateRank(localProfile.xp);
          setUser({ ...localProfile });
        }

        // 3. Fetch canonical dossier from Cloud Firestore database
        try {
          const cloudProfile = await fetchUserProfileFromCloud(fbUser.uid);

          if (cloudProfile) {
            // Existing cloud dossier: hydrate repository and render
            const hydrated = caseRepo.hydrateFromCloud(cloudProfile);
            hydrated.rank = calculateRank(hydrated.xp);
            setUser({ ...hydrated });
          } else {
            // New user account: initialize dossier
            const defaultName = fbUser.displayName || fbUser.email?.split('@')[0] || 'Investigator';
            const capitalizedName = defaultName.charAt(0).toUpperCase() + defaultName.slice(1);

              const initialProfile: UserProfile = {
                ...INITIAL_GUEST_PROFILE,
                id: fbUser.uid,
                username: capitalizedName,
                email: fbUser.email || undefined,
                isGuest: false,
                createdAt: fbUser.metadata.creationTime || new Date().toISOString(),
                xp: 0,
                points: 0,
                totalPoints: 0,
                casesSolved: 0,
                casesAttempted: 0,
                successRate: 0,
                evidenceAnalyzed: 0,
                hintsUsed: 0,
                streak: 0,
                rank: 'Rookie',
                achievements: [],
                progress: {},
              };

              caseRepo.saveUserProfile(initialProfile, fbUser.uid);
              setUser({ ...initialProfile });
            }
          } catch (err) {
          console.warn('[AuthContext] Cloud fetch error on auth state change:', err);
        }

        // 4. Attach real-time cloud listener for cross-device updates
        const unsub = subscribeToUserProfile(fbUser.uid, (remoteProfile) => {
          const updated = caseRepo.hydrateFromCloud(remoteProfile);
          updated.points = updated.points ?? updated.xp ?? 0;
          updated.xp = updated.points;
          updated.rank = calculateRank(updated.xp);
          setUser({ ...updated });
        });
        if (unsub) {
          cloudUnsubscribe = unsub;
        }

      } else {
        // Unauthenticated
        caseRepo.flushPendingSync();
        caseRepo.setActiveUserId(null);
        setUser(null);
      }

      setLoading(false);
    });

    return () => {
      if (cloudUnsubscribe) cloudUnsubscribe();
      unsubscribe();
    };
  }, []);

  const loginAsGuest = () => {
    openAuthModal('Security Clearance Required. Please log in or create an account to proceed.');
  };

  const loginWithEmail = async (email: string, pass: string): Promise<void> => {
    if (auth) {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
    } else {
      // Local development fallback
      const username = email.split('@')[0] || 'Investigator';
      const profile = caseRepo.getUserProfile();
      profile.email = email;
      profile.username = username.charAt(0).toUpperCase() + username.slice(1);
      profile.isGuest = false;
      caseRepo.saveUserProfile(profile);
      refreshProfile();
    }
  };

  const signup = async (username: string, email: string, pass: string): Promise<void> => {
    const cleanName = username.trim() || 'Detective';
    const cleanEmail = email.trim();

    if (auth) {
      const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      if (userCredential.user) {
        await firebaseUpdateProfile(userCredential.user, {
          displayName: cleanName,
        });

        const newProfile: UserProfile = {
          ...INITIAL_GUEST_PROFILE,
          id: userCredential.user.uid,
          username: cleanName,
          email: cleanEmail,
          isGuest: false,
          createdAt: new Date().toISOString(),
          xp: 0,
          points: 0,
          totalPoints: 0,
          casesSolved: 0,
          casesAttempted: 0,
          successRate: 0,
          evidenceAnalyzed: 0,
          hintsUsed: 0,
          streak: 0,
          rank: 'Rookie',
          achievements: [],
          progress: {},
        };
        caseRepo.setActiveUserId(userCredential.user.uid);
        caseRepo.saveUserProfile(newProfile, userCredential.user.uid);
        setUser(newProfile);
      }
    } else {
      // Local fallback
      const profile: UserProfile = {
        ...INITIAL_GUEST_PROFILE,
        id: `user-${Date.now()}`,
        username: cleanName,
        email: cleanEmail,
        isGuest: false,
        createdAt: new Date().toISOString(),
        xp: 0,
        points: 0,
        totalPoints: 0,
        casesSolved: 0,
        casesAttempted: 0,
        successRate: 0,
        evidenceAnalyzed: 0,
        hintsUsed: 0,
        streak: 0,
        rank: 'Rookie',
        achievements: [],
        progress: {},
      };
      caseRepo.saveUserProfile(profile);
      refreshProfile();
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    if (!auth) {
      throw new Error('Firebase Auth is not initialized. Please verify configuration.');
    }
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      caseRepo.setActiveUserId(result.user.uid);
      // onAuthStateChanged handles cloud fetch, hydration, and real-time sync
    }
  };

  const logout = async (): Promise<void> => {
    caseRepo.flushPendingSync();
    if (auth && auth.currentUser) {
      await signOut(auth);
    }
    caseRepo.setActiveUserId(null);
    setUser(null);
    setFirebaseUser(null);
  };

  const updateUsername = async (name: string): Promise<void> => {
    const cleanName = name.trim();
    if (!cleanName || !auth?.currentUser) return;

    await firebaseUpdateProfile(auth.currentUser, {
      displayName: cleanName,
    });

    const profile = caseRepo.getUserProfile(auth.currentUser.uid);
    if (profile) {
      profile.username = cleanName;
      caseRepo.saveUserProfile(profile, auth.currentUser.uid);
      refreshProfile();
    }
  };

  // Determine if the current authenticated user has administrative clearance
  const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  const currentUserEmail = (user?.email || firebaseUser?.email || '').toLowerCase();
  const isAdmin = Boolean(
    user && 
    !user.isGuest && 
    currentUserEmail && 
    adminEmails.includes(currentUserEmail)
  );

  const isAuthenticated = Boolean(
    user && 
    !user.isGuest && 
    (firebaseUser !== null || !isFirebaseConfigured)
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        loading,
        isAdmin,
        isAuthenticated,
        isFirebaseReady: isFirebaseConfigured,
        authModalOpen,
        authModalReason,
        openAuthModal,
        closeAuthModal,
        loginAsGuest,
        loginWithEmail,
        signup,
        loginWithGoogle,
        logout,
        refreshProfile,
        updateUsername,
      }}
    >
      {children}
      <AuthModal
        isOpen={authModalOpen}
        onClose={closeAuthModal}
        reason={authModalReason}
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
