import { UserProfile, UserProgress, CaseAttemptRecord } from '@/types/user';
import { SuspectStatus } from '@/types/mystery';
import { getMysteryById } from '@/data/mysteries';

const STORAGE_KEY_USER = 'casefile_user_profile_v1';

export const DEFAULT_ACHIEVEMENTS = [
  {
    id: 'first_clue',
    title: 'Eagle Eye',
    description: 'Pin and analyze at least 4 pieces of evidence in a single case.',
    icon: 'Eye',
  },
  {
    id: 'no_hints',
    title: 'No Help Needed',
    description: 'Solve a mystery without uncovering any hints.',
    icon: 'Brain',
  },
  {
    id: 'perfect_deduction',
    title: 'Perfect Deduction',
    description: 'Get every question in the Solution Room 100% correct on first attempt.',
    icon: 'CheckCircle2',
  },
  {
    id: 'speed_investigator',
    title: 'Speed Investigator',
    description: 'Close an investigation in under 15 minutes.',
    icon: 'Zap',
  },
  {
    id: 'master_of_heists',
    title: 'Master of Heists',
    description: 'Crack at least 3 Robbery & Heist investigations.',
    icon: 'KeyRound',
  },
  {
    id: 'keeper_of_legends',
    title: 'Keeper of Legends',
    description: 'Solve Indian Mythology-inspired investigations.',
    icon: 'Landmark',
  },
  {
    id: 'case_addict',
    title: 'Case Addict',
    description: 'Accumulate over 5,000 deduction XP across all cases.',
    icon: 'Award',
  },
];

