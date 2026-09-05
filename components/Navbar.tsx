'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth/authContext';
import { getRankBadgeColor } from '@/lib/utils';
import { 
  FolderLock, 
  User as UserIcon, 
  ShieldAlert, 
  LogOut, 
  Award, 
  PlusCircle, 
  Menu, 
  X,
  Compass,
  ChevronRight,
  ShieldCheck,
  Flame,
  KeyRound
} from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, isAdmin } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-detective-800 bg-detective-950/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-detective-700 bg-detective-900 group-hover:border-evidence transition-colors shadow-sm">
                <FolderLock className="h-5 w-5 text-evidence group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl tracking-wider text-neutral-100 font-bold leading-tight">
                  CASEFILE
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-neutral-400 uppercase">
                  Confidential Archives
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/cases"
                className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-1.5 ${
                  isActive('/cases')
                    ? 'bg-detective-850 text-evidence border border-detective-700'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-detective-900'
                }`}
              >
                <Compass className="h-3.5 w-3.5" />
                <span>Case Library</span>
              </Link>
              <Link
                href="/profile"
                className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-1.5 ${
                  isActive('/profile')
                    ? 'bg-detective-850 text-evidence border border-detective-700'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-detective-900'
                }`}
              >
                <Award className="h-3.5 w-3.5" />
                <span>Detective Dossier</span>
              </Link>
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-1.5 ${
                    isActive('/admin')
                      ? 'bg-detective-850 text-evidence border border-detective-700'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-detective-900'
                  }`}
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span>Admin Studio</span>
                </Link>
              )}
            </nav>
          </div>

          {/* Desktop Right User Status */}
          <div className="hidden sm:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Rank & XP pill */}
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 rounded border border-detective-800 bg-detective-900 px-3 py-1 hover:border-detective-700 transition-colors"
                >
                  <span
                    className={`rounded border px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ${getRankBadgeColor(
                      user.rank
                    )}`}
                  >
                    {user.rank}
                  </span>
                  <span className="font-mono text-xs text-neutral-300 font-medium">
                    {user.username}
                  </span>
                  <span className="font-mono text-[11px] text-amber-500/80">
                    {user.xp} XP
                  </span>
                </Link>

                {user.isGuest ? (
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded bg-amber-950/20 hover:bg-amber-950/40 transition-colors"
                  >
                    Save Progress
                  </button>
                ) : (
                  <button
                    onClick={logout}
                    title="Sign Out"
                    className="p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-detective-850 rounded transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center space-x-1.5 rounded border border-detective-700 bg-detective-850 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:border-evidence hover:text-evidence transition-colors"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Access Terminal</span>
              </button>
            )}
          </div>

          {/* Mobile Right Controls: Compact Rank Badge + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            {user && (
              <Link
                href="/profile"
                className="flex items-center space-x-1.5 rounded-full border border-detective-800 bg-detective-900/90 px-2.5 py-1 text-[11px] font-mono active:scale-95 transition-transform"
              >
                <span className={`h-2 w-2 rounded-full ${user.isGuest ? 'bg-amber-500' : 'bg-emerald-400 animate-pulse'}`} />
                <span className="text-neutral-300 font-medium truncate max-w-[85px]">
                  {user.username}
                </span>
                <span className="text-amber-400 font-bold">
                  {user.xp} XP
                </span>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded border border-detective-800 bg-detective-900 text-neutral-300 hover:text-white active:bg-detective-850 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-Over Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-detective-950 border-l border-detective-800 flex flex-col justify-between shadow-2xl z-10 animate-slide-in-right overflow-y-auto">
            
            {/* Top Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-4 border-b border-detective-800 bg-detective-900/80">
                <div className="flex items-center space-x-2">
                  <FolderLock className="h-4 w-4 text-evidence" />
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                    Bureau Dossier
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded hover:bg-detective-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* User Dossier Summary Card */}
              {user ? (
                <div className="p-4 m-3 rounded border border-detective-800 bg-detective-900/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${getRankBadgeColor(
                        user.rank
                      )}`}
                    >
                      {user.rank}
                    </span>
                    <div className="flex items-center space-x-1 font-mono text-[10px] text-amber-400">
                      <Flame className="h-3 w-3" />
                      <span>{user.streak}D Streak</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-neutral-100">
                      {user.username}
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 truncate">
                      {user.email || (user.isGuest ? 'Guest Investigator Session' : 'Badge ID Active')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-detective-800 font-mono text-xs">
                    <span className="text-neutral-400">Deduction XP:</span>
                    <span className="text-amber-400 font-bold">{user.xp} XP</span>
                  </div>

                  {user.isGuest ? (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setAuthModalOpen(true);
                      }}
                      className="w-full mt-2 flex items-center justify-center space-x-2 rounded border border-amber-500/40 bg-amber-950/30 hover:bg-amber-950/50 py-2 text-xs font-mono uppercase tracking-wider text-amber-300 transition-colors"
                    >
                      <ShieldAlert className="h-3.5 w-3.5" />
                      <span>Save Progress to Cloud</span>
                    </button>
                  ) : null}
                </div>
              ) : (
                <div className="p-4 m-3 rounded border border-detective-800 bg-detective-900/60 text-center space-y-3">
                  <p className="text-xs font-sans text-neutral-400">
                    Sign in to track solved cases, earn detective XP, and sync case notes.
                  </p>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAuthModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence py-2.5 text-xs font-mono uppercase tracking-wider text-white"
                  >
                    <ShieldAlert className="h-4 w-4" />
                    <span>Access Terminal</span>
                  </button>
                </div>
              )}

              {/* Navigation Links */}
              <nav className="p-3 space-y-1">
                <Link
                  href="/cases"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded text-sm font-medium transition-colors ${
                    isActive('/cases')
                      ? 'bg-detective-850 text-evidence border border-detective-700 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-detective-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Compass className="h-4 w-4 text-neutral-400" />
                    <span>Case Library</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-neutral-600" />
                </Link>

                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded text-sm font-medium transition-colors ${
                    isActive('/profile')
                      ? 'bg-detective-850 text-evidence border border-detective-700 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-detective-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-neutral-400" />
                    <span>Detective Dossier</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-neutral-600" />
                </Link>

                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded text-sm font-medium transition-colors ${
                      isActive('/admin')
                        ? 'bg-detective-850 text-evidence border border-detective-700 font-semibold'
                        : 'text-neutral-300 hover:text-white hover:bg-detective-900'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <PlusCircle className="h-4 w-4 text-evidence" />
                      <span>Admin Studio</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-red-700/60 bg-red-950/40 text-red-400">
                      Level 5
                    </span>
                  </Link>
                )}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-detective-800 bg-detective-900/40 space-y-3">
              {user && !user.isGuest ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-900 hover:bg-detective-850 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-300 transition-colors"
                >
                  <LogOut className="h-4 w-4 text-neutral-400" />
                  <span>Sign Out Dossier</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-900 hover:bg-detective-850 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-300 transition-colors"
                >
                  <KeyRound className="h-4 w-4 text-evidence" />
                  <span>Investigator Sign In</span>
                </button>
              )}

              <div className="text-center font-mono text-[10px] text-neutral-500">
                CASEFILE SECURE CLIENT • v1.0
              </div>
            </div>

          </div>
        </div>
      )}

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
