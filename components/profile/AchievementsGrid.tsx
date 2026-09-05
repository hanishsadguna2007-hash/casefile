'use client';

import React from 'react';
import { Achievement } from '@/types/user';
import { DEFAULT_ACHIEVEMENTS } from '@/lib/storage/caseRepository';
import { 
  Award, 
  Eye, 
  Brain, 
  CheckCircle2, 
  Zap, 
  KeyRound, 
  Landmark, 
  Lock 
} from 'lucide-react';

interface AchievementsGridProps {
  unlockedAchievements: Achievement[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Eye,
  Brain,
  CheckCircle2,
  Zap,
  KeyRound,
  Landmark,
  Award,
};

export default function AchievementsGrid({ unlockedAchievements }: AchievementsGridProps) {
  const unlockedIds = new Set(unlockedAchievements.map((a) => a.id));

  return (
    <div className="rounded border border-detective-800 bg-detective-900/60 p-6 sm:p-8 space-y-6">
      
      <div className="flex items-center justify-between border-b border-detective-800 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
            COMMENDATIONS & HONORS
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
            Detective Badges
          </h3>
        </div>

        <span className="font-mono text-xs text-neutral-400">
          {unlockedAchievements.length} of {DEFAULT_ACHIEVEMENTS.length} Badges Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEFAULT_ACHIEVEMENTS.map((ach) => {
          const isUnlocked = unlockedIds.has(ach.id);
          const unlockedItem = unlockedAchievements.find((a) => a.id === ach.id);
          const Icon = ICON_MAP[ach.icon] || Award;

          return (
            <div
              key={ach.id}
              className={`rounded border p-4 transition-all flex items-start space-x-3.5 ${
                isUnlocked
                  ? 'border-amber-700/60 bg-amber-950/20'
                  : 'border-detective-800 bg-detective-950/50 opacity-50'
              }`}
            >
              <div
                className={`h-10 w-10 rounded border flex items-center justify-center shrink-0 ${
                  isUnlocked
                    ? 'border-amber-600 bg-amber-900/40 text-amber-400'
                    : 'border-neutral-800 bg-neutral-900 text-neutral-600'
                }`}
              >
                {isUnlocked ? <Icon className="h-5 w-5" /> : <Lock className="h-4 w-4" />}
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-neutral-100 flex items-center space-x-2">
                  <span>{ach.title}</span>
                  {isUnlocked && (
                    <span className="text-[9px] font-mono uppercase text-amber-400 bg-amber-950 px-1.5 py-0.2 rounded border border-amber-800/40">
                      EARNED
                    </span>
                  )}
                </h4>

                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  {ach.description}
                </p>

                {isUnlocked && unlockedItem?.unlockedAt && (
                  <span className="font-mono text-[10px] text-neutral-500 block pt-1">
                    Unlocked: {new Date(unlockedItem.unlockedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
