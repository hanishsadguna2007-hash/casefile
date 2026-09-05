'use client';

import React, { useState, useMemo } from 'react';
import { getAllMysteries } from '@/data/mysteries';
import { Mystery, Suspect, EvidenceItem, TimelineEvent, Hint } from '@/types/mystery';
import CaseValidator, { validateMystery } from '@/components/admin/CaseValidator';
import { useAuth } from '@/lib/auth/authContext';
import AuthModal from '@/components/AuthModal';
import { 
  FolderPlus, 
  Edit, 
  Trash2, 
  Download, 
  Upload, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Save, 
  Plus, 
  X, 
  ArrowLeft,
  Lock,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export default function AdminStudioPage() {
  const { user, loading, isAdmin } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const initialCases = useMemo(() => getAllMysteries(), []);
  const [mysteries, setMysteries] = useState<Mystery[]>(initialCases);
  const [selectedCase, setSelectedCase] = useState<Mystery | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'basic' | 'suspects' | 'evidence' | 'timeline' | 'solution' | 'json'>('basic');
  const [jsonInput, setJsonInput] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Clearance check loading state
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-detective-950">
        <div className="flex items-center space-x-3 text-neutral-400 font-mono text-xs">
          <div className="h-4 w-4 rounded-full border-2 border-evidence border-t-transparent animate-spin" />
          <span>Verifying Security Clearance...</span>
        </div>
      </div>
    );
  }

  // Access Denied / Clearance Revoked View for Non-Admins
  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded border border-red-800/60 bg-detective-900 shadow-2xl p-6 sm:p-8 space-y-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red-700 bg-red-950/40 text-red-400">
            <Lock className="h-7 w-7" />
          </div>
          
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-red-400 font-semibold px-2 py-0.5 rounded border border-red-900/60 bg-red-950/30">
              RESTRICTED ACCESS // LEVEL 5 REQUIRED
            </span>
            <h1 className="font-serif text-2xl font-bold text-neutral-100">
              Administrative Studio Locked
            </h1>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Access to case authoring, evidence configuration, and archival modifications is restricted to authorized Bureau Directors.
            </p>
          </div>

          <div className="rounded border border-detective-800 bg-detective-950 p-3.5 text-left font-mono text-xs space-y-1.5 text-neutral-400">
            <div className="text-[11px] text-neutral-500 uppercase tracking-wider">Investigator Status:</div>
            <div className="text-neutral-300">
              ID: <span className="text-neutral-100">{user?.email || (user?.isGuest ? 'Guest Investigator' : user?.username || 'Unauthenticated')}</span>
            </div>
            <div className="text-neutral-300">
              Clearance: <span className="text-red-400 font-semibold">Standard Agent (Denied)</span>
            </div>
            <p className="text-[10px] text-neutral-500 pt-1 border-t border-detective-800 mt-2">
              Tip: To authorize an administrator, add the Firebase email to <code className="text-amber-400 font-mono">NEXT_PUBLIC_ADMIN_EMAILS</code> in your configuration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/cases"
              className="w-full sm:w-auto px-4 py-2 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 text-xs font-mono uppercase tracking-wider text-neutral-300 transition-colors"
            >
              Return to Cases
            </Link>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2 rounded border border-evidence bg-evidence/90 hover:bg-evidence text-xs font-mono uppercase tracking-wider text-white transition-colors flex items-center justify-center space-x-1.5"
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Switch Credentials</span>
            </button>
          </div>
        </div>
        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      </div>
    );
  }

  // Quick starter case template for new creation
  const handleCreateNew = () => {
    const nextNum = `CASE-0${mysteries.length + 1}`;
    const newCase: Mystery = {
      id: `case-0${mysteries.length + 1}`,
      caseNumber: nextNum,
      title: 'The Unsolved Enigma',
      category: 'crime',
      categoryDisplay: 'Crime & Detective',
      difficulty: 2,
      difficultyLabel: 'Investigator',
      estimatedTime: '20-25 MIN',
      shortDescription: 'A brief summary of the crime and initial discovery.',
      fullStory: 'Detailed multi-paragraph crime narrative outlining the incident, context, and immediate findings.',
      setting: 'City Center, Private Office',
      suspects: [
        {
          id: 'susp-new-1',
          name: 'Suspect One',
          age: 35,
          occupation: 'Associate',
          relationToCase: 'Colleague',
          alibi: 'Claims to have been at home during the incident.',
          motive: 'Financial dispute.',
          knownFacts: ['Had access to the room keys.'],
          statement: 'I knew nothing about what happened.',
        },
        {
          id: 'susp-new-2',
          name: 'Suspect Two',
          age: 42,
          occupation: 'Manager',
          relationToCase: 'Supervisor',
          alibi: 'In a staff meeting on the ground floor.',
          motive: 'Covering up embezzlement.',
          knownFacts: ['Was seen leaving the side exit.'],
          statement: 'I was reviewing audit logs all evening.',
        },
        {
          id: 'susp-new-3',
          name: 'Suspect Three',
          age: 28,
          occupation: 'Assistant',
          relationToCase: 'Primary witness',
          alibi: 'Cataloging files in the basement archives.',
          motive: 'Retribution for past termination threat.',
          knownFacts: ['Had access to electronic keycards.'],
          statement: 'I never went upstairs after hours.',
        },
      ],
      evidence: [
        {
          id: 'ev-new-1',
          code: 'EV-01',
          title: 'Physical Clue',
          type: 'physical',
          category: 'Forensic Evidence',
          collectedAt: '10:00 PM',
          locationFound: 'On the desk',
          summary: 'A suspicious physical clue.',
          detailedContent: 'Detailed laboratory analysis revealing critical contradictions.',
        },
        {
          id: 'ev-new-2',
          code: 'EV-02',
          title: 'Security Log',
          type: 'digital',
          category: 'Digital Telemetry',
          collectedAt: '10:15 PM',
          locationFound: 'Access door console',
          summary: 'Card swipe records showing door opened at 9:15 PM.',
          detailedContent: 'Access timestamp contradicts Suspect One’s stated alibi.',
        },
        {
          id: 'ev-new-3',
          code: 'EV-03',
          title: 'Recovered Document',
          type: 'document',
          category: 'Legal Document',
          collectedAt: '10:30 PM',
          locationFound: 'Cabinet drawer',
          summary: 'A revised will or contract draft.',
          detailedContent: 'Reveals clear motive to prevent the agreement from being finalized.',
        },
      ],
      timeline: [
        {
          id: 'time-new-1',
          time: '08:00 PM',
          order: 1,
          title: 'Initial Sighting',
          description: 'Victim arrives at the office.',
          location: 'Office Lobby',
        },
        {
          id: 'time-new-2',
          time: '09:15 PM',
          order: 2,
          title: 'Unauthorized Entry',
          description: 'Electronic access card logged at side door.',
          location: 'Side Door',
        },
        {
          id: 'time-new-3',
          time: '10:00 PM',
          order: 3,
          title: 'Discovery',
          description: 'Incident discovered by security.',
          location: 'Main Office',
        },
      ],
      witnesses: [
        {
          id: 'wit-new-1',
          witnessName: 'Arthur Bell',
          role: 'Night Watchman',
          interviewTime: '10:45 PM',
          statement: 'I saw someone walking near the side exit around 9:15 PM.',
          contradictionHint: 'Contradicts Suspect One’s home alibi.',
        },
      ],
      locations: [
        {
          id: 'loc-new-1',
          name: 'Main Office',
          description: 'Scene of the incident with single locked door.',
          accessible: true,
          notes: 'No signs of forced exterior entry.',
        },
      ],
      hints: [
        {
          level: 1,
          title: 'Access Logs',
          text: 'Compare the electronic door swipe at 9:15 PM with the suspects’ alibis.',
          scorePenalty: 200,
        },
        {
          level: 2,
          title: 'Keycard Custody',
          text: 'Who possessed the electronic access card recorded at the side door?',
          scorePenalty: 400,
        },
        {
          level: 3,
          title: 'Deductive Proof',
          text: 'Suspect One claims to be home, but EV-02 proves their card unlocked the door at 9:15 PM.',
          scorePenalty: 600,
        },
      ],
      solution: {
        culpritId: 'susp-new-1',
        methodId: 'method-new-1',
        motiveId: 'motive-new-1',
        criticalEvidenceIds: ['ev-new-1', 'ev-new-2'],
        methodOptions: [
          { id: 'method-new-1', text: 'Entered via side door using personal access card and staged the scene.' },
          { id: 'method-new-2', text: 'Broke in through the window from the fire escape.' },
          { id: 'method-new-3', text: 'Hired an outside accomplice.' },
        ],
        motiveOptions: [
          { id: 'motive-new-1', text: 'To prevent discovery of financial fraud and contract revisions.' },
          { id: 'motive-new-2', text: 'Personal revenge over family inheritance.' },
        ],
        fullExplanation: {
          whatHappened: 'Suspect One entered the office at 9:15 PM and committed the crime.',
          howItWasDone: 'Used personal keycard to enter, then fabricated an alibi.',
          whyItHappened: 'To cover up financial fraud outlined in the recovered contract.',
          decisiveEvidenceWalkthrough: 'EV-02 proves the electronic card swipe at 9:15 PM, breaking the alibi.',
          whyOthersAreInnocent: 'Other suspects were corroborated by witness Arthur Bell.',
        },
      },
      tags: ['New Investigation', 'Locked Room'],
    };

    setSelectedCase(newCase);
    setIsEditing(true);
    setJsonInput(JSON.stringify(newCase, null, 2));
  };

  const handleSelectCase = (c: Mystery) => {
    setSelectedCase(JSON.parse(JSON.stringify(c)));
    setIsEditing(true);
    setJsonInput(JSON.stringify(c, null, 2));
  };

  const handleSaveCurrent = () => {
    if (!selectedCase) return;
    const exists = mysteries.some((m) => m.id === selectedCase.id);
    if (exists) {
      setMysteries((prev) =>
        prev.map((m) => (m.id === selectedCase.id ? selectedCase : m))
      );
    } else {
      setMysteries((prev) => [selectedCase, ...prev]);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setSelectedCase(parsed);
      handleSaveCurrent();
      alert('Case JSON successfully parsed and updated!');
    } catch {
      alert('Invalid JSON syntax. Please verify formatted JSON.');
    }
  };

  const handleExportJson = () => {
    if (!selectedCase) return;
    const blob = new Blob([JSON.stringify(selectedCase, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedCase.caseNumber.toLowerCase()}_export.json`;
    a.click();
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Studio Header */}
      <div className="border-b border-detective-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 font-mono text-xs text-evidence font-bold">
            <span className="stamp-confidential text-[10px]">ADMINISTRATION SYSTEM</span>
            <span>•</span>
            <span>RESTRICTED ACCESS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold mt-1">
            Mystery Creation Studio & Case Manager
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
            Author, edit, validate, and publish structured investigations with automated consistency checking.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleCreateNew}
            className="flex items-center space-x-1.5 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold shadow transition-all"
          >
            <FolderPlus className="h-4 w-4" />
            <span>Create New Case</span>
          </button>
        </div>
      </div>

      {/* Main Studio View: If editing, show editor; else show cases table */}
      {isEditing && selectedCase ? (
        <div className="space-y-6">
          
          {/* Editor Top Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-detective-800 bg-detective-900 p-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsEditing(false)}
                className="p-1.5 rounded border border-detective-700 bg-detective-950 text-neutral-400 hover:text-white"
                title="Back to List"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div>
                <span className="font-mono text-xs font-bold text-evidence">
                  {selectedCase.caseNumber}
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-100">
                  {selectedCase.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={handleExportJson}
                className="flex items-center space-x-1 border border-detective-700 bg-detective-950 hover:bg-detective-850 px-3 py-1.5 rounded text-neutral-300"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export JSON</span>
              </button>

              <button
                onClick={handleSaveCurrent}
                className="flex items-center space-x-1.5 border border-emerald-600 bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-1.5 rounded font-bold"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{saveSuccess ? 'Saved ✓' : 'Save Dossier'}</span>
              </button>
            </div>
          </div>

          {/* Validation Engine Output */}
          <CaseValidator mystery={selectedCase} />

          {/* Tab Navigation */}
          <div className="flex items-center space-x-1 border-b border-detective-800 font-mono text-xs overflow-x-auto pb-1">
            {(
              [
                { id: 'basic', label: '1. Basic Information' },
                { id: 'suspects', label: `2. Suspects (${selectedCase.suspects.length})` },
                { id: 'evidence', label: `3. Evidence (${selectedCase.evidence.length})` },
                { id: 'timeline', label: `4. Timeline (${selectedCase.timeline.length})` },
                { id: 'solution', label: '5. Solution & Debrief' },
                { id: 'json', label: '6. Raw JSON Schema' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 uppercase tracking-wider rounded-t transition-colors whitespace-nowrap ${
                  activeTab === t.id
                    ? 'border-t border-l border-r border-detective-700 bg-detective-900 text-neutral-100 font-bold'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* TAB 1: BASIC INFORMATION */}
          {activeTab === 'basic' && (
            <div className="rounded border border-detective-800 bg-detective-900 p-6 space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-neutral-400 block mb-1">CASE NUMBER</label>
                  <input
                    type="text"
                    value={selectedCase.caseNumber}
                    onChange={(e) =>
                      setSelectedCase({ ...selectedCase, caseNumber: e.target.value })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">CASE TITLE</label>
                  <input
                    type="text"
                    value={selectedCase.title}
                    onChange={(e) =>
                      setSelectedCase({ ...selectedCase, title: e.target.value })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">CATEGORY</label>
                  <select
                    value={selectedCase.category}
                    onChange={(e) =>
                      setSelectedCase({
                        ...selectedCase,
                        category: e.target.value as any,
                        categoryDisplay: e.target.value,
                      })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  >
                    <option value="crime">Crime & Detective</option>
                    <option value="robbery">Robbery & Heist</option>
                    <option value="mythology">Indian Mythology Inspired</option>
                    <option value="historical">Historical & Ancient</option>
                    <option value="supernatural">Supernatural-Style</option>
                    <option value="modern">Modern Mysteries</option>
                    <option value="logic">Logic & Puzzle</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-neutral-400 block mb-1">DIFFICULTY LEVEL (1-5)</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={selectedCase.difficulty}
                    onChange={(e) =>
                      setSelectedCase({
                        ...selectedCase,
                        difficulty: Number(e.target.value) as any,
                      })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">ESTIMATED TIME</label>
                  <input
                    type="text"
                    value={selectedCase.estimatedTime}
                    onChange={(e) =>
                      setSelectedCase({ ...selectedCase, estimatedTime: e.target.value })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">JURISDICTION / SETTING</label>
                  <input
                    type="text"
                    value={selectedCase.setting}
                    onChange={(e) =>
                      setSelectedCase({ ...selectedCase, setting: e.target.value })
                    }
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">SHORT BRIEFING DESCRIPTION</label>
                <textarea
                  rows={2}
                  value={selectedCase.shortDescription}
                  onChange={(e) =>
                    setSelectedCase({ ...selectedCase, shortDescription: e.target.value })
                  }
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">FULL INCIDENT STORY</label>
                <textarea
                  rows={6}
                  value={selectedCase.fullStory}
                  onChange={(e) =>
                    setSelectedCase({ ...selectedCase, fullStory: e.target.value })
                  }
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200 font-sans"
                />
              </div>
            </div>
          )}

          {/* TAB 2: SUSPECTS */}
          {activeTab === 'suspects' && (
            <div className="space-y-4">
              {selectedCase.suspects.map((s, idx) => (
                <div
                  key={s.id}
                  className="rounded border border-detective-800 bg-detective-900 p-5 space-y-3 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-detective-800 pb-2">
                    <span className="font-bold text-evidence">SUSPECT #{idx + 1}</span>
                    <button
                      onClick={() =>
                        setSelectedCase({
                          ...selectedCase,
                          suspects: selectedCase.suspects.filter((item) => item.id !== s.id),
                        })
                      }
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-neutral-400 block mb-1">NAME</label>
                      <input
                        type="text"
                        value={s.name}
                        onChange={(e) => {
                          const updated = [...selectedCase.suspects];
                          updated[idx].name = e.target.value;
                          setSelectedCase({ ...selectedCase, suspects: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">AGE</label>
                      <input
                        type="number"
                        value={s.age}
                        onChange={(e) => {
                          const updated = [...selectedCase.suspects];
                          updated[idx].age = Number(e.target.value);
                          setSelectedCase({ ...selectedCase, suspects: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">OCCUPATION</label>
                      <input
                        type="text"
                        value={s.occupation}
                        onChange={(e) => {
                          const updated = [...selectedCase.suspects];
                          updated[idx].occupation = e.target.value;
                          setSelectedCase({ ...selectedCase, suspects: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">CLAIMED ALIBI</label>
                    <textarea
                      rows={2}
                      value={s.alibi}
                      onChange={(e) => {
                        const updated = [...selectedCase.suspects];
                        updated[idx].alibi = e.target.value;
                        setSelectedCase({ ...selectedCase, suspects: updated });
                      }}
                      className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">CRIMINAL MOTIVE</label>
                    <textarea
                      rows={2}
                      value={s.motive}
                      onChange={(e) => {
                        const updated = [...selectedCase.suspects];
                        updated[idx].motive = e.target.value;
                        setSelectedCase({ ...selectedCase, suspects: updated });
                      }}
                      className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200 font-sans"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: EVIDENCE */}
          {activeTab === 'evidence' && (
            <div className="space-y-4">
              {selectedCase.evidence.map((ev, idx) => (
                <div
                  key={ev.id}
                  className="rounded border border-detective-800 bg-detective-900 p-5 space-y-3 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-detective-800 pb-2">
                    <span className="font-bold text-evidence">{ev.code}</span>
                    <button
                      onClick={() =>
                        setSelectedCase({
                          ...selectedCase,
                          evidence: selectedCase.evidence.filter((item) => item.id !== ev.id),
                        })
                      }
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-neutral-400 block mb-1">TITLE</label>
                      <input
                        type="text"
                        value={ev.title}
                        onChange={(e) => {
                          const updated = [...selectedCase.evidence];
                          updated[idx].title = e.target.value;
                          setSelectedCase({ ...selectedCase, evidence: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">TYPE</label>
                      <select
                        value={ev.type}
                        onChange={(e) => {
                          const updated = [...selectedCase.evidence];
                          updated[idx].type = e.target.value as any;
                          setSelectedCase({ ...selectedCase, evidence: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      >
                        <option value="physical">Physical</option>
                        <option value="document">Document</option>
                        <option value="digital">Digital</option>
                        <option value="visual">Visual</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">LOCATION FOUND</label>
                      <input
                        type="text"
                        value={ev.locationFound}
                        onChange={(e) => {
                          const updated = [...selectedCase.evidence];
                          updated[idx].locationFound = e.target.value;
                          setSelectedCase({ ...selectedCase, evidence: updated });
                        }}
                        className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">FORENSIC CONTENT</label>
                    <textarea
                      rows={3}
                      value={ev.detailedContent}
                      onChange={(e) => {
                        const updated = [...selectedCase.evidence];
                        updated[idx].detailedContent = e.target.value;
                        setSelectedCase({ ...selectedCase, evidence: updated });
                      }}
                      className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200 font-sans"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              {selectedCase.timeline.map((tm, idx) => (
                <div
                  key={tm.id}
                  className="rounded border border-detective-800 bg-detective-900 p-4 space-y-2 font-mono text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-bold">{tm.time}</span>
                    <button
                      onClick={() =>
                        setSelectedCase({
                          ...selectedCase,
                          timeline: selectedCase.timeline.filter((item) => item.id !== tm.id),
                        })
                      }
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    value={tm.title}
                    onChange={(e) => {
                      const updated = [...selectedCase.timeline];
                      updated[idx].title = e.target.value;
                      setSelectedCase({ ...selectedCase, timeline: updated });
                    }}
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200 font-bold"
                  />
                  <textarea
                    rows={2}
                    value={tm.description}
                    onChange={(e) => {
                      const updated = [...selectedCase.timeline];
                      updated[idx].description = e.target.value;
                      setSelectedCase({ ...selectedCase, timeline: updated });
                    }}
                    className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-1.5 text-neutral-200 font-sans"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: SOLUTION & DEBRIEF */}
          {activeTab === 'solution' && (
            <div className="rounded border border-detective-800 bg-detective-900 p-6 space-y-4 font-mono text-xs">
              <div>
                <label className="text-neutral-400 block mb-1 font-bold">ASSIGNED CULPRIT</label>
                <select
                  value={selectedCase.solution.culpritId}
                  onChange={(e) =>
                    setSelectedCase({
                      ...selectedCase,
                      solution: { ...selectedCase.solution, culpritId: e.target.value },
                    })
                  }
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200"
                >
                  <option value="">Select Culprit...</option>
                  {selectedCase.suspects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.occupation})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1 font-bold">FULL WHAT HAPPENED NARRATIVE</label>
                <textarea
                  rows={3}
                  value={selectedCase.solution.fullExplanation.whatHappened}
                  onChange={(e) =>
                    setSelectedCase({
                      ...selectedCase,
                      solution: {
                        ...selectedCase.solution,
                        fullExplanation: {
                          ...selectedCase.solution.fullExplanation,
                          whatHappened: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200 font-sans"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1 font-bold">HOW IT WAS DONE</label>
                <textarea
                  rows={3}
                  value={selectedCase.solution.fullExplanation.howItWasDone}
                  onChange={(e) =>
                    setSelectedCase({
                      ...selectedCase,
                      solution: {
                        ...selectedCase.solution,
                        fullExplanation: {
                          ...selectedCase.solution.fullExplanation,
                          howItWasDone: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded border border-detective-700 bg-detective-950 px-3 py-2 text-neutral-200 font-sans"
                />
              </div>
            </div>
          )}

          {/* TAB 6: RAW JSON */}
          {activeTab === 'json' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Direct Casefile JSON Editor</span>
                <button
                  onClick={handleImportJson}
                  className="px-3 py-1 rounded bg-evidence text-white uppercase tracking-wider"
                >
                  Load Modified JSON
                </button>
              </div>
              <textarea
                rows={18}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full rounded border border-detective-800 bg-detective-950 p-4 text-emerald-400 font-mono text-xs focus:border-evidence focus:outline-none"
              />
            </div>
          )}

        </div>
      ) : (
        /* Case List Table */
        <div className="rounded border border-detective-800 bg-detective-900 overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-detective-800 bg-detective-950 flex items-center justify-between font-mono text-xs">
            <span className="text-neutral-300 font-bold uppercase tracking-wider">
              Active Bureau Catalog ({mysteries.length} Dossiers)
            </span>
            <span className="text-neutral-500">FORMATTED FOR PRODUCTION SCALE</span>
          </div>

          <div className="divide-y divide-detective-800 font-mono text-xs">
            {mysteries.map((m) => {
              const issues = validateMystery(m);
              const hasErrors = issues.some((i) => i.type === 'error');

              return (
                <div
                  key={m.id}
                  className="p-4 hover:bg-detective-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-evidence">{m.caseNumber}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="font-serif text-base font-bold text-neutral-100">
                        {m.title}
                      </span>
                      <span className="text-[10px] text-neutral-400 px-2 py-0.5 border border-detective-800 rounded">
                        {m.categoryDisplay}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-[11px] text-neutral-400">
                      <span>{m.suspects.length} Suspects</span>
                      <span>•</span>
                      <span>{m.evidence.length} Evidence</span>
                      <span>•</span>
                      <span>{m.estimatedTime}</span>
                      <span>•</span>
                      <span className="text-amber-400">{m.difficultyLabel}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {hasErrors ? (
                      <span className="text-[10px] text-red-400 border border-red-900/40 bg-red-950/30 px-2 py-0.5 rounded">
                        Errors Detected
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 border border-emerald-900/40 bg-emerald-950/30 px-2 py-0.5 rounded">
                        Verified Valid
                      </span>
                    )}

                    <Link
                      href={`/cases/${m.id}`}
                      className="px-3 py-1 rounded border border-detective-700 bg-detective-950 hover:text-white text-neutral-300"
                    >
                      Preview
                    </Link>

                    <button
                      onClick={() => handleSelectCase(m)}
                      className="px-3 py-1 rounded border border-evidence bg-evidence/80 hover:bg-evidence text-white"
                    >
                      Edit Dossier
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
