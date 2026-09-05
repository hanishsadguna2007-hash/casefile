'use client';

import React, { useState, useEffect } from 'react';
import { EvidenceItem, Suspect, SuspectStatus } from '@/types/mystery';
import { 
  BookOpen, 
  Pin, 
  AlertTriangle, 
  Save, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Trash2,
  Lightbulb
} from 'lucide-react';

interface DetectiveNotebookProps {
  caseId: string;
  initialNotes: string;
  onSaveNotes: (notes: string) => void;
  pinnedEvidence: EvidenceItem[];
  suspiciousEvidence: EvidenceItem[];
  suspects: Suspect[];
  suspectStatuses: Record<string, SuspectStatus>;
  onUnpinEvidence: (id: string) => void;
  onUnmarkSuspicious: (id: string) => void;
}

export default function DetectiveNotebook({
  caseId,
  initialNotes,
  onSaveNotes,
  pinnedEvidence,
  suspiciousEvidence,
  suspects,
  suspectStatuses,
  onUnpinEvidence,
  onUnmarkSuspicious,
}: DetectiveNotebookProps) {
  // Start open on desktop (>= 1280px), closed on smaller screens to prevent blocking
  const [isOpen, setIsOpen] = useState(false);
  const [notesText, setNotesText] = useState(initialNotes || '');
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    // Check window width on mount
    if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    setNotesText(initialNotes || '');
  }, [initialNotes]);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNotesText(val);
    setSavedStatus(false);
  };

  const handleManualSave = () => {
    onSaveNotes(notesText);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  const insertHypothesisTemplate = (suspectName: string) => {
    const template = `\n• THEORY: ${suspectName} had opportunity because [...], which contradicts their stated alibi when cross-referenced with [...]`;
    const updated = notesText + template;
    setNotesText(updated);
    onSaveNotes(updated);
  };

  return (
    <>
      {/* Mobile Floating Button to open notebook when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 xl:hidden flex items-center space-x-2 rounded-full border border-evidence bg-detective-900 text-neutral-200 px-4 py-2.5 shadow-2xl hover:border-red-500 font-mono text-xs"
        >
          <BookOpen className="h-4 w-4 text-evidence" />
          <span>Notebook ({pinnedEvidence.length} Clues)</span>
        </button>
      )}

      {/* Mobile Backdrop when open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 xl:hidden backdrop-blur-xs"
        />
      )}

      {/* Main Drawer / Desktop Side Panel */}
      <div
        className={`fixed xl:sticky top-16 right-0 z-40 xl:z-10 h-[calc(100vh-4rem)] border-l border-detective-800 bg-detective-950 transition-all duration-300 flex ${
          isOpen ? 'w-full max-w-sm xl:w-96' : 'w-0 xl:w-10 overflow-hidden'
        }`}
      >
        {/* Toggle Collapse Button (Desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden xl:flex h-10 w-10 border-b border-detective-800 bg-detective-900 text-neutral-400 hover:text-white items-center justify-center shrink-0 self-start"
          title={isOpen ? 'Collapse Notebook' : 'Expand Notebook'}
        >
          {isOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>

        {/* Notebook Body */}
        {isOpen && (
          <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto space-y-5 w-full">
            
            {/* Header */}
            <div className="space-y-1 border-b border-detective-800 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-evidence" />
                  <h3 className="font-serif text-lg font-bold text-neutral-100">
                    Detective’s Notebook
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    PERSISTENT LOG
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="xl:hidden p-1 text-neutral-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="font-sans text-[11px] text-neutral-400">
                Record deductions, contradictory statements, and suspect theories.
              </p>
            </div>

            {/* Quick Suspect Hypothesis Generator */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">
                Insert Hypothesis Starter:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suspects.slice(0, 3).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => insertHypothesisTemplate(s.name)}
                    className="font-mono text-[10px] border border-detective-800 bg-detective-900 hover:border-evidence px-2 py-0.5 rounded text-neutral-300 hover:text-white transition-colors"
                  >
                    + {s.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>Personal Case Notes:</span>
                <button
                  onClick={handleManualSave}
                  className="text-evidence hover:text-red-400 flex items-center space-x-1"
                >
                  {savedStatus ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Saved</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-3 w-3" />
                      <span>Save</span>
                    </>
                  )}
                </button>
              </div>

              <textarea
                value={notesText}
                onChange={handleNotesChange}
                onBlur={handleManualSave}
                rows={7}
                placeholder="e.g. Julian claims he was in the forge all night, but the trip-hammer was running on a mechanical cam timer with nobody present..."
                className="w-full rounded border border-detective-800 bg-detective-900 p-3 font-mono text-xs text-neutral-200 placeholder-neutral-600 focus:border-evidence focus:outline-none leading-relaxed"
              />
            </div>

            {/* Pinned Evidence Shelf */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-300">
                <div className="flex items-center space-x-1.5">
                  <Pin className="h-3.5 w-3.5 text-evidence" />
                  <span className="font-semibold">Pinned Clues ({pinnedEvidence.length})</span>
                </div>
              </div>

              {pinnedEvidence.length > 0 ? (
                <div className="space-y-1.5 max-h-40 overflow-y-auto">
                  {pinnedEvidence.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between rounded border border-detective-800 bg-detective-900/80 p-2 text-xs"
                    >
                      <div className="overflow-hidden pr-2">
                        <span className="font-mono text-[10px] text-evidence font-bold block">
                          {ev.code}
                        </span>
                        <span className="font-sans text-xs text-neutral-200 truncate block">
                          {ev.title}
                        </span>
                      </div>
                      <button
                        onClick={() => onUnpinEvidence(ev.id)}
                        className="text-neutral-500 hover:text-red-400 p-1"
                        title="Unpin"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-[11px] text-neutral-500 italic p-2 border border-dashed border-detective-800 rounded text-center">
                  Click "Pin to Board" on evidence items to store them here.
                </p>
              )}
            </div>

            {/* Flagged Suspicious Clues */}
            {suspiciousEvidence.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 font-mono text-xs text-amber-400">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span className="font-semibold">Suspicious Leads ({suspiciousEvidence.length})</span>
                </div>
                <div className="space-y-1">
                  {suspiciousEvidence.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between rounded border border-amber-900/30 bg-amber-950/20 p-2 text-xs"
                    >
                      <span className="font-mono text-xs text-amber-200 truncate">
                        {ev.code}: {ev.title}
                      </span>
                      <button
                        onClick={() => onUnmarkSuspicious(ev.id)}
                        className="text-neutral-500 hover:text-amber-400 p-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Status */}
            <div className="pt-3 border-t border-detective-900 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
              <span>LOCAL PERSISTENCE ACTIVE</span>
              <Lightbulb className="h-3.5 w-3.5 text-neutral-600" />
            </div>

          </div>
        )}
      </div>
    </>
  );
}
