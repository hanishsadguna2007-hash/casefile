import { SuspectStatus } from './mystery';

export type DetectiveRank =
  | 'Rookie'
  | 'Investigator'
  | 'Detective'
  | 'Inspector'
  | 'Chief Inspector'
  | 'Master Detective';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface CaseAttemptRecord {
  caseId: string;
  caseNumber: string;
  caseTitle: string;
  solvedAt: string;
  durationMinutes: number;
  accuracyPercentage: number;
  score: number;
  hintsUsedCount: number;
  culpritCorrect: boolean;
  methodCorrect: boolean;
  motiveCorrect: boolean;
  evidenceMatchedCount: number;
  totalEvidenceRequired: number;
}

export interface UserProgress {
  [caseId: string]: {
    status: 'unsolved' | 'in_progress' | 'solved' | 'failed';
    startedAt: string;
    completedAt?: string;
    suspectStatuses: Record<string, SuspectStatus>;
    pinnedEvidenceIds: string[];
    suspiciousEvidenceIds: string[];
    notes: string;
    unlockedTimelineIds: string[];
    hintsRevealedCount: number;
    attemptResult?: CaseAttemptRecord;
  };
}

export interface PointTransaction {
  id: string;
  userId: string;
  points: number;
  totalPoints: number;
  reason: string;
  caseId?: string;
  caseTitle?: string;
  timestamp: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  isGuest: boolean;
  avatarSeed: string;
  createdAt: string;
  
  // Stats
  rank: DetectiveRank;
  xp: number;
  points?: number;
  totalPoints?: number;
  casesSolved: number;
  casesAttempted: number;
  successRate: number; // percentage e.g. 82
  evidenceAnalyzed: number;
  hintsUsed: number;
  streak: number;
  favoriteCategory: string;
  
  // Progress & Badges
  achievements: Achievement[];
  progress: UserProgress;
}

