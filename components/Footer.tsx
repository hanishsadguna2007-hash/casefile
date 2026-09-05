import React from 'react';
import Link from 'next/link';
import { FolderLock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-detective-800 bg-detective-950 text-neutral-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Motto */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-detective-700 bg-detective-900">
              <FolderLock className="h-4 w-4 text-evidence" />
            </div>
            <span className="font-serif text-lg font-bold tracking-wider text-neutral-100">
              CASEFILE
            </span>
          </div>
          <p className="font-serif italic text-sm text-neutral-300 max-w-md">
            “Every case has an answer. The evidence is already there. The question is whether you can see it.”
          </p>
          <div className="pt-2 text-xs font-mono text-neutral-500 space-y-1">
            <p>CASEFILE INVESTIGATIVE SYSTEMS • CLASSIFIED INTELLIGENCE</p>
            <p className="text-[11px] text-neutral-400">
              Notice: All mythology-inspired investigations are original fiction inspired by Indian mythology, folklore, history, and ancient kingdoms. All characters and situations are fictional.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold mb-3">
            Case Archives
          </h4>
          <ul className="space-y-2 font-mono text-xs">
            <li>
              <Link href="/cases?cat=crime" className="hover:text-evidence transition-colors">
                Crime & Detective
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=robbery" className="hover:text-evidence transition-colors">
                Robbery & Heist
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=mythology" className="hover:text-evidence transition-colors">
                Indian Mythology Inspired
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=historical" className="hover:text-evidence transition-colors">
                Historical & Ancient
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=supernatural" className="hover:text-evidence transition-colors">
                Supernatural-Style
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=modern" className="hover:text-evidence transition-colors">
                Modern Mysteries
              </Link>
            </li>
            <li>
              <Link href="/cases?cat=logic" className="hover:text-evidence transition-colors">
                Logic & Puzzle
              </Link>
            </li>
          </ul>
        </div>

        {/* Bureau Standards */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold mb-3">
            Investigation Protocol
          </h4>
          <div className="space-y-2 text-xs font-mono text-neutral-500">
            <div className="flex items-center space-x-1.5 text-neutral-400">
              <ShieldCheck className="h-4 w-4 text-evidence" />
              <span>Evidence-Backed Deductions</span>
            </div>
            <p className="text-[11px]">
              Every case is mathematically and logically solvable using supplied evidence and cross-examination.
            </p>
            <div className="pt-3">
              <span className="stamp-confidential text-[10px] py-0.5 px-2">
                OFFICIAL ARCHIVES
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-detective-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-600">
        <p>© {new Date().getFullYear()} CASEFILE • Confidential Detective Platform.</p>
        <p className="mt-2 sm:mt-0">Designed for Serious Investigators.</p>
      </div>
    </footer>
  );
}
