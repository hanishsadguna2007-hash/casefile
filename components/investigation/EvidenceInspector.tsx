'use client';

import React, { useState } from 'react';
import { EvidenceItem } from '@/types/mystery';
import { 
  Search, 
  Pin, 
  AlertTriangle, 
  Eye, 
  FileText, 
  Cpu, 
  Sparkles, 
  ZoomIn, 
  Check, 
  Folder 
} from 'lucide-react';

interface EvidenceInspectorProps {
  evidenceList: EvidenceItem[];
  pinnedIds: string[];
  suspiciousIds: string[];
  onTogglePin: (id: string) => void;
  onToggleSuspicious: (id: string) => void;
  filterType?: 'all' | 'documents';
}

export default function EvidenceInspector({
  evidenceList,
  pinnedIds,
  suspiciousIds,
  onTogglePin,
  onToggleSuspicious,
  filterType = 'all',
}: EvidenceInspectorProps) {
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem>(evidenceList[0]);
  const [inspectMode, setInspectMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'physical' | 'document' | 'digital'>('all');

  const filtered = evidenceList.filter((e) => {
    if (filterType === 'documents') {
      return e.type === 'document' || e.type === 'digital';
    }
    if (activeFilter === 'all') return true;
    return e.type === activeFilter;
  });

  const isPinned = pinnedIds.includes(selectedEvidence?.id || '');
  const isSuspicious = suspiciousIds.includes(selectedEvidence?.id || '');

  const getTypeBadge = (type: EvidenceItem['type']) => {
    switch (type) {
      case 'physical':
        return 'border-amber-700/60 bg-amber-950/30 text-amber-400';
      case 'document':
        return 'border-blue-700/60 bg-blue-950/30 text-blue-400';
      case 'digital':
        return 'border-cyan-700/60 bg-cyan-950/30 text-cyan-400';
      case 'visual':
        return 'border-purple-700/60 bg-purple-950/30 text-purple-400';
      default:
        return 'border-neutral-700 bg-neutral-900 text-neutral-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Evidence Type Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-detective-800 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
            FORENSIC VAULT
          </span>
          <h2 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
            {filterType === 'documents' ? 'Documents & Transcripts' : 'Evidence Inventory'}
          </h2>
        </div>

        {filterType === 'all' && (
          <div className="flex items-center space-x-1 font-mono text-xs">
            {(['all', 'physical', 'document', 'digital'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveFilter(t)}
                className={`px-3 py-1 rounded border uppercase tracking-wider transition-colors ${
                  activeFilter === t
                    ? 'border-evidence bg-evidence text-white font-semibold'
                    : 'border-detective-800 bg-detective-900 text-neutral-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Split Grid: Left items list, Right detailed forensics card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Evidence Cards List (5 columns) */}
        <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
          {filtered.map((item) => {
            const isItemPinned = pinnedIds.includes(item.id);
            const isItemSuspicious = suspiciousIds.includes(item.id);
            const isCurrent = selectedEvidence?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedEvidence(item)}
                className={`p-4 rounded border cursor-pointer transition-all ${
                  isCurrent
                    ? 'border-evidence bg-detective-850 shadow-md ring-1 ring-evidence/40'
                    : 'border-detective-800 bg-detective-900/60 hover:border-detective-700 hover:bg-detective-850'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-evidence">
                      {item.code}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider ${getTypeBadge(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {isItemPinned && (
                      <span className="h-2 w-2 rounded-full bg-evidence" title="Pinned clue" />
                    )}
                    {isItemSuspicious && (
                      <span className="h-2 w-2 rounded-full bg-amber-400" title="Suspicious" />
                    )}
                  </div>
                </div>

                <h4 className="font-serif text-base font-bold text-neutral-100">
                  {item.title}
                </h4>

                <p className="font-sans text-xs text-neutral-400 mt-1 line-clamp-2">
                  {item.summary}
                </p>

                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mt-3 pt-2 border-t border-detective-800">
                  <span>Loc: {item.locationFound}</span>
                  <span>{item.collectedAt}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Evidence Detail Inspector (7 columns) */}
        {selectedEvidence && (
          <div className="lg:col-span-7 rounded border border-detective-700 bg-detective-900 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative dossier-paper">
            
            {/* Top Toolbar */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-detective-800 pb-4 mb-6">
                <div>
                  <span className="stamp-evidence mr-2">EVIDENCE SEALED</span>
                  <span className="font-mono text-xs text-neutral-400">
                    CHAIN OF CUSTODY VERIFIED
                  </span>
                </div>

                <div className="flex items-center space-x-2 font-mono text-xs">
                  <button
                    onClick={() => onTogglePin(selectedEvidence.id)}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded border transition-colors ${
                      isPinned
                        ? 'border-evidence bg-evidence text-white font-semibold'
                        : 'border-detective-700 bg-detective-850 text-neutral-300 hover:border-detective-500'
                    }`}
                  >
                    <Pin className="h-3.5 w-3.5" />
                    <span>{isPinned ? 'Pinned Clue' : 'Pin to Board'}</span>
                  </button>

                  <button
                    onClick={() => onToggleSuspicious(selectedEvidence.id)}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded border transition-colors ${
                      isSuspicious
                        ? 'border-amber-500 bg-amber-950 text-amber-300 font-semibold'
                        : 'border-detective-700 bg-detective-850 text-neutral-300 hover:border-detective-500'
                    }`}
                  >
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                    <span>{isSuspicious ? 'Flagged Suspicious' : 'Mark Suspicious'}</span>
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 font-mono text-xs text-neutral-400">
                  <span className="font-bold text-evidence text-sm">{selectedEvidence.code}</span>
                  <span>•</span>
                  <span className="uppercase">{selectedEvidence.category}</span>
                  <span>•</span>
                  <span>Recovered: {selectedEvidence.collectedAt}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100">
                  {selectedEvidence.title}
                </h3>

                <div className="rounded border border-detective-800 bg-detective-950 p-3 font-mono text-xs text-neutral-300 flex items-center justify-between">
                  <span>Location Found:</span>
                  <strong className="text-neutral-100">{selectedEvidence.locationFound}</strong>
                </div>
              </div>

              {/* Summary Callout */}
              <div className="mt-5 p-4 rounded border-l-2 border-evidence bg-detective-950/80">
                <span className="font-mono text-[10px] uppercase tracking-widest text-evidence font-bold block mb-1">
                  PRELIMINARY FIELD SUMMARY
                </span>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  {selectedEvidence.summary}
                </p>
              </div>

              {/* Detailed Forensic Content */}
              <div className="mt-6 space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                  LABORATORY & FORENSIC ANALYSIS
                </span>
                <div className="rounded border border-detective-800 bg-detective-950/60 p-5 font-sans text-sm text-neutral-200 leading-relaxed whitespace-pre-line">
                  {selectedEvidence.detailedContent}
                </div>
              </div>

              {/* Magnifier Examination Mode Toggle */}
              <div className="mt-6">
                <button
                  onClick={() => setInspectMode(!inspectMode)}
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 border border-amber-700/40 bg-amber-950/20 px-3 py-1.5 rounded"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>
                    {inspectMode ? 'Close Magnifier Tool' : 'Examine Microscopic Traces'}
                  </span>
                </button>
              </div>

              {/* Inspect Zoom Simulation Card */}
              {inspectMode && (
                <div className="mt-4 rounded border border-amber-500/50 bg-detective-950 p-4 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between font-mono text-[10px] text-amber-400 uppercase tracking-widest">
                    <span>10x Optical Magnification Active</span>
                    <span>SPECTRAL UV SWAB</span>
                  </div>
                  <div className="p-3 bg-black/80 rounded border border-neutral-800 font-mono text-xs text-amber-200 space-y-1">
                    <p>• Chemical Latent Surface: 99.4% Match found with laboratory residue database.</p>
                    <p>• Micro-Fiber Analysis: High-tensile synthetic filament particles detected.</p>
                    <p>• No biological blood contamination from the victim detected on this surface.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer stamp */}
            <div className="mt-8 pt-4 border-t border-detective-800 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>EVIDENCE FILE ID: {selectedEvidence.id.toUpperCase()}</span>
              <span>CASEFILE ARCHIVAL INTEGRITY</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
