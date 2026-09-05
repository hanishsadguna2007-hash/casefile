'use client';

import React from 'react';
import { Mystery } from '@/types/mystery';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface CaseValidatorProps {
  mystery: Partial<Mystery>;
}

export interface ValidationIssue {
  type: 'error' | 'warning';
  message: string;
}

export function validateMystery(mystery: Partial<Mystery>): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Basic Info Checks
  if (!mystery.caseNumber?.trim()) {
    issues.push({ type: 'error', message: 'Case Number is required (e.g. CASE-031).' });
  }
  if (!mystery.title?.trim()) {
    issues.push({ type: 'error', message: 'Case Title is required.' });
  }
  if (!mystery.shortDescription?.trim()) {
    issues.push({ type: 'error', message: 'Short description is required.' });
  }
  if (!mystery.fullStory?.trim()) {
    issues.push({ type: 'error', message: 'Full incident story narrative is required.' });
  }

  // Suspects Check
  if (!mystery.suspects || mystery.suspects.length < 3) {
    issues.push({
      type: 'error',
      message: `At least 3 suspects are required (currently ${mystery.suspects?.length || 0}).`,
    });
  } else {
    mystery.suspects.forEach((s, idx) => {
      if (!s.name.trim()) {
        issues.push({ type: 'error', message: `Suspect #${idx + 1} is missing a name.` });
      }
      if (!s.alibi.trim()) {
        issues.push({
          type: 'warning',
          message: `Suspect "${s.name || `#${idx + 1}`}" is missing a stated alibi.`,
        });
      }
      if (!s.motive.trim()) {
        issues.push({
          type: 'warning',
          message: `Suspect "${s.name || `#${idx + 1}`}" is missing a stated motive.`,
        });
      }
    });
  }

  // Evidence Check
  if (!mystery.evidence || mystery.evidence.length < 3) {
    issues.push({
      type: 'error',
      message: `At least 3 pieces of evidence are required (currently ${mystery.evidence?.length || 0}).`,
    });
  }

  // Solution Consistency Checks
  if (!mystery.solution) {
    issues.push({ type: 'error', message: 'Solution definition is missing.' });
  } else {
    const sol = mystery.solution;
    if (!sol.culpritId) {
      issues.push({ type: 'error', message: 'No culprit is assigned in the solution.' });
    } else if (mystery.suspects && !mystery.suspects.some((s) => s.id === sol.culpritId)) {
      issues.push({
        type: 'error',
        message: 'The assigned culprit ID does not match any suspect in the dossier.',
      });
    }

    if (!sol.criticalEvidenceIds || sol.criticalEvidenceIds.length === 0) {
      issues.push({
        type: 'warning',
        message: 'No decisive evidence items are linked to the solution proof.',
      });
    } else if (mystery.evidence) {
      const missingEvidence = sol.criticalEvidenceIds.filter(
        (eid) => !mystery.evidence?.some((e) => e.id === eid)
      );
      if (missingEvidence.length > 0) {
        issues.push({
          type: 'error',
          message: `Critical evidence IDs [${missingEvidence.join(', ')}] do not exist in the evidence catalog.`,
        });
      }
    }
  }

  // Hints Check
  if (!mystery.hints || mystery.hints.length < 3) {
    issues.push({
      type: 'warning',
      message: `At least 3 hints (Tier 1, 2, 3) are recommended (currently ${mystery.hints?.length || 0}).`,
    });
  }

  return issues;
}

export default function CaseValidator({ mystery }: CaseValidatorProps) {
  const issues = validateMystery(mystery);
  const errors = issues.filter((i) => i.type === 'error');
  const warnings = issues.filter((i) => i.type === 'warning');

  const isValid = errors.length === 0;

  return (
    <div className="rounded border border-detective-800 bg-detective-950 p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-detective-800 pb-3">
        <span className="text-neutral-400 uppercase tracking-wider font-bold">
          CASEFILE INTEGRITY VALIDATOR
        </span>
        {isValid ? (
          <span className="flex items-center space-x-1 text-emerald-400 font-bold">
            <CheckCircle2 className="h-4 w-4" />
            <span>VERIFIED FOR PUBLICATION</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1 text-red-400 font-bold">
            <XCircle className="h-4 w-4" />
            <span>{errors.length} CRITICAL ERRORS</span>
          </span>
        )}
      </div>

      {issues.length > 0 ? (
        <div className="space-y-2">
          {errors.map((err, i) => (
            <div
              key={`err-${i}`}
              className="flex items-start space-x-2 text-red-400 bg-red-950/20 border border-red-900/40 p-2.5 rounded"
            >
              <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>[CRITICAL] {err.message}</span>
            </div>
          ))}

          {warnings.map((warn, i) => (
            <div
              key={`warn-${i}`}
              className="flex items-start space-x-2 text-amber-400 bg-amber-950/20 border border-amber-900/40 p-2.5 rounded"
            >
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>[ADVISORY] {warn.message}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-emerald-400/90 text-[11px] leading-relaxed">
          ✓ All suspects, evidence references, and solution links are internally consistent and ready for active deployment.
        </div>
      )}
    </div>
  );
}
