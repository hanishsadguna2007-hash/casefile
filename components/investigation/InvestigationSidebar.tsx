'use client';

import React from 'react';
import { 
  FileText, 
  Search, 
  Users, 
  MessageSquare, 
  Clock, 
  MapPin, 
  HelpCircle, 
  Gavel, 
  BookOpen 
} from 'lucide-react';

export type ActiveTab =
  | 'overview'
  | 'evidence'
  | 'suspects'
  | 'witnesses'
  | 'timeline'
  | 'locations'
  | 'documents'
  | 'hints'
  | 'accuse';

interface InvestigationSidebarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  evidenceCount: number;
  suspectsCount: number;
  timelineCount: number;
  witnessCount: number;
  documentCount: number;
  hintsUsedCount: number;
}

export default function InvestigationSidebar({
  activeTab,
  onSelectTab,
  evidenceCount,
  suspectsCount,
  timelineCount,
  witnessCount,
  documentCount,
  hintsUsedCount,
}: InvestigationSidebarProps) {
  const navItems: {
    id: ActiveTab;
    shortLabel: string;
    label: string;
    icon: React.ElementType;
    badge?: number | string;
    highlight?: boolean;
  }[] = [
    { id: 'overview', shortLabel: 'Briefing', label: 'Case Briefing', icon: FileText },
    { id: 'evidence', shortLabel: 'Evidence', label: 'Evidence Files', icon: Search, badge: evidenceCount },
    { id: 'suspects', shortLabel: 'Suspects', label: 'Suspect Dossiers', icon: Users, badge: suspectsCount },
    { id: 'witnesses', shortLabel: 'Witnesses', label: 'Witness Statements', icon: MessageSquare, badge: witnessCount },
    { id: 'timeline', shortLabel: 'Timeline', label: 'Timeline Chronology', icon: Clock, badge: timelineCount },
    { id: 'locations', shortLabel: 'Scenes', label: 'Crime Scene Maps', icon: MapPin },
    { id: 'documents', shortLabel: 'Logs', label: 'Documents & Logs', icon: BookOpen, badge: documentCount },
    { id: 'hints', shortLabel: 'Hints', label: 'Consult Hints', icon: HelpCircle, badge: `${hintsUsedCount}/3` },
    { id: 'accuse', shortLabel: 'Accuse', label: 'Formal Accusation', icon: Gavel, highlight: true },
  ];

  return (
    <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-detective-800 bg-detective-950 p-2 sm:p-3 lg:p-4 flex flex-col justify-between shrink-0 sticky top-[65px] lg:static z-20 backdrop-blur-md lg:backdrop-blur-none">
      <div className="space-y-2 lg:space-y-6">
        
        {/* Sidebar Header (hidden on mobile, visible on lg) */}
        <div className="hidden lg:block px-2">
          <span className="stamp-confidential text-[9px] py-0.5 px-1.5 mb-1.5">
            EVIDENCE BOARD
          </span>
          <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            Investigation Index
          </h4>
        </div>

        {/* Mobile: Horizontal scrollable pills with touch-optimized targets. Desktop: Vertical stack */}
        <div className="relative">
          <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-1.5 lg:space-x-0 lg:space-y-1 font-mono text-xs scrollbar-none py-1 lg:py-0 scroll-smooth">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isCurrent = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center justify-between px-3 py-2 sm:py-2.5 rounded transition-all text-left whitespace-nowrap shrink-0 min-h-[40px] sm:min-h-[44px] active:scale-95 ${
                    item.highlight
                      ? isCurrent
                        ? 'border border-evidence bg-evidence text-white font-bold shadow-md shadow-red-950/40'
                        : 'border border-evidence/60 bg-red-950/30 text-red-300 hover:bg-evidence/20'
                      : isCurrent
                      ? 'border border-evidence/80 bg-detective-850 text-neutral-100 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-detective-900 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-4 w-4 shrink-0 ${item.highlight ? 'text-current' : isCurrent ? 'text-evidence' : 'text-neutral-500'}`} />
                    <span className="tracking-wider uppercase text-[11px] sm:text-xs">
                      {/* Show short label on mobile, full label on desktop */}
                      <span className="inline lg:hidden">{item.shortLabel}</span>
                      <span className="hidden lg:inline">{item.label}</span>
                    </span>
                  </div>

                  {item.badge !== undefined && (
                    <span
                      className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isCurrent
                          ? 'bg-detective-950/80 text-white'
                          : 'bg-detective-900 text-neutral-400 border border-detective-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Dispatch Alert (desktop only) */}
      <div className="hidden lg:block mt-8 pt-4 border-t border-detective-900 text-[10px] font-mono text-neutral-500 space-y-1 px-2">
        <p>CONFIDENTIAL INVESTIGATION</p>
        <p>All discoveries are auto-saved to your personal detective notebook.</p>
      </div>
    </aside>
  );
}
