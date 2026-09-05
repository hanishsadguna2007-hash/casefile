'use client';

import React from 'react';
import Link from 'next/link';
import { Mystery } from '@/types/mystery';
import { getRankBadgeColor, getCategoryBadgeColor } from '@/lib/utils';
import { ArrowRight, Clock, Users, FileSearch, ShieldAlert } from 'lucide-react';

interface FeaturedCaseProps {
  mystery: Mystery;
}

export default function FeaturedCase({ mystery }: FeaturedCaseProps) {
  const catColors = getCategoryBadgeColor(mystery.category);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-detective-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
            SPOTLIGHT DOSSIER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-neutral-100 font-bold mt-1">
            Featured Investigation
          </h2>
        </div>
        <Link
          href="/cases"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center space-x-1"
        >
          <span>View All 30 Cases</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Archival Dossier Card */}
      <div className="relative rounded border border-detective-700 bg-detective-900 shadow-2xl overflow-hidden group">
        
        {/* Top Folder Tab Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-detective-800 bg-detective-950 px-4 sm:px-6 py-3 sm:py-3.5 gap-2">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <span className="font-mono text-xs font-bold text-evidence tracking-wider">
              {mystery.caseNumber}
            </span>
            <span className="text-neutral-600">•</span>
            <span
              className={`rounded border px-2 py-0.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider ${catColors.bg} ${catColors.text} ${catColors.border}`}
            >
              {mystery.categoryDisplay}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-[11px] sm:text-xs text-neutral-400">
            <div className="flex items-center space-x-1">
              <Clock className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
              <span>{mystery.estimatedTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
              <span>{mystery.suspects.length} Suspects</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileSearch className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
              <span>{mystery.evidence.length} Clues</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="stamp-confidential text-xs">UNSOLVED</span>
              <span className="text-xs font-mono text-neutral-400 uppercase">
                Difficulty: <strong className="text-amber-400">{mystery.difficultyLabel}</strong> (Lvl {mystery.difficulty}/5)
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-3xl font-bold text-neutral-100 group-hover:text-amber-200/90 transition-colors leading-tight">
              {mystery.title}
            </h3>

            <p className="font-serif italic text-xs sm:text-sm text-neutral-300">
              Setting: {mystery.setting}
            </p>

            <p className="font-sans text-sm text-neutral-400 leading-relaxed">
              {mystery.shortDescription}
            </p>

            {mystery.disclaimer && (
              <p className="font-mono text-xs text-amber-500/80 bg-amber-950/20 border border-amber-800/30 p-2.5 rounded">
                Note: {mystery.disclaimer}
              </p>
            )}

            {/* Clue preview badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {mystery.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-detective-800 bg-detective-950 px-2.5 py-1 text-[11px] font-mono text-neutral-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Action Callout */}
          <div className="flex flex-col justify-between rounded border border-detective-800 bg-detective-950/80 p-6">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                FORENSIC SUMMARY
              </span>
              <div className="text-xs font-sans text-neutral-400 space-y-2">
                <p>
                  • Victim was dead in locked quarters.
                </p>
                <p>
                  • Internal deadbolt was thrown without physical key access.
                </p>
                <p>
                  • All 3 suspects provide matching alibis that require cross-examination.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={`/cases/${mystery.id}`}
                className="w-full flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence/90 hover:bg-evidence text-white px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all"
              >
                <span>OPEN CASE FILE</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
