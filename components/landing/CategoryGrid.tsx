'use client';

import React from 'react';
import Link from 'next/link';
import { mysteryCategories } from '@/data/mysteries';
import { getCategoryBadgeColor } from '@/lib/utils';
import { 
  Skull, 
  KeyRound, 
  Landmark, 
  Scroll, 
  Ghost, 
  Cpu, 
  Puzzle, 
  ArrowRight 
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Skull,
  KeyRound,
  Landmark,
  Scroll,
  Ghost,
  Cpu,
  Puzzle,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-detective-800/80">
      <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          SPECIALIZED JURISDICTIONS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold">
          Investigation Categories
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400">
          Thirty handcrafted cases categorized by deductive style and criminal methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mysteryCategories.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] || Skull;
          const colors = getCategoryBadgeColor(cat.id);

          return (
            <Link
              key={cat.id}
              href={`/cases?cat=${cat.id}`}
              className="group rounded border border-detective-800 bg-detective-900/70 p-5 hover:border-detective-600 hover:bg-detective-850 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`h-10 w-10 rounded border flex items-center justify-center ${colors.bg} ${colors.border} ${colors.text} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-detective-700 bg-detective-950 text-neutral-400">
                    {cat.count} CASES
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                  {cat.title}
                </h3>

                <p className="font-sans text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-detective-800/60 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-200">
                <span>OPEN ARCHIVES</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
