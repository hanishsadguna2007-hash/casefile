import React from 'react';
import { FolderCheck, Eye, Trophy, Users } from 'lucide-react';

export default function StatsTicker() {
  const stats = [
    { label: 'Active Case Files', val: '30 Dossiers', icon: FolderCheck },
    { label: 'Evidence Files Cataloged', val: '180+ Clues', icon: Eye },
    { label: 'Registered Detectives', val: '24,800+', icon: Users },
    { label: 'Solved Convictions', val: '89.4%', icon: Trophy },
  ];

  return (
    <section className="border-y border-detective-800 bg-detective-900/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="space-y-1">
              <div className="flex justify-center text-evidence mb-1">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-neutral-100">
                {s.val}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
