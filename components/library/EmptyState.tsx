'use client';

import React from 'react';
import { FolderLock, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  onReset?: () => void;
  title?: string;
  message?: string;
}

export default function EmptyState({
  onReset,
  title = 'NO OPEN CASES',
  message = 'A suspiciously quiet day. Browse the case library and find your next investigation.',
}: EmptyStateProps) {
  return (
    <div className="rounded border border-detective-800 bg-detective-900/40 p-12 text-center max-w-md mx-auto my-12 space-y-4">
      <div className="flex justify-center">
        <div className="h-14 w-14 rounded border border-detective-700 bg-detective-950 flex items-center justify-center text-neutral-500">
          <FolderLock className="h-7 w-7" />
        </div>
      </div>

      <div className="space-y-1">
        <span className="stamp-confidential text-xs">STATUS REPORT</span>
        <h3 className="font-serif text-2xl font-bold text-neutral-200 mt-2">
          {title}
        </h3>
        <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
          {message}
        </p>
      </div>

      {onReset && (
        <div className="pt-2">
          <button
            onClick={onReset}
            className="inline-flex items-center space-x-1.5 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
