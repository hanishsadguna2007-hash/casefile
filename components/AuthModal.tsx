'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth/authContext';
import { getFirebaseErrorMessage } from '@/lib/firebase';
import { ShieldAlert, X, User, KeyRound, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { loginWithEmail, signup, loginWithGoogle, loginAsGuest, isFirebaseReady } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        if (!username.trim() || !email.trim() || !password.trim()) {
          setError('Please fill in all clearance fields.');
          setLoading(false);
          return;
        }
        await signup(username, email, password);
      } else {
        if (!email.trim() || !password.trim()) {
          setError('Credentials required.');
          setLoading(false);
          return;
        }
        await loginWithEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      onClose();
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
    loginAsGuest();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md max-h-[92vh] flex flex-col rounded-t-2xl sm:rounded-lg border border-detective-700 bg-detective-900 shadow-2xl overflow-hidden animate-slide-up sm:animate-none">
        
        {/* Header File Stamp Tab */}
        <div className="flex items-center justify-between border-b border-detective-800 bg-detective-950 px-5 sm:px-6 py-3.5 sm:py-4 shrink-0">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-5 w-5 text-evidence" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
              Security Clearance Terminal
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="text-neutral-400 hover:text-neutral-200 p-1.5 rounded hover:bg-detective-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <div className="mb-5 sm:mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="stamp-confidential">RESTRICTED DOSSIER</span>
              <div className="flex items-center space-x-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                <ShieldCheck className="h-3 w-3" />
                <span>FIREBASE SECURED</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl text-neutral-100 font-bold tracking-tight">
              {isSignUp ? 'New Investigator Registration' : 'Investigator Sign-In'}
            </h3>
            <p className="font-sans text-xs text-neutral-400 mt-1">
              Firebase authenticated detectives receive cloud synchronization of case notes, solved logs, and rank XP.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded border border-red-800/50 bg-red-950/30 p-2.5 text-xs text-red-300 font-mono">
              [ERROR] {error}
            </div>
          )}

          {/* Google Sign-in Option */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 rounded border border-detective-700 bg-detective-950 hover:bg-detective-850 hover:border-detective-600 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-200 transition-colors shadow-sm mb-4"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-detective-800" />
            </div>
            <div className="relative flex justify-center text-[10px] font-mono uppercase tracking-widest">
              <span className="bg-detective-900 px-2 text-neutral-500">OR WITH EMAIL</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Detective Call-Sign / Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. Detective Vance"
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3.5 py-2 pl-9 text-sm text-neutral-200 placeholder-neutral-600 focus:border-evidence focus:outline-none focus:ring-1 focus:ring-evidence font-sans"
                  />
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                </div>
              </div>
            )}

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                Badge ID / Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investigator@agency.org"
                className="w-full rounded border border-detective-700 bg-detective-950 px-3.5 py-2 text-sm text-neutral-200 placeholder-neutral-600 focus:border-evidence focus:outline-none focus:ring-1 focus:ring-evidence font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                Access Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3.5 py-2 pl-9 text-sm text-neutral-200 placeholder-neutral-600 focus:border-evidence focus:outline-none focus:ring-1 focus:ring-evidence font-mono"
                />
                <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence/90 hover:bg-evidence px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-white transition-colors mt-2"
            >
              <span>{loading ? 'Verifying Credentials...' : isSignUp ? 'Create Firebase Dossier' : 'Authenticate Dossier'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Toggle Login/Sign-up */}
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="font-mono text-xs text-neutral-400 hover:text-neutral-200 underline decoration-detective-600 underline-offset-4"
            >
              {isSignUp
                ? 'Already hold credentials? Sign In'
                : 'Need clearance? Register New Investigator'}
            </button>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-detective-800" />
            </div>
            <div className="relative flex justify-center text-[10px] font-mono uppercase tracking-widest">
              <span className="bg-detective-900 px-2 text-neutral-500">OR QUICK TRIAL</span>
            </div>
          </div>

          {/* Guest Access Button */}
          <button
            onClick={handleGuest}
            className="w-full flex items-center justify-center space-x-2 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 hover:border-detective-600 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 transition-colors"
          >
            <span>Proceed as Guest Investigator</span>
          </button>
          <p className="text-[10px] font-mono text-neutral-500 text-center mt-2">
            Guest progress saves locally to this browser session.
          </p>
        </div>
      </div>
    </div>
  );
}
