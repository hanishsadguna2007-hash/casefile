'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllMysteries } from '@/data/mysteries';
import { MysteryCategory, DifficultyLevel } from '@/types/mystery';
import { caseRepo } from '@/lib/storage/caseRepository';
import CaseCard from '@/components/library/CaseCard';
import CaseFilterBar from '@/components/library/CaseFilterBar';
import EmptyState from '@/components/library/EmptyState';
import { FolderLock } from 'lucide-react';

function CasesLibraryContent() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get('cat') as MysteryCategory) || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MysteryCategory | 'all'>(initialCat);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unsolved' | 'solved'>('all');
  const [solvedCaseIds, setSolvedCaseIds] = useState<Set<string>>(new Set());

  // Load user progress to check which cases are solved
  useEffect(() => {
    const profile = caseRepo.getUserProfile();
    const solvedSet = new Set<string>();
    Object.entries(profile.progress || {}).forEach(([cid, prog]) => {
      if (prog.status === 'solved') {
        solvedSet.add(cid);
      }
    });
    setSolvedCaseIds(solvedSet);
  }, []);

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
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Dossier Stamp Banner */}
      <div className="mb-8 border-b border-detective-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="stamp-confidential text-xs">OFFICIAL REPOSITORY</span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              Department of Solvable Enigmas
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold tracking-tight">
            Case Archive Library
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
            Examine active police dossiers, unsolved museum thefts, dynastic temple enigmas, and modern digital crimes. All investigations are logically consistent.
          </p>
        </div>

        <div className="flex items-center space-x-3 font-mono text-xs text-neutral-400 bg-detective-900 border border-detective-800 px-3.5 py-2 rounded">
          <FolderLock className="h-4 w-4 text-evidence" />
          <span>
            {filteredCases.length} of {allCases.length} Cases Displayed
          </span>
        </div>
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
