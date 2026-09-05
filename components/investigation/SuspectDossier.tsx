'use client';

import React, { useState } from 'react';
import { Suspect, SuspectStatus } from '@/types/mystery';
import { User, Shield, AlertCircle, CheckCircle, Crosshair, HelpCircle } from 'lucide-react';

interface SuspectDossierProps {
  suspects: Suspect[];
  suspectStatuses: Record<string, SuspectStatus>;
  onUpdateStatus: (suspectId: string, status: SuspectStatus) => void;
}

export default function SuspectDossier({
  suspects,
  suspectStatuses,
  onUpdateStatus,
}: SuspectDossierProps) {
  const [selectedSuspect, setSelectedSuspect] = useState<Suspect>(suspects[0]);

  const getStatusBadge = (status: SuspectStatus) => {
    switch (status) {
      case 'prime_suspect':
        return {
          label: 'PRIME SUSPECT',
          classes: 'border-red-600 bg-red-950/60 text-red-400 font-bold',
        };
      case 'suspicious':
        return {
          label: 'SUSPICIOUS',
          classes: 'border-amber-600 bg-amber-950/40 text-amber-400 font-medium',
        };
      case 'unlikely':
        return {
          label: 'UNLIKELY',
          classes: 'border-neutral-700 bg-neutral-900 text-neutral-400',
        };
      case 'unreviewed':
      default:
        return {
          label: 'UNREVIEWED',
          classes: 'border-neutral-800 bg-detective-950 text-neutral-500',
        };
    }
  };

  const currentStatus = suspectStatuses[selectedSuspect?.id] || 'unreviewed';

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="border-b border-detective-800 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          PERSONS OF INTEREST
        </span>
        <h2 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
          Suspect Dossiers & Interrogations
        </h2>
        <p className="font-sans text-xs text-neutral-400 mt-1">
          Cross-examine alibis and stated motives. Tag suspects as Unlikely, Suspicious, or Prime Suspect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Suspects Roster Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {suspects.map((s, idx) => {
            const status = suspectStatuses[s.id] || 'unreviewed';
            const badge = getStatusBadge(status);
            const isCurrent = selectedSuspect?.id === s.id;

            return (
              <div
                key={s.id}
                onClick={() => setSelectedSuspect(s)}
                className={`p-4 rounded border cursor-pointer transition-all ${
                  isCurrent
                    ? 'border-evidence bg-detective-850 shadow-md ring-1 ring-evidence/40'
                    : 'border-detective-800 bg-detective-900/60 hover:border-detective-700 hover:bg-detective-850'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                    SUSPECT 0{idx + 1}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider ${badge.classes}`}
                  >
                    {badge.label}
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-neutral-100">
                  {s.name}
                </h4>

                <p className="font-mono text-xs text-neutral-400 mt-0.5">
                  Age {s.age} • {s.occupation}
                </p>

                <p className="font-sans text-xs text-neutral-500 mt-2 line-clamp-1 italic">
                  Relation: {s.relationToCase}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Suspect File (8 cols) */}
        {selectedSuspect && (
          <div className="lg:col-span-8 rounded border border-detective-700 bg-detective-900 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative dossier-paper">
            
            <div className="space-y-6">
              
              {/* Dossier Header & Tagging Dropdown */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-detective-800 pb-4">
                <div>
                  <span className="stamp-confidential text-xs mr-3">CONFIDENTIAL DOSSIER</span>
                  <span className="font-mono text-xs text-neutral-400">
                    ID: {selectedSuspect.id.toUpperCase()}
                  </span>
                </div>

                {/* Status Tagger */}
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="text-neutral-400 hidden sm:inline">Set Status:</span>
                  {(['unlikely', 'suspicious', 'prime_suspect'] as const).map((st) => {
                    const isSelected = currentStatus === st;
                    return (
                      <button
                        key={st}
                        onClick={() => onUpdateStatus(selectedSuspect.id, st)}
                        className={`px-2.5 py-1 rounded border uppercase text-[10px] tracking-wider transition-colors ${
                          isSelected
                            ? st === 'prime_suspect'
                              ? 'border-red-600 bg-red-950 text-red-300 font-bold'
                              : st === 'suspicious'
                              ? 'border-amber-600 bg-amber-950 text-amber-300 font-bold'
                              : 'border-neutral-600 bg-neutral-800 text-neutral-200 font-bold'
                            : 'border-detective-700 bg-detective-950 text-neutral-400 hover:border-detective-600 hover:text-white'
                        }`}
                      >
                        {st === 'prime_suspect' ? 'Prime' : st === 'suspicious' ? 'Suspicious' : 'Unlikely'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Identity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                    FULL LEGAL NAME
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-neutral-100">
                    {selectedSuspect.name}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 mt-1">
                    {selectedSuspect.age} Years of Age • {selectedSuspect.occupation}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                    RELATION TO THE CASE
                  </span>
                  <p className="font-sans text-sm text-neutral-200">
                    {selectedSuspect.relationToCase}
                  </p>
                </div>
              </div>

              {/* Alibi Section */}
              <div className="rounded border border-detective-800 bg-detective-950 p-4 space-y-1">
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest font-bold">
                  OFFICIALLY CLAIMED ALIBI
                </span>
                <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {selectedSuspect.alibi}
                </p>
              </div>

              {/* Motive Section */}
              <div className="rounded border border-red-900/30 bg-red-950/20 p-4 space-y-1">
                <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
                  DISCLOSED CRIMINAL MOTIVE
                </span>
                <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {selectedSuspect.motive}
                </p>
              </div>

              {/* Known Facts */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                  VERIFIED INVESTIGATIVE FINDINGS
                </span>
                <ul className="space-y-2">
                  {selectedSuspect.knownFacts.map((fact, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-xs font-sans text-neutral-300"
                    >
                      <span className="text-evidence font-bold">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formal Statement Transcript */}
              <div className="rounded border border-detective-800 bg-detective-950 p-4 space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                  INTERROGATION STATEMENT TRANSCRIPT
                </span>
                <blockquote className="font-serif italic text-sm text-neutral-300 leading-relaxed border-l-2 border-evidence pl-3">
                  “{selectedSuspect.statement}”
                </blockquote>
              </div>

            </div>

            {/* Footer Status confirmation */}
            <div className="mt-8 pt-4 border-t border-detective-800 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>CURRENT STATUS: {currentStatus.toUpperCase()}</span>
              <span>VERIFY AGAINST TIMELINE & PHYSICAL EVIDENCE</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
