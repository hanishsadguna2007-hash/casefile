'use client';

import React, { useState } from 'react';
import { Hint } from '@/types/mystery';
import { HelpCircle, AlertTriangle, Eye, Lock, CheckCircle2, X } from 'lucide-react';

interface HintModalProps {
  hints: Hint[];
  hintsRevealedCount: number;
  onRevealHint: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function HintModal({
  hints,
  hintsRevealedCount,
  onRevealHint,
  isOpen,
  onClose,
}: HintModalProps) {
  const [confirmingLevel, setConfirmingLevel] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleConfirmReveal = () => {
    onRevealHint();
    setConfirmingLevel(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-lg border border-detective-700 bg-detective-900 shadow-2xl overflow-hidden dossier-paper">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-detective-800 bg-detective-950 px-5 sm:px-6 py-3.5 sm:py-4 shrink-0">
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Advisory Hint Bureau
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close hints"
            className="text-neutral-400 hover:text-white p-1 rounded hover:bg-detective-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          <div>
            <span className="stamp-evidence text-[10px] mb-2">SCORE PENALTY NOTICE</span>
            <h3 className="font-serif text-2xl font-bold text-neutral-100">
              Investigative Hints
            </h3>
            <p className="font-sans text-xs text-neutral-400 mt-1">
              Hints provide progressive guidance. Each uncovered hint deducts 150 to 250 XP from your final Case Closed score.
            </p>
          </div>

          {/* 3 Hints Tiers */}
          <div className="space-y-3">
            {hints.map((h) => {
              const isRevealed = h.level <= hintsRevealedCount;
              const isNextAvailable = h.level === hintsRevealedCount + 1;

              return (
                <div
                  key={h.level}
                  className={`rounded border p-4 transition-all ${
                    isRevealed
                      ? 'border-amber-700/60 bg-amber-950/20'
                      : isNextAvailable
                      ? 'border-detective-700 bg-detective-950'
                      : 'border-detective-850 bg-detective-950/40 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 font-mono text-xs">
                      <span className="font-bold text-amber-400">
                        TIER {h.level}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-neutral-300 font-semibold">{h.title}</span>
                    </div>

                    <span className="font-mono text-[11px] text-red-400">
                      -{h.scorePenalty} XP
                    </span>
                  </div>

                  {isRevealed ? (
                    <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed pt-1">
                      {h.text}
                    </p>
                  ) : isNextAvailable ? (
                    <div className="pt-2">
                      {confirmingLevel === h.level ? (
                        <div className="p-3 rounded border border-amber-500/60 bg-amber-950/40 space-y-2">
                          <p className="font-mono text-xs text-amber-300">
                            Confirm revealing Tier {h.level} hint? Deducts {h.scorePenalty} XP from your rating.
                          </p>
                          <div className="flex space-x-2">
                            <button
                              onClick={handleConfirmReveal}
                              className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider"
                            >
                              Yes, Reveal Clue
                            </button>
                            <button
                              onClick={() => setConfirmingLevel(null)}
                              className="px-3 py-1 rounded border border-detective-700 text-neutral-300 font-mono text-xs"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmingLevel(h.level)}
                          className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-900 hover:border-amber-500 hover:text-amber-300 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Request Tier {h.level} Hint (-{h.scorePenalty} XP)</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 font-mono text-xs text-neutral-500 pt-1">
                      <Lock className="h-3.5 w-3.5" />
                      <span>Unlock Tier {h.level - 1} hint first to view.</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-detective-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 font-mono text-xs uppercase tracking-wider text-neutral-200"
            >
              Resume Investigation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
