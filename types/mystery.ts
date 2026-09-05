export type MysteryCategory =
  | 'crime'
  | 'robbery'
  | 'mythology'
  | 'historical'
  | 'supernatural'
  | 'modern'
  | 'logic';

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type SuspectStatus = 'unreviewed' | 'unlikely' | 'suspicious' | 'prime_suspect';

export type EvidenceType = 'physical' | 'document' | 'digital' | 'visual';

export interface VisualHotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
  description: string;
  clueDiscovered?: string;
}

export interface Suspect {
  id: string;
  name: string;
  age: number;
  occupation: string;
  relationToCase: string;
  alibi: string;
  motive: string;
  knownFacts: string[];
  statement: string;
  avatarSeed?: string;
  isCulprit?: boolean; // internal flag
}

export interface EvidenceItem {
  id: string;
  title: string;
  code: string; // e.g. "EV-01"
  type: EvidenceType;
  category: string;
  collectedAt: string;
  locationFound: string;
  summary: string;
  detailedContent: string;
  // For documents:
  senderOrSigner?: string;
  // For digital:
  sourceType?: 'Chat Log' | 'CCTV Log' | 'Bank Statement' | 'Phone Records' | 'Computer Access Log';
  metadata?: Record<string, string>;
  // For visual clues:
  visualDescription?: string;
  hotspots?: VisualHotspot[];
  imageUrl?: string;
}

export interface TimelineEvent {
  id: string;
  time: string; // e.g. "08:15 PM"
  order: number;
  title: string;
  description: string;
  location: string;
  relatedSuspectId?: string;
  isInitiallyLocked?: boolean;
  unlockNote?: string;
}

export interface WitnessStatement {
  id: string;
  witnessName: string;
  role: string;
  interviewTime: string;
  statement: string;
  contradictionHint?: string;
}

export interface CaseLocation {
  id: string;
  name: string;
  description: string;
  accessible: boolean;
  notes: string;
}

export interface Hint {
  level: 1 | 2 | 3;
  title: string;
  text: string;
  scorePenalty: number;
}

export interface SolutionOption {
  id: string;
  text: string;
}

export interface MysterySolution {
  culpritId: string;
  methodId: string;
  motiveId: string;
  criticalEvidenceIds: string[];
  
  // Multiple choice deduction options presented to user in Solution Room
  methodOptions: SolutionOption[];
  motiveOptions: SolutionOption[];
  
  // Full explanation debrief revealed after submission
  fullExplanation: {
    whatHappened: string;
    howItWasDone: string;
    whyItHappened: string;
    decisiveEvidenceWalkthrough: string;
    whyOthersAreInnocent: string;
  };
}

export interface Mystery {
  id: string;
  caseNumber: string; // e.g. "CASE-001"
  title: string;
  category: MysteryCategory;
  categoryDisplay: string;
  difficulty: DifficultyLevel;
  difficultyLabel: 'Rookie' | 'Investigator' | 'Detective' | 'Inspector' | 'Master Detective';
  estimatedTime: string; // e.g. "20-30 MIN"
  shortDescription: string;
  fullStory: string;
  setting: string;
  disclaimer?: string; // For mythology/supernatural
  
  suspects: Suspect[];
  evidence: EvidenceItem[];
  timeline: TimelineEvent[];
  witnesses: WitnessStatement[];
  locations: CaseLocation[];
  hints: Hint[];
  solution: MysterySolution;
  
  tags: string[];
  featured?: boolean;
}
