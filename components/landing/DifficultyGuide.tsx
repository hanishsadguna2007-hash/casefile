import React from 'react';
import { Shield } from 'lucide-react';

export default function DifficultyGuide() {
  const levels = [
    {
      level: 1,
      name: 'Rookie',
      color: 'border-neutral-700 text-neutral-400 bg-neutral-900/40',
      tag: 'LEVEL 1',
      desc: 'Simple mysteries. Clear physical clues. 3 suspects. Direct contradictions easily spotted in testimony.',
    },
    {
      level: 2,
      name: 'Investigator',
      color: 'border-yellow-700/60 text-yellow-400 bg-yellow-950/20',
      tag: 'LEVEL 2',
      desc: 'More suspects. Some misleading red herrings. Basic timeline and forensic science contradictions.',
    },
    {
      level: 3,
      name: 'Detective',
      color: 'border-emerald-700/60 text-emerald-400 bg-emerald-950/20',
      tag: 'LEVEL 3',
      desc: 'Complex multi-branch timelines. Multiple evidence types including chemical, digital, and mechanical rigs.',
    },
    {
      level: 4,
      name: 'Inspector',
      color: 'border-blue-700/60 text-blue-400 bg-blue-950/20',
      tag: 'LEVEL 4',
      desc: 'Several false leads. Advanced deduction. Interconnected alibis, remote triggers, and optical illusions.',
    },
    {
      level: 5,
      name: 'Master Detective',
      color: 'border-amber-600 text-amber-400 bg-amber-950/30',
      tag: 'LEVEL 5',
      desc: 'Extremely challenging. Requires correlating 5+ distinct pieces of evidence to dismantle airtight alibis.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-detective-800">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          CLEARANCE GRADES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold">
          Difficulty Progression
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400">
          Cases are graded from Level 1 to Level 5. As your rank advances, cases introduce sophisticated criminal stratagems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {levels.map((lvl) => (
          <div
            key={lvl.level}
            className={`rounded border p-5 flex flex-col justify-between ${lvl.color}`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase mb-3">
                <span>{lvl.tag}</span>
                <Shield className="h-3.5 w-3.5" />
              </div>

              <h3 className="font-serif text-xl font-bold tracking-tight mb-2">
                {lvl.name}
              </h3>

              <p className="font-sans text-xs opacity-80 leading-relaxed">
                {lvl.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-current/20 font-mono text-[10px] uppercase tracking-wider">
              XP Multiplier: {lvl.level}x
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
