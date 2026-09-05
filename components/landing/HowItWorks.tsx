import React from 'react';
import { Search, Users, GitCommit, Gavel } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Inspect Tangible Evidence',
      icon: Search,
      desc: 'Sift through forensic autopsy reports, broken objects, financial bank logs, encrypted flash drives, and CCTV transcripts. Clues are not highlighted automatically—you must spot them.',
    },
    {
      num: '02',
      title: 'Cross-Examine Suspects',
      icon: Users,
      desc: 'Each suspect has a stated alibi, motives, and known relationships. Compare witness testimony against physical timestamps to detect blatant lies and manufactured alibis.',
    },
    {
      num: '03',
      title: 'Trace Chronological Timelines',
      icon: GitCommit,
      desc: 'Align movements on the dynamic investigation board. Reconstruct missing minutes, track travel distances, and expose physical impossibilities.',
    },
    {
      num: '04',
      title: 'The Solution Room',
      icon: Gavel,
      desc: 'Formulate your formal accusation. Answer Who, What, How, Why, and Which decisive evidence seals the conviction. Score XP based on pure deduction accuracy.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-detective-800">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-evidence font-semibold">
          METHODOLOGY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold">
          How To Conduct An Investigation
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400">
          No simple multiple-choice questions. A true digital evidence board experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="rounded border border-detective-800 bg-detective-900/50 p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded border border-detective-700 bg-detective-950 flex items-center justify-center text-evidence">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xl font-bold text-detective-600">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-neutral-200">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-neutral-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-detective-800/40">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  CASEFILE STANDARD PROTOCOL
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