export const INITIAL_GUEST_PROFILE: UserProfile = {
  id: 'guest-detective-01',
  username: 'Detective Hanish',
  isGuest: true,
  avatarSeed: 'hanish',
  createdAt: new Date().toISOString(),
  rank: 'Investigator',
  xp: 1450,
  casesSolved: 1,
  casesAttempted: 2,
  successRate: 85,
  evidenceAnalyzed: 14,
  hintsUsed: 1,
  streak: 2,
  favoriteCategory: 'Crime & Detective',
  achievements: [
    {
      id: 'first_clue',
      title: 'Eagle Eye',
      description: 'Pin and analyze at least 4 pieces of evidence in a single case.',
      icon: 'Eye',
      unlockedAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
  progress: {},
};

class CaseRepository {
  private activeUserId: string | null = null;

  private getStorage(): Storage | null {
    if (typeof window !== 'undefined') {
      return window.localStorage;
    }
    return null;
  }

  setActiveUserId(userId: string | null): void {
    this.activeUserId = userId;
  }

  getActiveUserId(): string | null {
    return this.activeUserId;
  }

  private getStorageKey(userId?: string): string {
    const id = userId !== undefined ? userId : this.activeUserId;
    return id ? `casefile_user_profile_${id}` : STORAGE_KEY_USER;
  }

  getUserProfile(userId?: string): UserProfile {
    const storage = this.getStorage();
    if (!storage) return INITIAL_GUEST_PROFILE;

    const key = this.getStorageKey(userId);
    const data = storage.getItem(key);
    if (!data) {
      if (!userId && !this.activeUserId) {
        this.saveUserProfile(INITIAL_GUEST_PROFILE);
        return INITIAL_GUEST_PROFILE;
      }
      return INITIAL_GUEST_PROFILE;
    }

    try {
      return JSON.parse(data);
    } catch {
      return INITIAL_GUEST_PROFILE;
    }
  }

  saveUserProfile(profile: UserProfile, userId?: string): void {
    const storage = this.getStorage();
    if (storage) {
      const key = this.getStorageKey(userId);
      storage.setItem(key, JSON.stringify(profile));
      // Mirror to active key
      storage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
    }
  }

  getCaseProgress(caseId: string): UserProgress[string] {
    const profile = this.getUserProfile();
    if (profile.progress[caseId]) {
      return profile.progress[caseId];
    }
    return {
      status: 'unsolved',
      startedAt: new Date().toISOString(),
      suspectStatuses: {},
      pinnedEvidenceIds: [],
      suspiciousEvidenceIds: [],
      notes: '',
      unlockedTimelineIds: [],
      hintsRevealedCount: 0,
    };
  }

  updateSuspectStatus(caseId: string, suspectId: string, status: SuspectStatus): void {
    const profile = this.getUserProfile();
    const current = this.getCaseProgress(caseId);
    current.suspectStatuses[suspectId] = status;
    if (current.status === 'unsolved') current.status = 'in_progress';
    profile.progress[caseId] = current;
    this.saveUserProfile(profile);
  }

  togglePinnedEvidence(caseId: string, evidenceId: string): boolean {
    const profile = this.getUserProfile();
    const current = this.getCaseProgress(caseId);
    const index = current.pinnedEvidenceIds.indexOf(evidenceId);
    let isPinned = false;
    if (index >= 0) {
      current.pinnedEvidenceIds.splice(index, 1);
    } else {
      current.pinnedEvidenceIds.push(evidenceId);
      isPinned = true;
      profile.evidenceAnalyzed += 1;
    }
    if (current.status === 'unsolved') current.status = 'in_progress';
    profile.progress[caseId] = current;

    // Check achievement for 4 pinned clues
    if (current.pinnedEvidenceIds.length >= 4) {
      this.unlockAchievement('first_clue', profile);
    }

    this.saveUserProfile(profile);
    return isPinned;
  }

  toggleSuspiciousEvidence(caseId: string, evidenceId: string): boolean {
    const profile = this.getUserProfile();
    const current = this.getCaseProgress(caseId);
    const index = current.suspiciousEvidenceIds.indexOf(evidenceId);
    let isSuspicious = false;
    if (index >= 0) {
      current.suspiciousEvidenceIds.splice(index, 1);
    } else {
      current.suspiciousEvidenceIds.push(evidenceId);
      isSuspicious = true;
    }
    profile.progress[caseId] = current;
    this.saveUserProfile(profile);
    return isSuspicious;
  }

  saveCaseNotes(caseId: string, notes: string): void {
    const profile = this.getUserProfile();
    const current = this.getCaseProgress(caseId);
    current.notes = notes;
    if (current.status === 'unsolved') current.status = 'in_progress';
    profile.progress[caseId] = current;
    this.saveUserProfile(profile);
  }

  revealHint(caseId: string): number {
    const profile = this.getUserProfile();
    const current = this.getCaseProgress(caseId);
    current.hintsRevealedCount = Math.min(3, (current.hintsRevealedCount || 0) + 1);
    profile.hintsUsed += 1;
    profile.progress[caseId] = current;
    this.saveUserProfile(profile);
    return current.hintsRevealedCount;
  }

  evaluateAccusation(
    caseId: string,
    submission: {
      culpritId: string;
      methodId: string;
      motiveId: string;
      criticalEvidenceIds: string[];
      durationMinutes?: number;
    }
  ): {
    isSolved: boolean;
    accuracyPercentage: number;
    xpAwarded: number;
    attemptRecord: CaseAttemptRecord;
  } {
    const mystery = getMysteryById(caseId);
    if (!mystery) {
      throw new Error(`Mystery ${caseId} not found`);
    }

    const sol = mystery.solution;
    const culpritCorrect = submission.culpritId === sol.culpritId;
    const methodCorrect = submission.methodId === sol.methodId;
    const motiveCorrect = submission.motiveId === sol.motiveId;

    // Calculate evidence overlap
    const requiredEvidence = sol.criticalEvidenceIds;
    const matchedEvidence = submission.criticalEvidenceIds.filter((id) =>
      requiredEvidence.includes(id)
    );

    // Scoring weights:
    // Culprit = 40%, Method = 25%, Motive = 15%, Evidence = 20%
    let accuracy = 0;
    if (culpritCorrect) accuracy += 40;
    if (methodCorrect) accuracy += 25;
    if (motiveCorrect) accuracy += 15;

    const evidenceRatio =
      requiredEvidence.length > 0 ? matchedEvidence.length / requiredEvidence.length : 1;
    accuracy += Math.round(evidenceRatio * 20);

    const profile = this.getUserProfile();
    const progress = this.getCaseProgress(caseId);
    const hintsUsed = progress.hintsRevealedCount || 0;

    // Base XP: 1000 * difficulty level
    const baseXP = mystery.difficulty * 800;
    // Penalty: 150 per hint
    const hintPenalty = hintsUsed * 150;
    // Accuracy scaling
    const rawXP = Math.round((baseXP * (accuracy / 100)) - hintPenalty);
    const xpAwarded = Math.max(100, rawXP);

    const isSolved = culpritCorrect && accuracy >= 60;

    const attemptRecord: CaseAttemptRecord = {
      caseId: mystery.id,
      caseNumber: mystery.caseNumber,
      caseTitle: mystery.title,
      solvedAt: new Date().toISOString(),
      durationMinutes: submission.durationMinutes || 18,
      accuracyPercentage: accuracy,
      score: xpAwarded,
      hintsUsedCount: hintsUsed,
      culpritCorrect,
      methodCorrect,
      motiveCorrect,
      evidenceMatchedCount: matchedEvidence.length,
      totalEvidenceRequired: requiredEvidence.length,
    };

    // Update user profile
    progress.status = isSolved ? 'solved' : 'failed';
    progress.completedAt = new Date().toISOString();
    progress.attemptResult = attemptRecord;
    profile.progress[caseId] = progress;
    profile.casesAttempted += 1;

    if (isSolved) {
      profile.casesSolved += 1;
      profile.xp += xpAwarded;
      profile.streak += 1;

      // Achievements
      if (hintsUsed === 0) {
        this.unlockAchievement('no_hints', profile);
      }
      if (accuracy === 100) {
        this.unlockAchievement('perfect_deduction', profile);
      }
      if (attemptRecord.durationMinutes < 15) {
        this.unlockAchievement('speed_investigator', profile);
      }
      if (mystery.category === 'robbery') {
        const solvedRobberies = Object.values(profile.progress).filter(
          (p) => p.status === 'solved' && p.attemptResult?.caseId.startsWith('case-00')
        ).length;
        if (solvedRobberies >= 3) {
          this.unlockAchievement('master_of_heists', profile);
        }
      }
      if (mystery.category === 'mythology') {
        this.unlockAchievement('keeper_of_legends', profile);
      }
      if (profile.xp >= 5000) {
        this.unlockAchievement('case_addict', profile);
      }
    } else {
      profile.streak = 0;
    }

    // Recalculate success rate
    profile.successRate = Math.round((profile.casesSolved / profile.casesAttempted) * 100);

    this.saveUserProfile(profile);

    return {
      isSolved,
      accuracyPercentage: accuracy,
      xpAwarded,
      attemptRecord,
    };
  }

  unlockAchievement(achievementId: string, currentProfile?: UserProfile): void {
    const profile = currentProfile || this.getUserProfile();
    const alreadyUnlocked = profile.achievements.some((a) => a.id === achievementId);
    if (!alreadyUnlocked) {
      const template = DEFAULT_ACHIEVEMENTS.find((a) => a.id === achievementId);
      if (template) {
        profile.achievements.push({
          ...template,
          unlockedAt: new Date().toISOString(),
        });
        if (!currentProfile) {
          this.saveUserProfile(profile);
        }
      }
    }
  }
}

export const caseRepo = new CaseRepository();
