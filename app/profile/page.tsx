'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/lib/auth/authContext';
import DetectiveProfileCard from '@/components/profile/DetectiveProfileCard';
import AchievementsGrid from '@/components/profile/AchievementsGrid';
import Link from 'next/link';
import { FolderLock, ArrowRight, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function ProfilePage() {
  const { user, refreshProfile } = useAuth();

  useEffect(() => {
    refreshProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="font-mono text-xs text-neutral-400">Loading investigator profile...</div>
      </div>
    );
  }

  // Extract solved cases records from user progress
  const attemptedCases = Object.entries(user.progress || {})
    .filter(([_, prog]) => prog.attemptResult)
    .map(([_, prog]) => prog.attemptResult!);

  return (
    <div className="min-h-screen py-6 sm:py-10 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      
      {/* Header Banner */}
      <div className="border-b border-detective-800 pb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="stamp-confidential text-[10px] sm:text-xs">OFFICIAL RECORD</span>
          <h1 className="font-serif text-2xl sm:text-4xl text-neutral-100 font-bold mt-1">
            Detective Service Record
          </h1>
        </div>

        <Link
          href="/cases"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center space-x-1"
        >
          <span>Open Case Archives</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Profile Card */}
      <DetectiveProfileCard profile={user} />

      {/* Badges and Achievements */}
      <AchievementsGrid unlockedAchievements={user.achievements || []} />

      {/* Solved Cases / Indictments History */}
      <div className="rounded border border-detective-800 bg-detective-900/60 p-4 sm:p-8 space-y-4">
        <div className="border-b border-detective-800 pb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-100">
            Case Indictment History ({attemptedCases.length})
          </h3>
          <span className="font-mono text-xs text-neutral-500">
            Official Verdict Transcripts
          </span>
        </div>

        {attemptedCases.length > 0 ? (
          <div className="space-y-3">
            {attemptedCases.map((rec, i) => (
              <div
                key={i}
                className="rounded border border-detective-800 bg-detective-950 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-evidence">{rec.caseNumber}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="font-serif text-sm font-bold text-neutral-200">
                      {rec.caseTitle}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Solved: {new Date(rec.solvedAt).toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                      ACCURACY
                    </span>
                    <span
                      className={`font-bold ${
                        rec.accuracyPercentage >= 70 ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {rec.accuracyPercentage}%
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                      SCORE
                    </span>
                    <span className="text-amber-400 font-bold">+{rec.score} XP</span>
                  </div>

                  <Link
                    href={`/cases/${rec.caseId}`}
                    className="p-2 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 text-neutral-200"
                    title="Review Case"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 font-mono text-xs text-neutral-500 space-y-2">
            <p>No formal case indictments filed yet.</p>
            <Link
              href="/cases"
              className="text-evidence hover:underline inline-block uppercase tracking-wider"
            >
              Start an investigation in the Case Library →
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
