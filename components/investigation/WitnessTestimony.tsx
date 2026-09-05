'use client';

import React from 'react';
import { WitnessStatement } from '@/types/mystery';
import { MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';

interface WitnessTestimonyProps {
  witnesses: WitnessStatement[];
}

export default function WitnessTestimony({ witnesses }: WitnessTestimonyProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-detective-800 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          DEPOSITIONS & TESTIMONY
        </span>
        <h2 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
          Witness Statements
        </h2>
        <p className="font-sans text-xs text-neutral-400 mt-1">
          Formal sworn interviews conducted on the scene. Watch for inconsistencies with physical evidence.
        </p>
      </div>

      <div className="space-y-4">
        {witnesses.map((w, index) => (
          <div
            key={w.id}
            className="rounded border border-detective-800 bg-detective-900/70 p-6 space-y-4 hover:border-detective-700 transition-colors dossier-paper"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-detective-800 pb-3 font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="stamp-confidential text-[9px] py-0.5 px-1.5">
                  DEPOSITION #{index + 1}
                </span>
                <strong className="text-neutral-100">{w.witnessName}</strong>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">{w.role}</span>
              </div>

              <div className="text-neutral-500 text-[11px]">
                Recorded: {w.interviewTime}
              </div>
            </div>

            {/* Statement Quote */}
            <blockquote className="font-serif text-sm sm:text-base italic text-neutral-200 leading-relaxed border-l-2 border-evidence pl-4">
              “{w.statement}”
            </blockquote>

            {/* Contradiction / Lead analysis */}
            {w.contradictionHint && (
              <div className="rounded border border-amber-800/40 bg-amber-950/20 p-3 flex items-start space-x-2.5">
                <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-amber-200/90 leading-relaxed">
                  <strong className="font-mono uppercase text-amber-400 text-[10px] tracking-wider block mb-0.5">
                    Investigative Cross-Reference Note:
                  </strong>
                  {w.contradictionHint}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
