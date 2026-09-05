'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getMysteryById } from '@/data/mysteries';
import { Mystery, SuspectStatus } from '@/types/mystery';
import { caseRepo } from '@/lib/storage/caseRepository';
import { useAuth } from '@/lib/auth/authContext';
import { getCategoryBadgeColor } from '@/lib/utils';
import InvestigationSidebar, { ActiveTab } from '@/components/investigation/InvestigationSidebar';
import EvidenceInspector from '@/components/investigation/EvidenceInspector';
import SuspectDossier from '@/components/investigation/SuspectDossier';
import InteractiveTimeline from '@/components/investigation/InteractiveTimeline';
import WitnessTestimony from '@/components/investigation/WitnessTestimony';
import CaseLocations from '@/components/investigation/CaseLocations';
import DetectiveNotebook from '@/components/investigation/DetectiveNotebook';
import HintModal from '@/components/investigation/HintModal';
import AccusationModal from '@/components/investigation/AccusationModal';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  HelpCircle, 
  Gavel, 
  CheckCircle2, 
  FolderLock, 
  ShieldAlert,
  AlertTriangle,
  KeyRound,
  Lock
} from 'lucide-react';

export default function CaseInvestigationPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading, openAuthModal, refreshProfile } = useAuth();
  const caseId = params.id as string;

  const mystery = getMysteryById(caseId);

  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [suspectStatuses, setSuspectStatuses] = useState<Record<string, SuspectStatus>>({});
  const [pinnedEvidenceIds, setPinnedEvidenceIds] = useState<string[]>([]);
  const [suspiciousEvidenceIds, setSuspiciousEvidenceIds] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>('');
  const [unlockedTimelineIds, setUnlockedTimelineIds] = useState<string[]>([]);
  const [hintsRevealedCount, setHintsRevealedCount] = useState<number>(0);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const [hintModalOpen, setHintModalOpen] = useState<boolean>(false);
  const [accusationModalOpen, setAccusationModalOpen] = useState<boolean>(false);

  // Load persistent case progress
  useEffect(() => {
    if (mystery && user) {
      const progress = caseRepo.getCaseProgress(mystery.id);
      setSuspectStatuses(progress.suspectStatuses || {});
      setPinnedEvidenceIds(progress.pinnedEvidenceIds || []);
      setSuspiciousEvidenceIds(progress.suspiciousEvidenceIds || []);
      setNotes(progress.notes || '');
      setUnlockedTimelineIds(progress.unlockedTimelineIds || []);
      setHintsRevealedCount(progress.hintsRevealedCount || 0);
      setIsSolved(progress.status === 'solved');
    }
  }, [mystery, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-detective-950">
        <div className="rounded border border-detective-800 bg-detective-900 p-8 text-center max-w-md space-y-4 shadow-2xl">
          <div className="h-10 w-10 border-2 border-evidence border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            Verifying Detective Clearance...
          </div>
        </div>
      </div>
    );
  }

  if (!mystery) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="rounded border border-detective-800 bg-detective-900 p-8 text-center max-w-md space-y-4">
          <FolderLock className="h-10 w-10 text-evidence mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-neutral-100">
            Dossier Not Found
          </h2>
          <p className="font-sans text-xs text-neutral-400">
            No confidential case matches identifier: <strong className="font-mono">{caseId}</strong>
          </p>
          <Link
            href="/cases"
            className="inline-block px-4 py-2 rounded bg-evidence text-white font-mono text-xs uppercase tracking-wider"
          >
            Return to Case Archives
          </Link>
        </div>
      </div>
    );
  }

  // Security Clearance Gate: User must be signed in or registered to play
  if (!user) {
    return (
      <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 flex items-center justify-center bg-detective-950 relative overflow-hidden">
        <div className="absolute inset-0 investigation-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-lg w-full rounded border border-detective-700 bg-detective-900 shadow-2xl overflow-hidden">
          {/* Header File Stamp */}
          <div className="flex items-center justify-between border-b border-detective-800 bg-detective-950 px-5 sm:px-6 py-4">
            <div className="flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-evidence" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                Clearance Gate // Level 2
              </span>
            </div>
            <span className="stamp-confidential text-[10px]">RESTRICTED</span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full border border-amber-500/40 bg-amber-950/30 flex items-center justify-center text-amber-400 shadow-inner">
                <Lock className="h-8 w-8" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="font-mono text-xs text-evidence font-bold tracking-wider uppercase">
                {mystery.caseNumber} • {mystery.categoryDisplay}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-100 font-bold tracking-tight">
                {mystery.title}
              </h2>
              <p className="font-serif italic text-xs text-neutral-400">
                {mystery.setting}
              </p>
            </div>

            <div className="rounded border border-amber-800/40 bg-amber-950/20 p-4 text-xs font-mono text-neutral-300 space-y-2">
              <div className="flex items-center space-x-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                <span>Authentication Required</span>
              </div>
              <p className="leading-relaxed font-sans text-neutral-400 text-xs">
                Active crime scenes, autopsy reports, suspect interrogations, and the Solution Chamber are strictly restricted to registered detectives. Sign in or register your clearance to begin investigating this case.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => openAuthModal(`Sign in or register to open case ${mystery.caseNumber}: ${mystery.title}`)}
                className="w-full flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                <KeyRound className="h-4 w-4" />
                <span>Sign In / Register Clearance</span>
              </button>

              <Link
                href="/cases"
                className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-950 hover:bg-detective-850 text-neutral-300 hover:text-white px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Case Archives</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const catColors = getCategoryBadgeColor(mystery.category);

  // Handlers
  const handleUpdateSuspectStatus = (suspectId: string, status: SuspectStatus) => {
    caseRepo.updateSuspectStatus(mystery.id, suspectId, status);
    setSuspectStatuses((prev) => ({ ...prev, [suspectId]: status }));
  };

  const handleTogglePin = (evidenceId: string) => {
    const isPinned = caseRepo.togglePinnedEvidence(mystery.id, evidenceId);
    setPinnedEvidenceIds((prev) =>
      isPinned ? [...prev, evidenceId] : prev.filter((id) => id !== evidenceId)
    );
    refreshProfile();
  };

  const handleToggleSuspicious = (evidenceId: string) => {
    const isSusp = caseRepo.toggleSuspiciousEvidence(mystery.id, evidenceId);
    setSuspiciousEvidenceIds((prev) =>
      isSusp ? [...prev, evidenceId] : prev.filter((id) => id !== evidenceId)
    );
  };

  const handleSaveNotes = (updatedNotes: string) => {
    setNotes(updatedNotes);
    caseRepo.saveCaseNotes(mystery.id, updatedNotes);
  };

  const handleRevealHint = () => {
    const newCount = caseRepo.revealHint(mystery.id);
    setHintsRevealedCount(newCount);
    refreshProfile();
  };

  const handleTabSelect = (tab: ActiveTab) => {
    if (tab === 'hints') {
      setHintModalOpen(true);
    } else if (tab === 'accuse') {
      setAccusationModalOpen(true);
    } else {
      setActiveTab(tab);
    }
  };

  const pinnedEvidenceItems = mystery.evidence.filter((e) =>
    pinnedEvidenceIds.includes(e.id)
  );
  const suspiciousEvidenceItems = mystery.evidence.filter((e) =>
    suspiciousEvidenceIds.includes(e.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-detective-950">
      
      {/* Top Case Dashboard Header Bar */}
      <div className="border-b border-detective-800 bg-detective-900/95 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Left Case Info */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <Link
              href="/cases"
              className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-detective-800 transition-colors shrink-0"
              title="Return to Library"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>

            <div className="flex items-center space-x-2 min-w-0">
              <span className="font-mono text-xs sm:text-sm font-bold text-evidence shrink-0">
                {mystery.caseNumber}
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <h1 className="font-serif text-base sm:text-xl font-bold text-neutral-100 truncate">
                {mystery.title}
              </h1>
            </div>

            {isSolved && (
              <span className="stamp-solved text-[9px] sm:text-[10px] py-0 px-1.5 shrink-0">
                CLOSED ✓
              </span>
            )}
          </div>

          {/* Right Action Controls (Desktop) */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
            
            {/* Hint Button */}
            <button
              onClick={() => setHintModalOpen(true)}
              className="flex items-center space-x-1 rounded border border-detective-700 bg-detective-850 hover:border-amber-600 hover:text-amber-400 px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
              <span>Hints ({hintsRevealedCount}/3)</span>
            </button>

            {/* Solution Room Accusation CTA */}
            <button
              onClick={() => setAccusationModalOpen(true)}
              className="flex items-center space-x-1.5 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-4 py-1.5 font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-all active:scale-95"
            >
              <Gavel className="h-3.5 w-3.5" />
              <span>{isSolved ? 'Review Indictment' : 'File Accusation'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Investigation Workspace: Left Nav, Center Board, Right Notebook */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Left Sidebar */}
        <InvestigationSidebar
          activeTab={activeTab}
          onSelectTab={handleTabSelect}
          evidenceCount={mystery.evidence.length}
          suspectsCount={mystery.suspects.length}
          timelineCount={mystery.timeline.length}
          witnessCount={mystery.witnesses.length}
          documentCount={mystery.evidence.filter((e) => e.type === 'document' || e.type === 'digital').length}
          hintsUsedCount={hintsRevealedCount}
        />

        {/* Center Investigation Stage */}
        <main className="flex-1 p-3 sm:p-6 lg:p-8 min-w-0 overflow-y-auto pb-24 lg:pb-8">
          
          {/* TAB 1: OVERVIEW & BRIEFING */}
          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-4xl">
              
              {/* Dossier Header Banner */}
              <div className="rounded border border-detective-700 bg-detective-900 p-6 sm:p-8 space-y-4 dossier-paper">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-detective-800 pb-4 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="stamp-confidential text-[10px]">OFFICIAL INCIDENT REPORT</span>
                    <span className="text-neutral-400">•</span>
                    <span
                      className={`px-2 py-0.5 rounded border uppercase ${catColors.bg} ${catColors.text} ${catColors.border}`}
                    >
                      {mystery.categoryDisplay}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-neutral-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-neutral-500" />
                      <span>{mystery.estimatedTime}</span>
                    </span>
                    <span>•</span>
                    <span className="text-amber-400 font-semibold">
                      {mystery.difficultyLabel} (Level {mystery.difficulty}/5)
                    </span>
                  </div>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-100">
                  {mystery.title}
                </h2>

                <div className="font-serif italic text-sm text-neutral-300">
                  Jurisdiction & Setting: {mystery.setting}
                </div>

                <div className="p-4 rounded border-l-2 border-evidence bg-detective-950 font-sans text-sm text-neutral-200 leading-relaxed">
                  {mystery.shortDescription}
                </div>

                {mystery.disclaimer && (
                  <div className="rounded border border-amber-900/40 bg-amber-950/20 p-3 font-mono text-xs text-amber-300">
                    Note: {mystery.disclaimer}
                  </div>
                )}
              </div>

              {/* Full Crime Narrative */}
              <div className="rounded border border-detective-800 bg-detective-900/70 p-6 sm:p-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-evidence font-bold block">
                  PRIMARY INCIDENT NARRATIVE
                </span>
                <div className="font-serif text-sm sm:text-base text-neutral-200 leading-relaxed whitespace-pre-line space-y-3">
                  {mystery.fullStory}
                </div>
              </div>

              {/* Quick Investigation Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('evidence')}
                  className="rounded border border-detective-800 bg-detective-900 hover:border-detective-600 p-4 text-left space-y-1 transition-colors group"
                >
                  <span className="text-evidence font-bold block group-hover:underline">
                    [+] Inspect Evidence ({mystery.evidence.length})
                  </span>
                  <span className="text-neutral-400 text-[11px] block">
                    Examine physical items and laboratory tests.
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('suspects')}
                  className="rounded border border-detective-800 bg-detective-900 hover:border-detective-600 p-4 text-left space-y-1 transition-colors group"
                >
                  <span className="text-evidence font-bold block group-hover:underline">
                    [+] Interrogate Suspects ({mystery.suspects.length})
                  </span>
                  <span className="text-neutral-400 text-[11px] block">
                    Review alibis, motives, and statements.
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('timeline')}
                  className="rounded border border-detective-800 bg-detective-900 hover:border-detective-600 p-4 text-left space-y-1 transition-colors group"
                >
                  <span className="text-evidence font-bold block group-hover:underline">
                    [+] Chronological Timeline ({mystery.timeline.length})
                  </span>
                  <span className="text-neutral-400 text-[11px] block">
                    Reconstruct sequence of events.
                  </span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: EVIDENCE */}
          {activeTab === 'evidence' && (
            <EvidenceInspector
              evidenceList={mystery.evidence}
              pinnedIds={pinnedEvidenceIds}
              suspiciousIds={suspiciousEvidenceIds}
              onTogglePin={handleTogglePin}
              onToggleSuspicious={handleToggleSuspicious}
              filterType="all"
            />
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <EvidenceInspector
              evidenceList={mystery.evidence}
              pinnedIds={pinnedEvidenceIds}
              suspiciousIds={suspiciousEvidenceIds}
              onTogglePin={handleTogglePin}
              onToggleSuspicious={handleToggleSuspicious}
              filterType="documents"
            />
          )}

          {/* TAB 4: SUSPECTS */}
          {activeTab === 'suspects' && (
            <SuspectDossier
              suspects={mystery.suspects}
              suspectStatuses={suspectStatuses}
              onUpdateStatus={handleUpdateSuspectStatus}
            />
          )}

          {/* TAB 5: WITNESSES */}
          {activeTab === 'witnesses' && (
            <WitnessTestimony witnesses={mystery.witnesses} />
          )}

          {/* TAB 6: TIMELINE */}
          {activeTab === 'timeline' && (
            <InteractiveTimeline
              timeline={mystery.timeline}
              unlockedEventIds={unlockedTimelineIds}
              onUnlockEvent={(id) => setUnlockedTimelineIds((prev) => [...prev, id])}
            />
          )}

          {/* TAB 7: LOCATIONS */}
          {activeTab === 'locations' && (
            <CaseLocations locations={mystery.locations} setting={mystery.setting} />
          )}

        </main>

        {/* Right Detective Notebook Panel */}
        <DetectiveNotebook
          caseId={mystery.id}
          initialNotes={notes}
          onSaveNotes={handleSaveNotes}
          pinnedEvidence={pinnedEvidenceItems}
          suspiciousEvidence={suspiciousEvidenceItems}
          suspects={mystery.suspects}
          suspectStatuses={suspectStatuses}
          onUnpinEvidence={handleTogglePin}
          onUnmarkSuspicious={handleToggleSuspicious}
        />

      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-detective-800 bg-detective-950/95 backdrop-blur-md px-3 py-2.5 flex items-center justify-between gap-2.5 shadow-2xl safe-area-bottom">
        <button
          onClick={() => setHintModalOpen(true)}
          className="flex-1 flex items-center justify-center space-x-1.5 rounded border border-detective-700 bg-detective-900 py-2.5 text-xs font-mono text-neutral-300 active:scale-95 transition-all shadow-sm"
        >
          <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
          <span>Hints ({hintsRevealedCount}/3)</span>
        </button>

        <button
          onClick={() => setAccusationModalOpen(true)}
          className="flex-[1.3] flex items-center justify-center space-x-1.5 rounded border border-evidence bg-evidence text-white py-2.5 text-xs font-mono uppercase tracking-wider font-bold shadow-lg shadow-red-950/50 active:scale-95 transition-all"
        >
          <Gavel className="h-3.5 w-3.5" />
          <span>{isSolved ? 'Verdict' : 'Accuse'}</span>
        </button>
      </div>

      {/* Hints Modal */}
      <HintModal
        hints={mystery.hints}
        hintsRevealedCount={hintsRevealedCount}
        onRevealHint={handleRevealHint}
        isOpen={hintModalOpen}
        onClose={() => setHintModalOpen(false)}
      />

      {/* Solution Room Accusation Modal */}
      <AccusationModal
        mystery={mystery}
        isOpen={accusationModalOpen}
        onClose={() => setAccusationModalOpen(false)}
        onCaseSolved={() => {
          setIsSolved(true);
          refreshProfile();
        }}
      />

    </div>
  );
}
