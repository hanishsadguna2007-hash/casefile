'use client';

import React from 'react';
import { MysteryCategory, DifficultyLevel } from '@/types/mystery';
import { mysteryCategories } from '@/data/mysteries';
import { Search, Filter, X } from 'lucide-react';

interface CaseFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: MysteryCategory | 'all';
  onCategoryChange: (cat: MysteryCategory | 'all') => void;
  selectedDifficulty: DifficultyLevel | 'all';
  onDifficultyChange: (diff: DifficultyLevel | 'all') => void;
  selectedStatus: 'all' | 'unsolved' | 'solved';
  onStatusChange: (status: 'all' | 'unsolved' | 'solved') => void;
  totalCount: number;
}

export default function CaseFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
  totalCount,
}: CaseFilterBarProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Search and Quick Status Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cases by title, keyword, location, or CASE-XXX..."
            className="w-full rounded border border-detective-700 bg-detective-900 px-4 py-2.5 pl-10 text-sm text-neutral-100 placeholder-neutral-500 focus:border-evidence focus:outline-none font-sans"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-neutral-500" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-3 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center space-x-1 rounded border border-detective-800 bg-detective-900 p-1 font-mono text-xs">
          {(['all', 'unsolved', 'solved'] as const).map((st) => (
            <button
              key={st}
              onClick={() => onStatusChange(st)}
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-colors ${
                selectedStatus === st
                  ? 'bg-detective-800 text-neutral-100 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {st === 'all' ? 'All Dossiers' : st === 'unsolved' ? 'Unsolved' : 'Closed ✓'}
            </button>
          ))}
        </div>

        {/* Difficulty Dropdown */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedDifficulty}
            onChange={(e) =>
              onDifficultyChange(
                e.target.value === 'all' ? 'all' : (Number(e.target.value) as DifficultyLevel)
              )
            }
            className="rounded border border-detective-700 bg-detective-900 px-3 py-2.5 font-mono text-xs text-neutral-200 focus:border-evidence focus:outline-none"
          >
            <option value="all">All Difficulties (1-5)</option>
            <option value="1">Level 1 — Rookie</option>
            <option value="2">Level 2 — Investigator</option>
            <option value="3">Level 3 — Detective</option>
            <option value="4">Level 4 — Inspector</option>
            <option value="5">Level 5 — Master Detective</option>
          </select>
        </div>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 py-1.5 rounded border uppercase tracking-wider whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'border-evidence bg-evidence text-white font-semibold'
              : 'border-detective-800 bg-detective-900 text-neutral-400 hover:border-detective-700 hover:text-neutral-200'
          }`}
        >
          All Categories ({totalCount})
        </button>

        {mysteryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded border uppercase tracking-wider whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'border-evidence bg-evidence text-white font-semibold'
                : 'border-detective-800 bg-detective-900 text-neutral-400 hover:border-detective-700 hover:text-neutral-200'
            }`}
          >
            {cat.title} ({cat.count})
          </button>
        ))}
      </div>
    </div>
  );
}
