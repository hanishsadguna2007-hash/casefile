'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllMysteries } from '@/data/mysteries';
import { MysteryCategory, DifficultyLevel } from '@/types/mystery';
import { caseRepo } from '@/lib/storage/caseRepository';
import CaseCard from '@/components/library/CaseCard';
import CaseFilterBar from '@/components/library/CaseFilterBar';
import EmptyState from '@/components/library/EmptyState';
import { FolderLock, ShieldAlert } from 'lucide-react';
import { useAuth } from '@/lib/auth/authContext';

function CasesLibraryContent() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get('cat') as MysteryCategory) || 'all';
  const { user, openAuthModal } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MysteryCategory | 'all'>(initialCat);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unsolved' | 'solved'>('all');
  const [solvedCaseIds, setSolvedCaseIds] = useState<Set<string>>(new Set());

  // Load user progress to check which cases are solved
  useEffect(() => {
    const solvedSet = new Set<string>();
    if (user?.progress) {
      Object.entries(user.progress).forEach(([cid, prog]) => {
        if (prog.status === 'solved') {
          solvedSet.add(cid);
        }
      });
    }
    setSolvedCaseIds(solvedSet);
  }, [user]);

  // Sync category with URL search param if changed externally
  useEffect(() => {
    const cat = searchParams.get('cat') as MysteryCategory;
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const allCases = useMemo(() => getAllMysteries(), []);

  const filteredCases = useMemo(() => {
    return allCases.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && c.difficulty !== selectedDifficulty) {
        return false;
      }
      // Status filter
      const isSolved = solvedCaseIds.has(c.id);
      if (selectedStatus === 'unsolved' && isSolved) return false;
      if (selectedStatus === 'solved' && !isSolved) return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesNumber = c.caseNumber.toLowerCase().includes(q);
        const matchesDesc = c.shortDescription.toLowerCase().includes(q);
        const matchesSetting = c.setting.toLowerCase().includes(q);
        const matchesTags = c.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesNumber && !matchesDesc && !matchesSetting && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [allCases, selectedCategory, selectedDifficulty, selectedStatus, searchQuery, solvedCaseIds]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
  };

  return (
    <div className="min-h-screen py-6 sm:py-10 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Dossier Stamp Banner */}
      <div className="mb-6 sm:mb-8 border-b border-detective-800 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex items-center space-x-2.5 mb-1.5 sm:mb-2">
            <span className="stamp-confidential text-[10px] sm:text-xs">OFFICIAL REPOSITORY</span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 truncate">
              Department of Solvable Enigmas
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl text-neutral-100 font-bold tracking-tight">
            Case Archive Library
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
            Examine active police dossiers, unsolved museum thefts, dynastic temple enigmas, and modern digital crimes. All investigations are logically consistent.
          </p>
        </div>

        <div className="flex items-center space-x-2.5 font-mono text-xs text-neutral-400 bg-detective-900 border border-detective-800 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded self-start sm:self-auto">
          <FolderLock className="h-4 w-4 text-evidence shrink-0" />
          <span>
            {filteredCases.length} of {allCases.length} Cases Displayed
          </span>
        </div>
      </div>

      {/* Public Archive Preview Alert when not authenticated */}
      {!user && (
        <div className="mb-6 rounded border border-amber-800/60 bg-amber-950/30 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center space-x-2.5">
            <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-mono uppercase font-bold text-amber-300 block sm:inline mr-2">
                Public Archive Preview:
              </span>
              <span className="text-neutral-300">
                You are browsing case summaries. Sign in or register your clearance to open crime scenes, analyze clues, and solve cases.
              </span>
            </div>
          </div>
          <button
            onClick={() => openAuthModal('Sign in or register to open and investigate active case dossiers.')}
            className="shrink-0 rounded border border-amber-500/50 bg-amber-950/60 hover:bg-amber-900/60 text-amber-200 px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors active:scale-95"
          >
            Sign In / Register
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <CaseFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        totalCount={allCases.length}
      />

      {/* Cases Grid or Empty State */}
      {filteredCases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCases.map((mystery) => (
            <CaseCard
              key={mystery.id}
              mystery={mystery}
              isSolved={solvedCaseIds.has(mystery.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={handleResetFilters}
          title="NO CASES FOUND"
          message="No dossiers match the selected category, difficulty, or search criteria."
        />
      )}
    </div>
  );
}

export default function CasesLibraryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-20 text-center font-mono text-xs text-neutral-500">
          Accessing Case Archives...
        </div>
      }
    >
      <CasesLibraryContent />
    </Suspense>
  );
}
