'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldAlert, FileText, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-detective-800 bg-detective-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Archival Grid & Background watermark */}
      <div className="absolute inset-0 investigation-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-24 right-10 select-none pointer-events-none opacity-5">
        <span className="font-mono text-[14rem] font-bold text-neutral-100">CONFIDENTIAL</span>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        
        {/* Top File Folder Tag */}
        <div className="inline-flex items-center space-x-2 border border-detective-700 bg-detective-900/90 px-3.5 py-1.5 rounded-full shadow-sm">
          <span className="h-2 w-2 rounded-full bg-evidence animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            CASE ARCHIVE DIVISION • 30 ACTIVE INVESTIGATIONS
          </span>
        </div>

        {/* Cinematic Headline */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="stamp-confidential text-sm sm:text-base">EVIDENCE FILE // EYES ONLY</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1]">
            EVERY CASE HAS AN ANSWER.
          </h1>
          
          <p className="font-serif italic text-xl sm:text-2xl text-neutral-300 max-w-2xl mx-auto">
            The evidence is already there. The question is whether you can see it.
          </p>
        </div>

        {/* Narrative subtext */}
        <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Open real digital case files. Scrutinize forensic reports, analyze contradictory witness statements, inspect physical clues, cross-reference timelines, and expose the killer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/cases/case-001"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-7 py-3.5 font-mono text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-red-950/40"
          >
            <span>START INVESTIGATING</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/cases"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-900 hover:bg-detective-850 hover:border-detective-600 text-neutral-200 px-7 py-3.5 font-mono text-xs uppercase tracking-widest transition-all"
          >
            <Compass className="h-4 w-4 text-neutral-400" />
            <span>BROWSE CASE FILES</span>
          </Link>
        </div>

        {/* 4-point investigation pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left">
          <div className="rounded border border-detective-800 bg-detective-900/60 p-4">
            <div className="font-mono text-[10px] text-evidence uppercase tracking-widest mb-1">STEP 01</div>
            <div className="font-serif text-sm font-semibold text-neutral-200">Analyze Evidence</div>
            <div className="font-sans text-xs text-neutral-500 mt-1">Chemical tests, phone logs, and inspected objects.</div>
          </div>

          <div className="rounded border border-detective-800 bg-detective-900/60 p-4">
            <div className="font-mono text-[10px] text-evidence uppercase tracking-widest mb-1">STEP 02</div>
            <div className="font-serif text-sm font-semibold text-neutral-200">Question Suspects</div>
            <div className="font-sans text-xs text-neutral-500 mt-1">Alibis, motives, and psychological profiling.</div>
          </div>

          <div className="rounded border border-detective-800 bg-detective-900/60 p-4">
            <div className="font-mono text-[10px] text-evidence uppercase tracking-widest mb-1">STEP 03</div>
            <div className="font-serif text-sm font-semibold text-neutral-200">Find Contradictions</div>
            <div className="font-sans text-xs text-neutral-500 mt-1">Shatter false alibis using timeline gaps.</div>
          </div>

          <div className="rounded border border-detective-800 bg-detective-900/60 p-4">
            <div className="font-mono text-[10px] text-evidence uppercase tracking-widest mb-1">STEP 04</div>
            <div className="font-serif text-sm font-semibold text-neutral-200">Solve The Case</div>
            <div className="font-sans text-xs text-neutral-500 mt-1">Prove culprit, method, and motive in the Solution Room.</div>
          </div>
        </div>

      </div>
    </section>
  );
}
