import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import StatsTicker from '@/components/landing/StatsTicker';
import FeaturedCase from '@/components/landing/FeaturedCase';
import CategoryGrid from '@/components/landing/CategoryGrid';
import HowItWorks from '@/components/landing/HowItWorks';
import DifficultyGuide from '@/components/landing/DifficultyGuide';
import { getMysteryById, getAllMysteries } from '@/data/mysteries';
import Link from 'next/link';
import { ArrowRight, Clock, Shield } from 'lucide-react';
import { getCategoryBadgeColor } from '@/lib/utils';

export default function HomePage() {
  const featured = getMysteryById('case-001') || getAllMysteries()[0];
  const recentCases = getAllMysteries().slice(1, 7);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsTicker />
      
      {/* Featured Mystery Spotlight */}
      <FeaturedCase mystery={featured} />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Recent Cases Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-detective-800">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-detective-800">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
              UNRESOLVED REPORTS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-100 font-bold mt-1">
              Recent Case Openings
            </h2>
          </div>
          <Link
            href="/cases"
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center space-x-1"
          >
            <span>Open Case Library</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCases.map((c) => {
            const catColors = getCategoryBadgeColor(c.category);
            return (
              <div
                key={c.id}
                className="rounded border border-detective-800 bg-detective-900/60 p-5 flex flex-col justify-between hover:border-detective-600 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-evidence">
                      {c.caseNumber}
                    </span>
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${catColors.bg} ${catColors.text} ${catColors.border}`}
                    >
                      {c.categoryDisplay}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-neutral-100 group-hover:text-amber-200 transition-colors">
                    {c.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {c.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-detective-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2 font-mono text-[11px] text-neutral-400">
                    <Clock className="h-3 w-3 text-neutral-500" />
                    <span>{c.estimatedTime}</span>
                    <span>•</span>
                    <span className="text-amber-400 font-medium">{c.difficultyLabel}</span>
                  </div>
                  <Link
                    href={`/cases/${c.id}`}
                    className="font-mono text-xs text-evidence hover:underline uppercase tracking-wider flex items-center space-x-1"
                  >
                    <span>Investigate</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works & Difficulty Breakdown */}
      <HowItWorks />
      <DifficultyGuide />

      {/* Call to Action Bar */}
      <section className="border-t border-detective-800 bg-detective-900/40 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="stamp-confidential text-xs">READY FOR DISPATCH?</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-100">
            Open Your First Case File
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Begin with a Level 1 Rookie dossier or test your deductive instincts against a Level 5 Master Detective conspiracy.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/cases"
              className="inline-flex items-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all"
            >
              <span>ACCESS COMPLETE ARCHIVES</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
