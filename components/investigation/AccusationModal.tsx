'use client';

import React, { useState } from 'react';
import { Mystery, Suspect, EvidenceItem } from '@/types/mystery';
import { caseRepo } from '@/lib/storage/caseRepository';
import { CaseAttemptRecord } from '@/types/user';
import confetti from 'canvas-confetti';
import { 
  Gavel, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  ArrowRight, 
  RotateCcw, 
  ChevronRight,
  ShieldAlert,
  X
} from 'lucide-react';

interface AccusationModalProps {
  mystery: Mystery;
  isOpen: boolean;
  onClose: () => void;
  onCaseSolved: (record: CaseAttemptRecord) => void;
}

export default function AccusationModal({
  mystery,
  isOpen,
  onClose,
  onCaseSolved,
}: AccusationModalProps) {
  const [selectedCulpritId, setSelectedCulpritId] = useState<string>('');
  const [selectedMethodId, setSelectedMethodId] = useState<string>('');
  const [selectedMotiveId, setSelectedMotiveId] = useState<string>('');
  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    isSolved: boolean;
    accuracyPercentage: number;
    xpAwarded: number;
    attemptRecord: CaseAttemptRecord;
  } | null>(null);

  if (!isOpen) return null;

  const sol = mystery.solution;

  const toggleEvidenceSelect = (id: string) => {
    setSelectedEvidenceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFinalSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      const evalResult = caseRepo.evaluateAccusation(mystery.id, {
        culpritId: selectedCulpritId,
        methodId: selectedMethodId,
        motiveId: selectedMotiveId,
        criticalEvidenceIds: selectedEvidenceIds,
        durationMinutes: 20,
      });

      setResult(evalResult);
      setSubmitting(false);

      if (evalResult.isSolved) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#b91c1c', '#d97706', '#059669', '#ffffff'],
        });
        onCaseSolved(evalResult.attemptRecord);
      }
    }, 800);
  };

  const handleReset = () => {
    setResult(null);
    setCurrentStep(1);
    setSelectedCulpritId('');
    setSelectedMethodId('');
    setSelectedMotiveId('');
    setSelectedEvidenceIds([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl rounded border border-detective-700 bg-detective-900 shadow-2xl my-8 overflow-hidden dossier-paper">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-detective-800 bg-detective-950 px-6 py-4">
          <div className="flex items-center space-x-2">
            <Gavel className="h-5 w-5 text-evidence" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 font-bold">
              THE SOLUTION ROOM • FORMAL INDICTMENT
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded hover:bg-detective-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Evaluation Verdict View */}
        {result ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Verdict Stamp */}
            <div className="text-center space-y-3 pb-6 border-b border-detective-800">
              <div className="flex justify-center">
                {result.isSolved ? (
                  <span className="stamp-solved text-sm sm:text-base px-4 py-1.5 animate-stamp-drop">
                    CASE CLOSED ✓
                  </span>
                ) : (
                  <span className="stamp-confidential text-sm sm:text-base px-4 py-1.5">
                    INSUFFICIENT EVIDENCE / MISTRIAL
                  </span>
                )}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-100">
                {result.isSolved ? 'Culprit Successfully Apprehended' : 'The Investigation Remains Inconclusive'}
              </h2>

              <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
                {result.isSolved
                  ? `Your deductive findings align with the verified facts of ${mystery.caseNumber}. The formal indictment has been accepted.`
                  : 'Your deduction did not identify the true culprit or lacked supporting forensic evidence. Review the evidence board or inspect the complete case debrief below.'}
              </p>
            </div>

            {/* Score & Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
              <div className="rounded border border-detective-800 bg-detective-950 p-3.5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                  CASE ACCURACY
                </span>
                <span
                  className={`text-2xl font-bold ${
                    result.accuracyPercentage >= 70 ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {result.accuracyPercentage}%
                </span>
              </div>

              <div className="rounded border border-detective-800 bg-detective-950 p-3.5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                  DEDUCTION SCORE
                </span>
                <span className="text-2xl font-bold text-amber-400">
                  +{result.xpAwarded} XP
                </span>
              </div>

              <div className="rounded border border-detective-800 bg-detective-950 p-3.5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                  EVIDENCE PROVED
                </span>
                <span className="text-2xl font-bold text-neutral-200">
                  {result.attemptRecord.evidenceMatchedCount} / {result.attemptRecord.totalEvidenceRequired}
                </span>
              </div>

              <div className="rounded border border-detective-800 bg-detective-950 p-3.5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                  HINTS USED
                </span>
                <span className="text-2xl font-bold text-neutral-400">
                  {result.attemptRecord.hintsUsedCount}
                </span>
              </div>
            </div>

            {/* Full Debrief Narrative Walkthrough */}
            <div className="rounded border border-detective-800 bg-detective-950 p-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-evidence font-bold block">
                COMPLETE CASE DEBRIEF & EXPLANATION
              </span>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed">
                <div>
                  <strong className="font-mono text-amber-400 block text-xs uppercase tracking-wider mb-0.5">
                    1. What Actually Happened:
                  </strong>
                  <p className="text-neutral-300">{sol.fullExplanation.whatHappened}</p>
                </div>

                <div>
                  <strong className="font-mono text-amber-400 block text-xs uppercase tracking-wider mb-0.5">
                    2. How The Crime Was Committed:
                  </strong>
                  <p className="text-neutral-300">{sol.fullExplanation.howItWasDone}</p>
                </div>

                <div>
                  <strong className="font-mono text-amber-400 block text-xs uppercase tracking-wider mb-0.5">
                    3. Criminal Motive:
                  </strong>
                  <p className="text-neutral-300">{sol.fullExplanation.whyItHappened}</p>
                </div>

                <div>
                  <strong className="font-mono text-amber-400 block text-xs uppercase tracking-wider mb-0.5">
                    4. The Decisive Evidence:
                  </strong>
                  <p className="text-neutral-300">{sol.fullExplanation.decisiveEvidenceWalkthrough}</p>
                </div>

                <div>
                  <strong className="font-mono text-neutral-400 block text-xs uppercase tracking-wider mb-0.5">
                    5. Why Other Suspects Were Cleared:
                  </strong>
                  <p className="text-neutral-400 italic">{sol.fullExplanation.whyOthersAreInnocent}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Re-Attempt Accusation</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest"
              >
                <span>Return to Case Files</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* Multi-Step Accusation Form */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Step Progress Ticker */}
            <div className="flex items-center justify-between border-b border-detective-800 pb-3 font-mono text-xs">
              <div className="space-x-2">
                <span className="text-evidence font-bold">STEP 0{currentStep} OF 05</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-300 uppercase">
                  {currentStep === 1 && 'Identify Primary Culprit'}
                  {currentStep === 2 && 'Determine Modus Operandi (How)'}
                  {currentStep === 3 && 'Establish Criminal Motive (Why)'}
                  {currentStep === 4 && 'Select Supporting Physical Evidence'}
                  {currentStep === 5 && 'Final Indictment Verification'}
                </span>
              </div>
              <span className="text-neutral-500 font-mono text-[11px]">CASEFILE DEDUCTION</span>
            </div>

            {/* STEP 1: CULPRIT */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100">
                    Who committed the crime?
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1">
                    Select the prime suspect who bears ultimate responsibility.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {mystery.suspects.map((s) => {
                    const isSelected = selectedCulpritId === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedCulpritId(s.id)}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-evidence bg-red-950/30 ring-1 ring-evidence text-neutral-100'
                            : 'border-detective-800 bg-detective-950/60 hover:border-detective-700 text-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-serif text-base font-bold block">
                              {s.name}
                            </span>
                            <span className="font-mono text-xs text-neutral-400">
                              {s.occupation} • Age {s.age}
                            </span>
                          </div>
                          <span
                            className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-evidence bg-evidence' : 'border-neutral-600'
                            }`}
                          >
                            {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: METHOD */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100">
                    How was the crime carried out?
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1">
                    Identify the exact mechanical, chemical, optical, or digital method used.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {sol.methodOptions.map((opt) => {
                    const isSelected = selectedMethodId === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedMethodId(opt.id)}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-evidence bg-red-950/30 ring-1 ring-evidence text-neutral-100'
                            : 'border-detective-800 bg-detective-950/60 hover:border-detective-700 text-neutral-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <p className="font-sans text-xs sm:text-sm leading-relaxed pr-4">
                            {opt.text}
                          </p>
                          <span
                            className={`h-4 w-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${
                              isSelected ? 'border-evidence bg-evidence' : 'border-neutral-600'
                            }`}
                          >
                            {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: MOTIVE */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100">
                    Why was the crime committed?
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1">
                    Select the driving motive behind the perpetrator’s actions.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {sol.motiveOptions.map((opt) => {
                    const isSelected = selectedMotiveId === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedMotiveId(opt.id)}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-evidence bg-red-950/30 ring-1 ring-evidence text-neutral-100'
                            : 'border-detective-800 bg-detective-950/60 hover:border-detective-700 text-neutral-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <p className="font-sans text-xs sm:text-sm leading-relaxed pr-4">
                            {opt.text}
                          </p>
                          <span
                            className={`h-4 w-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${
                              isSelected ? 'border-evidence bg-evidence' : 'border-neutral-600'
                            }`}
                          >
                            {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: EVIDENCE */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100">
                    Which pieces of evidence prove your conclusion?
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1">
                    Multi-select the critical clues that dismantle the culprit’s alibi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
                  {mystery.evidence.map((ev) => {
                    const isSelected = selectedEvidenceIds.includes(ev.id);
                    return (
                      <div
                        key={ev.id}
                        onClick={() => toggleEvidenceSelect(ev.id)}
                        className={`p-3.5 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-evidence bg-red-950/30 ring-1 ring-evidence text-neutral-100'
                            : 'border-detective-800 bg-detective-950/60 hover:border-detective-700 text-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-bold text-evidence">
                            {ev.code}
                          </span>
                          <span
                            className={`h-4 w-4 rounded border flex items-center justify-center ${
                              isSelected ? 'border-evidence bg-evidence text-white' : 'border-neutral-600'
                            }`}
                          >
                            {isSelected && <div className="h-2 w-2 bg-white rounded-sm" />}
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-neutral-100">
                          {ev.title}
                        </h4>
                        <p className="font-sans text-[11px] text-neutral-400 mt-1 line-clamp-2">
                          {ev.summary}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & FILE INDICTMENT */}
            {currentStep === 5 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100">
                    Confirm Formal Indictment
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1">
                    Review your deduction before submitting for formal evaluation.
                  </p>
                </div>

                <div className="rounded border border-detective-800 bg-detective-950 p-5 space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-neutral-500 uppercase block text-[10px]">ACCUSED CULPRIT:</span>
                    <span className="text-neutral-100 font-bold text-sm">
                      {mystery.suspects.find((s) => s.id === selectedCulpritId)?.name || 'None Selected'}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-detective-900">
                    <span className="text-neutral-500 uppercase block text-[10px]">METHOD OF EXECUTION:</span>
                    <span className="text-neutral-200">
                      {sol.methodOptions.find((m) => m.id === selectedMethodId)?.text || 'None Selected'}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-detective-900">
                    <span className="text-neutral-500 uppercase block text-[10px]">CRIMINAL MOTIVE:</span>
                    <span className="text-neutral-200">
                      {sol.motiveOptions.find((m) => m.id === selectedMotiveId)?.text || 'None Selected'}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-detective-900">
                    <span className="text-neutral-500 uppercase block text-[10px]">CORROBORATING EVIDENCE ({selectedEvidenceIds.length}):</span>
                    <span className="text-amber-400">
                      {selectedEvidenceIds
                        .map((eid) => mystery.evidence.find((e) => e.id === eid)?.code)
                        .filter(Boolean)
                        .join(', ') || 'No evidence selected'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-detective-800">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
                  className="px-4 py-2 rounded border border-detective-700 bg-detective-850 hover:bg-detective-800 font-mono text-xs uppercase tracking-wider text-neutral-300"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  onClick={() => {
                    if (currentStep === 1 && !selectedCulpritId) return;
                    if (currentStep === 2 && !selectedMethodId) return;
                    if (currentStep === 3 && !selectedMotiveId) return;
                    if (currentStep === 4 && selectedEvidenceIds.length === 0) return;
                    setCurrentStep((prev) => (prev + 1) as any);
                  }}
                  disabled={
                    (currentStep === 1 && !selectedCulpritId) ||
                    (currentStep === 2 && !selectedMethodId) ||
                    (currentStep === 3 && !selectedMotiveId) ||
                    (currentStep === 4 && selectedEvidenceIds.length === 0)
                  }
                  className="inline-flex items-center space-x-1.5 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-5 py-2.5 font-mono text-xs uppercase tracking-widest disabled:opacity-40"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  disabled={submitting}
                  className="inline-flex items-center space-x-2 rounded border border-evidence bg-evidence hover:bg-evidence-dark text-white px-6 py-2.5 font-mono text-xs uppercase tracking-widest shadow-lg"
                >
                  <span>{submitting ? 'Evaluating Evidence...' : 'Submit Formal Indictment'}</span>
                  <Gavel className="h-4 w-4" />
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
