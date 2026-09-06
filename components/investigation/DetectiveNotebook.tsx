'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';
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
  Lightbulb,
  GripVertical,
  GripHorizontal,
  Maximize2,
  Minimize2,
  Minus
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
  // Desktop side panel state (defaults open on desktop)
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  // Mobile floating window states (starts collapsed as floating movable pill)
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [notesText, setNotesText] = useState(initialNotes || '');
  const [savedStatus, setSavedStatus] = useState(false);

  // Drag controls & refs
  const constraintsRef = useRef<HTMLDivElement>(null);
  const windowDragControls = useDragControls();
  const isDraggingPillRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
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

  // Shared body content across desktop and mobile
  const renderNotebookBody = (isCompact = false) => (
    <div className="flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-4">
        {/* Quick Suspect Hypothesis Generator */}
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">
            Insert Hypothesis Starter:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {suspects.slice(0, 4).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => insertHypothesisTemplate(s.name)}
                className="font-mono text-[10px] border border-detective-800 bg-detective-900 hover:border-evidence px-2 py-0.5 rounded text-neutral-300 hover:text-white transition-colors active:scale-95"
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
              type="button"
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
            rows={isCompact ? 5 : 7}
            placeholder="e.g. Julian claims he was in the forge all night, but the trip-hammer was running on a mechanical cam timer with nobody present..."
            className="w-full rounded border border-detective-800 bg-detective-900 p-2.5 sm:p-3 font-mono text-xs text-neutral-200 placeholder-neutral-600 focus:border-evidence focus:outline-none leading-relaxed resize-y"
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
            <div className={`space-y-1.5 ${isCompact ? 'max-h-32' : 'max-h-40'} overflow-y-auto pr-0.5`}>
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
                    type="button"
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
              Click &quot;Pin to Board&quot; on evidence items to store them here.
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
                    type="button"
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
      </div>

      {/* Bottom Status */}
      <div className="pt-3 border-t border-detective-900 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
        <span>LOCAL PERSISTENCE ACTIVE</span>
        <Lightbulb className="h-3.5 w-3.5 text-neutral-600" />
      </div>
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE (PHONE / TABLET) FLOATING & MOVABLE NOTEBOOK SYSTEM */}
      {/* ========================================================================= */}
      {isMounted && (
        <div
          ref={constraintsRef}
          className="fixed inset-0 pointer-events-none z-50 xl:hidden overflow-hidden p-2"
        >
          <AnimatePresence>
            {/* 1. Closed State: Draggable & Floating Launcher Pill */}
            {!isMobileOpen && (
              <motion.div
                key="notebook-floating-pill"
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.08}
                dragMomentum={false}
                onDragStart={() => {
                  isDraggingPillRef.current = true;
                }}
                onDragEnd={() => {
                  setTimeout(() => {
                    isDraggingPillRef.current = false;
                  }, 120);
                }}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileDrag={{ scale: 1.06, cursor: 'grabbing' }}
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  if (!isDraggingPillRef.current) {
                    setIsMobileOpen(true);
                  }
                }}
                className="pointer-events-auto absolute bottom-20 right-4 touch-none select-none flex items-center space-x-2 rounded-full border border-evidence/80 bg-detective-900/95 text-neutral-200 px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:border-evidence backdrop-blur-md font-mono text-xs cursor-grab active:cursor-grabbing group transition-all"
                title="Drag to move anywhere, or tap to open notebook"
              >
                <div className="flex items-center text-neutral-500 group-hover:text-neutral-400">
                  <GripVertical className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center space-x-1.5">
                  <BookOpen className="h-4 w-4 text-evidence" />
                  <span className="font-semibold text-neutral-100">Notebook</span>
                </div>
                {pinnedEvidence.length > 0 && (
                  <span className="rounded-full bg-evidence/25 border border-evidence/50 text-evidence-light px-1.5 py-0.5 text-[10px] font-bold">
                    {pinnedEvidence.length}
                  </span>
                )}
              </motion.div>
            )}

            {/* 2. Open State: Movable & Floating Detective Notebook Window */}
            {isMobileOpen && !isMobileExpanded && (
              <motion.div
                key="notebook-floating-window"
                drag
                dragListener={false}
                dragControls={windowDragControls}
                dragConstraints={constraintsRef}
                dragElastic={0.05}
                dragMomentum={false}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto absolute top-20 left-3 w-[min(94vw,390px)] max-h-[72vh] rounded-xl border border-detective-750 bg-detective-950/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
              >
                {/* Movable Top Header Bar */}
                <div
                  onPointerDown={(e) => windowDragControls.start(e)}
                  className="flex items-center justify-between px-3.5 py-2.5 bg-detective-900 border-b border-detective-800 cursor-grab active:cursor-grabbing select-none touch-none rounded-t-xl"
                  title="Drag this bar to move notebook anywhere on screen"
                >
                  <div className="flex items-center space-x-2">
                    <div className="p-1 rounded bg-detective-800 text-neutral-400">
                      <GripHorizontal className="h-4 w-4" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-evidence" />
                      <span className="font-serif text-sm font-bold text-neutral-100">
                        Detective’s Notebook
                      </span>
                    </div>
                    <span className="hidden xs:inline-block font-mono text-[9px] uppercase tracking-wider text-neutral-400 bg-detective-800/80 px-1.5 py-0.5 rounded">
                      Movable
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {/* Expand to Full Bottom Sheet */}
                    <button
                      type="button"
                      onClick={() => setIsMobileExpanded(true)}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-detective-800 transition-colors"
                      title="Expand to Full View"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                    {/* Minimize back to pill */}
                    <button
                      type="button"
                      onClick={() => setIsMobileOpen(false)}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-detective-800 transition-colors"
                      title="Minimize to Floating Pill"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    {/* Close */}
                    <button
                      type="button"
                      onClick={() => setIsMobileOpen(false)}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-detective-800 transition-colors"
                      title="Close"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Body Content with independent vertical scroll */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-4 touch-auto">
                  {renderNotebookBody(true)}
                </div>

                {/* Movable Bottom Handle Bar */}
                <div
                  onPointerDown={(e) => windowDragControls.start(e)}
                  className="py-1 px-3 bg-detective-900/90 border-t border-detective-800 text-center cursor-grab active:cursor-grabbing text-neutral-500 hover:text-neutral-300 font-mono text-[9px] uppercase tracking-wider select-none touch-none flex items-center justify-center space-x-1.5"
                  title="Drag here to move notebook"
                >
                  <GripHorizontal className="h-3 w-3" />
                  <span>Drag header or footer to move</span>
                </div>
              </motion.div>
            )}

            {/* 3. Expanded Full Sheet Mode (when detective wants full screen focus) */}
            {isMobileOpen && isMobileExpanded && (
              <motion.div
                key="notebook-expanded-sheet"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="pointer-events-auto fixed inset-x-2 top-16 bottom-16 rounded-xl border border-detective-700 bg-detective-950/98 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden z-50"
              >
                {/* Expanded Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-detective-900 border-b border-detective-800">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-evidence" />
                    <span className="font-serif text-base font-bold text-neutral-100">
                      Detective’s Notebook
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest bg-detective-800 px-2 py-0.5 rounded">
                      FULL VIEW
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={() => setIsMobileExpanded(false)}
                      className="px-2 py-1 text-neutral-300 hover:text-white rounded bg-detective-800 hover:bg-detective-700 flex items-center space-x-1 text-xs font-mono transition-colors"
                      title="Return to Floating Window"
                    >
                      <Minimize2 className="h-3.5 w-3.5" />
                      <span>Float</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobileOpen(false)}
                      className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-detective-800 transition-colors"
                      title="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-5">
                  {renderNotebookBody(false)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DESKTOP SIDE PANEL (STABLE & DOCKED FOR SCREENS >= 1280px) */}
      {/* ========================================================================= */}
      <aside
        className={`hidden xl:flex sticky top-16 right-0 z-10 h-[calc(100vh-4rem)] border-l border-detective-800 bg-detective-950 transition-all duration-300 ${
          isDesktopOpen ? 'w-96' : 'w-10 overflow-hidden'
        }`}
      >
        {/* Toggle Collapse Button (Desktop) */}
        <button
          type="button"
          onClick={() => setIsDesktopOpen(!isDesktopOpen)}
          className="h-10 w-10 border-b border-detective-800 bg-detective-900 text-neutral-400 hover:text-white flex items-center justify-center shrink-0 self-start transition-colors"
          title={isDesktopOpen ? 'Collapse Notebook' : 'Expand Notebook'}
        >
          {isDesktopOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>

        {/* Notebook Body */}
        {isDesktopOpen && (
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
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  PERSISTENT LOG
                </span>
              </div>
              <p className="font-sans text-[11px] text-neutral-400">
                Record deductions, contradictory statements, and suspect theories.
              </p>
            </div>

            {renderNotebookBody(false)}
          </div>
        )}
      </aside>
    </>
  );
}
