'use client';

import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { getRankBadgeColor } from '@/lib/utils';
import { useAuth } from '@/lib/auth/authContext';
import { subscribeSyncState, SyncState } from '@/lib/storage/cloudSync';
import { 
  Award, 
  CheckCircle2, 
  Eye, 
  HelpCircle, 
  Flame, 
  Compass, 
  Edit2, 
  Check,
  Cloud,
  RefreshCw,
  Smartphone
} from 'lucide-react';

interface DetectiveProfileCardProps {
  profile: UserProfile;
}

export default function DetectiveProfileCard({ profile }: DetectiveProfileCardProps) {
  const { updateUsername } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(profile.username);
  const [syncState, setSyncState] = useState<SyncState>('synced');

  useEffect(() => {
    const unsub = subscribeSyncState((state) => {
      setSyncState(state);
    });
    return () => unsub();
  }, []);

  const handleSaveName = () => {
    if (editedName.trim()) {
      updateUsername(editedName.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="rounded border border-detective-700 bg-detective-900 p-4 sm:p-8 space-y-5 sm:space-y-6 shadow-xl relative dossier-paper">
      
      {/* Top Dossier Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-detective-800 pb-3.5 sm:pb-4">
        <div className="flex items-center space-x-2 font-mono text-[11px] sm:text-xs text-neutral-400">
          <span className="stamp-confidential text-[9px] sm:text-[10px]">SERVICE DOSSIER</span>
          <span>•</span>
          <span className="truncate max-w-[140px] sm:max-w-none">SPECIAL INVESTIGATION BRANCH</span>
        </div>

        <span
          className={`rounded border px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider ${getRankBadgeColor(
            profile.rank
          )}`}
        >
          {profile.rank}
        </span>
      </div>

      {/* Identity & Rank Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            DETECTIVE IDENTITY
          </span>
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="rounded border border-detective-600 bg-detective-950 px-3 py-1 font-serif text-lg sm:text-xl font-bold text-neutral-100 focus:border-evidence focus:outline-none"
                />
                <button
                  onClick={handleSaveName}
                  className="p-1.5 rounded bg-evidence text-white"
                  aria-label="Save call-sign"
                >
                  <Check className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100">
                  {profile.username}
                </h2>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-neutral-500 hover:text-neutral-300 p-1"
                  title="Edit Call-Sign"
                  aria-label="Edit Call-Sign"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-xs">
            <span className="text-neutral-300">
              Total Points: <strong className="text-amber-400 font-bold text-sm">{profile.points ?? profile.xp} PTS</strong>
            </span>
            <span>•</span>
            <span className="text-neutral-400">
              Deduction XP: <strong className="text-neutral-200">{profile.xp} XP</strong>
            </span>
            <span>•</span>
            {profile.isGuest ? (
              <span className="text-neutral-500 flex items-center space-x-1 text-[11px]">
                <span>(Guest Session • Sign in to save points to cloud database)</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-800/60 text-[11px] text-emerald-300 font-mono shadow-xs">
                {syncState === 'syncing' ? (
                  <>
                    <RefreshCw className="h-3 w-3 animate-spin text-amber-400" />
                    <span>Syncing Points to Cloud Database...</span>
                  </>
                ) : (
                  <>
                    <Cloud className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Cloud Points Synced • Firestore Live</span>
                  </>
                )}
              </span>
            )}
          </div>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950 px-3.5 py-1.5 sm:px-4 sm:py-2 font-mono text-xs text-neutral-400 self-start sm:self-auto">
          <span>Active Streak: </span>
          <strong className="text-amber-400 font-bold">{profile.streak} Days</strong>
        </div>
      </div>

      {/* Core Detective Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
        <div className="rounded border border-detective-800 bg-detective-950/80 p-2.5 sm:p-3.5 text-center">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-500 block mb-0.5 sm:mb-1">
            Cases Solved
          </span>
          <span className="font-mono text-lg sm:text-xl font-bold text-emerald-400">
            {profile.casesSolved}
          </span>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950/80 p-3.5 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
            Success Rate
          </span>
          <span className="font-mono text-xl font-bold text-neutral-100">
            {profile.successRate}%
          </span>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950/80 p-3.5 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
            Evidence Pinned
          </span>
          <span className="font-mono text-xl font-bold text-neutral-200">
            {profile.evidenceAnalyzed}
          </span>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950/80 p-3.5 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
            Hints Consulted
          </span>
          <span className="font-mono text-xl font-bold text-neutral-400">
            {profile.hintsUsed}
          </span>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950/80 p-3.5 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
            Solving Streak
          </span>
          <span className="font-mono text-xl font-bold text-amber-400">
            {profile.streak}
          </span>
        </div>

        <div className="rounded border border-detective-800 bg-detective-950/80 p-3.5 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
            Specialty
          </span>
          <span className="font-mono text-xs font-bold text-neutral-300 truncate block mt-1">
            {profile.favoriteCategory}
          </span>
        </div>
      </div>

    </div>
  );
}
