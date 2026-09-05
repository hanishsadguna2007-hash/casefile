'use client';

import React, { useState } from 'react';
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
  Compass
} from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, isAdmin } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-detective-800 bg-detective-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-detective-700 bg-detective-900 group-hover:border-evidence transition-colors">
                <FolderLock className="h-5 w-5 text-evidence group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider text-neutral-100 font-bold">
                  CASEFILE
                </span>
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase -mt-1">
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

          {/* Right User Status */}
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

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-neutral-400 hover:text-neutral-200 hover:bg-detective-850"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-detective-800 bg-detective-900 px-4 py-3 space-y-2 font-mono text-xs">
            <Link
              href="/cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-300 hover:text-white"
            >
              [+] Case Library
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-300 hover:text-white"
            >
              [+] Detective Dossier
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-neutral-300 hover:text-white"
              >
                [+] Admin Studio
              </Link>
            )}
            <div className="pt-2 border-t border-detective-800 flex justify-between items-center">
              {user ? (
                <>
                  <span className="text-neutral-400">
                    {user.username} ({user.rank})
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-evidence hover:underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-evidence hover:underline"
                >
                  Access Terminal
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
