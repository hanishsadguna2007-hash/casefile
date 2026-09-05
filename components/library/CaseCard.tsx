'use client';

import React from 'react';
import Link from 'next/link';
import { Mystery } from '@/types/mystery';
import { getCategoryBadgeColor } from '@/lib/utils';
import { Clock, Users, FileSearch, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseCardProps {
  mystery: Mystery;
  isSolved?: boolean;
}

export default function CaseCard({ mystery, isSolved = false }: CaseCardProps) {
  const catColors = getCategoryBadgeColor(mystery.category);

  return (
    <div className="relative rounded border border-detective-800 bg-detective-900/70 p-5 sm:p-6 flex flex-col justify-between hover:border-detective-600 hover:bg-detective-850 transition-all group dossier-paper">
      
      {/* Top File Header */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-evidence tracking-wider">
              {mystery.caseNumber}
            </span>
            <span className="text-neutral-600">•</span>
            <span
              className={`rounded border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${catColors.bg} ${catColors.text} ${catColors.border}`}
            >
              {mystery.categoryDisplay}
            </span>
          </div>

          {/* Status Stamp */}
          {isSolved ? (
            <span className="stamp-solved text-[10px] py-0.5 px-2">
              CASE CLOSED ✓
            </span>
          ) : (
            <span className="stamp-confidential text-[10px] py-0.5 px-2">
              UNSOLVED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-neutral-100 group-hover:text-amber-200 transition-colors tracking-tight">
          {mystery.title}
        </h3>

        {/* Setting */}
        <p className="font-serif italic text-xs text-neutral-400 mt-1">
          {mystery.setting}
        </p>

        {/* Description */}
        <p className="font-sans text-xs text-neutral-300/90 mt-3 line-clamp-3 leading-relaxed">
          {mystery.shortDescription}
        </p>

        {mystery.disclaimer && (
          <p className="font-mono text-[10px] text-amber-400/90 bg-amber-950/20 border border-amber-900/30 p-2 rounded mt-2.5">
            {mystery.disclaimer}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {mystery.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-neutral-400 border border-detective-800 bg-detective-950 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Metadata & CTA */}
      <div className="pt-4 mt-5 border-t border-detective-800/80 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center space-x-2 sm:space-x-3 font-mono text-[11px] sm:text-xs text-neutral-400">
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
            <span>{mystery.estimatedTime}</span>
          </div>
          <span>•</span>
          <span className="text-amber-400/90 font-medium">
            {mystery.difficultyLabel} ({mystery.difficulty}/5)
          </span>
        </div>

        <Link
          href={`/cases/${mystery.id}`}
          className="inline-flex items-center space-x-1.5 rounded border border-detective-700 bg-detective-950 hover:border-evidence hover:bg-evidence hover:text-white px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-neutral-200 transition-colors active:scale-95 shrink-0"
        >
          <span>Investigate</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
