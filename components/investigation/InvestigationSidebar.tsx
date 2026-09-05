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
    label: string;
    icon: React.ElementType;
    badge?: number | string;
    highlight?: boolean;
  }[] = [
    { id: 'overview', label: 'Case Briefing', icon: FileText },
    { id: 'evidence', label: 'Evidence Files', icon: Search, badge: evidenceCount },
    { id: 'suspects', label: 'Suspect Dossiers', icon: Users, badge: suspectsCount },
    { id: 'witnesses', label: 'Witness Statements', icon: MessageSquare, badge: witnessCount },
    { id: 'timeline', label: 'Timeline Chronology', icon: Clock, badge: timelineCount },
    { id: 'locations', label: 'Crime Scene Maps', icon: MapPin },
    { id: 'documents', label: 'Documents & Logs', icon: BookOpen, badge: documentCount },
    { id: 'hints', label: 'Consult Hints', icon: HelpCircle, badge: `${hintsUsedCount}/3` },
    { id: 'accuse', label: 'Formal Accusation', icon: Gavel, highlight: true },
  ];

  return (
    <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-detective-800 bg-detective-950 p-3 lg:p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-3 lg:space-y-6">
        
        {/* Sidebar Header (hidden on mobile, visible on lg) */}
        <div className="hidden lg:block px-2">
          <span className="stamp-confidential text-[9px] py-0.5 px-1.5 mb-1.5">
            EVIDENCE BOARD
          </span>
          <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            Investigation Index
          </h4>
        </div>

        {/* Nav Links: horizontal scroll on mobile, vertical stack on lg */}
        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-1.5 lg:space-x-0 lg:space-y-1 font-mono text-xs scrollbar-none pb-1 lg:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center justify-between px-3 py-2 rounded transition-colors text-left whitespace-nowrap shrink-0 ${
                  item.highlight
                    ? isCurrent
                      ? 'border border-evidence bg-evidence text-white font-bold'
                      : 'border border-evidence/60 bg-red-950/20 text-red-400 hover:bg-evidence/20'
                    : isCurrent
                    ? 'border border-detective-700 bg-detective-850 text-neutral-100 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-detective-900 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className={`h-3.5 w-3.5 lg:h-4 lg:w-4 ${item.highlight ? 'text-current' : 'text-neutral-400'}`} />
                  <span className="tracking-wider uppercase">{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span
                    className={`ml-2 text-[10px] px-1.5 py-0.5 rounded ${
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

      {/* Bottom Dispatch Alert (desktop only) */}
      <div className="hidden lg:block mt-8 pt-4 border-t border-detective-900 text-[10px] font-mono text-neutral-500 space-y-1 px-2">
        <p>CONFIDENTIAL INVESTIGATION</p>
        <p>All discoveries are auto-saved to your personal detective notebook.</p>
      </div>
    </aside>
  );
}
