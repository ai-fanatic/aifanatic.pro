import React from "react";

/**
 * EvidenceCard Component
 *
 * Displays a single piece of EB-1A evidence with verification links and artifacts
 *
 * Props:
 * - evidence: Evidence object from evidenceData.js
 */
export default function EvidenceCard({ evidence }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {evidence.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {evidence.year}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {evidence.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
            EB-1A Criterion: {evidence.criterion}
          </p>
        </div>
      </div>

      {/* What */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
          What
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{evidence.what}</p>
      </div>

      {/* Why it matters */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
          Why it matters
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{evidence.why}</p>
      </div>

      {/* Impact */}
      {evidence.impact && (
        <div className="mb-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2">
            📊 Impact
          </h4>
          <p className="text-emerald-900 dark:text-emerald-100">
            {evidence.impact}
          </p>
        </div>
      )}

      {/* Verifiers */}
      {evidence.verifiers && evidence.verifiers.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            ✓ Independent Verification
          </h4>
          <ul className="space-y-2">
            {evidence.verifiers.map((verifier, index) => (
              <li key={index}>
                <a
                  href={verifier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {verifier.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Artifacts */}
      {evidence.artifacts && evidence.artifacts.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            📎 Downloadable Artifacts
          </h4>
          <div className="flex flex-wrap gap-2">
            {evidence.artifacts.map((artifact, index) => (
              <a
                key={index}
                href={`/documents/evidence/${artifact.filename}`}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={artifact.name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="truncate max-w-[200px]">
                  {artifact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
