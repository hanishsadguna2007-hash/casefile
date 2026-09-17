'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth/authContext';
import { PointTransaction } from '@/types/user';
import { fetchUserPointsHistoryFromCloud } from '@/lib/storage/cloudSync';
import DetectiveProfileCard from '@/components/profile/DetectiveProfileCard';
import AchievementsGrid from '@/components/profile/AchievementsGrid';
import Link from 'next/link';
import { 
  FolderLock, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldAlert, 
  KeyRound, 
  Lock, 
  Database, 
  History, 
  Sparkles,
  Cloud
} from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, openAuthModal, refreshProfile } = useAuth();
  const [pointsHistory, setPointsHistory] = useState<PointTransaction[]>([]);
  const [loadingPoints, setLoadingPoints] = useState(false);

  useEffect(() => {
    refreshProfile();
  }, []);

  useEffect(() => {
    if (user && !user.isGuest && user.id) {
      setLoadingPoints(true);
      fetchUserPointsHistoryFromCloud(user.id)
        .then((txs) => setPointsHistory(txs))
        .catch(() => setPointsHistory([]))
        .finally(() => setLoadingPoints(false));
    }
  }, [user?.id, user?.points, user?.xp]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-detective-950">
        <div className="rounded border border-detective-800 bg-detective-900 p-8 text-center max-w-md space-y-4">
          <div className="h-10 w-10 border-2 border-evidence border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            Accessing Service Records...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 flex items-center justify-center bg-detective-950 relative overflow-hidden">
        <div className="absolute inset-0 investigation-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-md w-full rounded border border-detective-700 bg-detective-900 shadow-2xl overflow-hidden text-center p-6 sm:p-8 space-y-6">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full border border-amber-500/40 bg-amber-950/30 flex items-center justify-center text-amber-400">
              <Lock className="h-8 w-8" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="stamp-confidential text-[10px]">RESTRICTED ARCHIVE</span>
            <h2 className="font-serif text-2xl font-bold text-neutral-100">
              Service Record Locked
            </h2>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Authenticate with your investigator credentials to review your solved case history, rank progression, unlocked achievements, and forensic badges.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => openAuthModal('Sign in or create an account to view your detective service record.')}
              className="w-full flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              <KeyRound className="h-4 w-4" />
              <span>Sign In / Register Clearance</span>
            </button>

            <Link
              href="/cases"
              className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-950 hover:bg-detective-850 text-neutral-300 hover:text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all"
            >
              <ArrowRight className="h-3.5 w-3.5" />
              <span>Browse Case Archives</span>
            </Link>
          </div>
        </div>
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

      {/* Cloud Database Points Ledger */}
      <div className="rounded border border-detective-800 bg-detective-900/60 p-4 sm:p-8 space-y-4">
        <div className="border-b border-detective-800 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5">
            <div className="h-8 w-8 rounded border border-amber-600/40 bg-amber-950/30 flex items-center justify-center text-amber-400">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-100 flex items-center space-x-2">
                <span>Cloud Points Ledger</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 font-normal">
                  Firestore Active
                </span>
              </h3>
              <p className="font-mono text-xs text-neutral-500">
                Audited points balance saved across devices in Google Cloud Firestore
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
              Current Cloud Balance
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-amber-400">
              {user.points ?? user.xp} PTS
            </span>
          </div>
        </div>

        {loadingPoints ? (
          <div className="text-center py-6 font-mono text-xs text-neutral-400 flex items-center justify-center space-x-2">
            <div className="h-3.5 w-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <span>Querying Cloud Points Ledger...</span>
          </div>
        ) : pointsHistory.length > 0 ? (
          <div className="space-y-2">
            {pointsHistory.map((tx) => (
              <div
                key={tx.id}
                className="rounded border border-detective-800 bg-detective-950 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-medium text-neutral-200">{tx.reason}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 pl-3.5">
                    {new Date(tx.timestamp).toLocaleString()} • ID: <code className="text-neutral-400">{tx.id}</code>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pl-3.5 sm:pl-0">
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 uppercase block">Points</span>
                    <span className="text-amber-400 font-bold">
                      {tx.points >= 0 ? `+${tx.points}` : tx.points} PTS
                    </span>
                  </div>
                  <div className="text-right border-l border-detective-800 pl-4">
                    <span className="text-[10px] text-neutral-500 uppercase block">Total Balance</span>
                    <span className="text-neutral-300 font-bold">{tx.totalPoints} PTS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : attemptedCases.length > 0 ? (
          <div className="space-y-2">
            {attemptedCases.map((rec, i) => (
              <div
                key={i}
                className="rounded border border-detective-800 bg-detective-950 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="font-medium text-neutral-200">
                      Solved Case: {rec.caseTitle} ({rec.caseNumber})
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500 pl-3.5">
                    {new Date(rec.solvedAt).toLocaleString()} • Accuracy: {rec.accuracyPercentage}%
                  </div>
                </div>

                <div className="flex items-center space-x-4 pl-3.5 sm:pl-0">
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 uppercase block">Points Awarded</span>
                    <span className="text-amber-400 font-bold">+{rec.score} PTS</span>
                  </div>
                  <div className="text-right border-l border-detective-800 pl-4">
                    <span className="text-[10px] text-neutral-500 uppercase block">Cloud Status</span>
                    <span className="text-emerald-400 font-medium">Recorded</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded border border-dashed border-detective-800 bg-detective-950/40 p-6 text-center space-y-2 font-mono text-xs text-neutral-400">
            <Sparkles className="h-5 w-5 text-amber-400 mx-auto" />
            <p className="text-neutral-300 font-medium">
              Investigator Dossier Registered in Cloud Database
            </p>
            <p className="text-neutral-500 text-[11px] max-w-md mx-auto">
              Your points balance of <strong className="text-amber-400">{user.points ?? user.xp} PTS</strong> is saved in Cloud Firestore (<code className="text-neutral-400">users/{user.id}</code>). Solve cases in the Case Library to earn additional deduction points.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
