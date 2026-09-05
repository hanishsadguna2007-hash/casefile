'use client';

import React from 'react';
import { CaseLocation } from '@/types/mystery';
import { MapPin, ShieldCheck, AlertOctagon, Compass } from 'lucide-react';

interface CaseLocationsProps {
  locations: CaseLocation[];
  setting: string;
}

export default function CaseLocations({ locations, setting }: CaseLocationsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-detective-800 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          TOPOGRAPHY & BLUEPRINTS
        </span>
        <h2 className="font-serif text-2xl font-bold text-neutral-100 mt-0.5">
          Crime Scene Blueprint & Locations
        </h2>
        <p className="font-sans text-xs text-neutral-400 mt-1">
          Primary crime theater: <strong className="text-neutral-200">{setting}</strong>
        </p>
      </div>

      {/* Blueprint Schematic Placeholder / Map Board */}
      <div className="rounded border border-detective-700 bg-detective-950 p-6 relative overflow-hidden investigation-grid">
        <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6 border-b border-detective-800 pb-3">
          <div className="flex items-center space-x-2">
            <Compass className="h-4 w-4 text-evidence" />
            <span className="uppercase tracking-widest">ARCHITECTURAL SCHEMATIC SCHEME</span>
          </div>
          <span className="text-[10px] text-neutral-500">SCALE: 1:100 SURVEY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded border border-detective-800 bg-detective-900/80 p-5 space-y-3 hover:border-detective-600 transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-evidence" />
                  <h4 className="font-serif text-lg font-bold text-neutral-100">
                    {loc.name}
                  </h4>
                </div>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                    loc.accessible
                      ? 'border-emerald-700/60 bg-emerald-950/20 text-emerald-400'
                      : 'border-red-700/60 bg-red-950/20 text-red-400'
                  }`}
                >
                  {loc.accessible ? 'SECURED ACCESS' : 'BREACHED / LOCKED'}
                </span>
              </div>

              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                {loc.description}
              </p>

              {loc.notes && (
                <div className="rounded border border-detective-800 bg-detective-950 p-3 font-mono text-[11px] text-amber-300/90">
                  <span className="uppercase tracking-wider text-[10px] text-neutral-500 block mb-1">
                    PERIMETER OBSERVATION:
                  </span>
                  {loc.notes}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
