'use client';

import React from 'react';
import { TimelineEvent } from '@/types/mystery';
import { Clock, MapPin, Lock, CheckCircle2 } from 'lucide-react';

interface InteractiveTimelineProps {
  timeline: TimelineEvent[];
  unlockedEventIds: string[];
  onUnlockEvent?: (id: string) => void;
}

export default function InteractiveTimeline({
  timeline,
  unlockedEventIds,
  onUnlockEvent,
}: InteractiveTimelineProps) {
  const sorted = [...timeline].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="border-b border-detective-800 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          CHRONOLOGY
        </span>
        <h2 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
          Interactive Crime Timeline
        </h2>
        <p className="font-sans text-xs text-neutral-400 mt-1">
          Trace verified timestamps to catch timeline impossibilities and broken alibis.
        </p>
      </div>

      {/* Timeline Flow */}
      <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-detective-800 my-6">
        {sorted.map((ev, index) => {
          const isLocked = ev.isInitiallyLocked && !unlockedEventIds.includes(ev.id);

          return (
            <div key={ev.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-detective-950 bg-evidence flex items-center justify-center shadow">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              {/* Event Card */}
              <div className="rounded border border-detective-800 bg-detective-900/80 p-5 hover:border-detective-700 transition-colors">
                
                {/* Time & Location Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{ev.time}</span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-neutral-400">
                    <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                    <span>{ev.location}</span>
                  </div>
                </div>

                {/* Event Content */}
                {isLocked ? (
                  <div className="p-4 rounded border border-dashed border-detective-700 bg-detective-950/60 text-center space-y-2">
                    <div className="flex justify-center text-neutral-500">
                      <Lock className="h-5 w-5" />
                    </div>
                    <p className="font-mono text-xs text-neutral-400">
                      [CLASSIFIED TIMELINE GAP: {ev.title}]
                    </p>
                    <p className="font-sans text-[11px] text-neutral-500 italic">
                      {ev.unlockNote || 'Analyze corresponding physical evidence to unlock this chronological event.'}
                    </p>
                    {onUnlockEvent && (
                      <button
                        onClick={() => onUnlockEvent(ev.id)}
                        className="font-mono text-[10px] uppercase text-evidence hover:underline"
                      >
                        [Reconstruct Timeline Event]
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <h4 className="font-serif text-lg font-bold text-neutral-100">
                      {ev.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-300 mt-2 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded border border-detective-800 bg-detective-950 p-4 font-mono text-xs text-neutral-400 flex items-center justify-between">
        <span>INVESTIGATIVE DEDUCTION TIP:</span>
        <span className="text-amber-400/90 text-right">
          Cross-reference timestamps with suspect statements to pinpoint fabricated alibis.
        </span>
      </div>

    </div>
  );
}
