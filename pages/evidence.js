import React, { useState } from "react";
import ContainerBlock from "@components/ContainerBlock";
import EvidenceCard from "@components/EvidenceCard";
import evidenceData, { evidenceCategories, eb1aCriteria } from "@constants/evidenceData";

export default function Evidence() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvidence = selectedCategory === "all"
    ? evidenceData
    : evidenceData.filter(item => item.category === selectedCategory);

  const metCriteriaCount = eb1aCriteria.criteria.filter(c => c.met).length;

  return (
    <ContainerBlock
      title="EB-1A Evidence - Naveen Chatlapalli"
      description="Comprehensive evidence of extraordinary ability in enterprise AI and automation, organized by EB-1A immigration criteria with third-party verification."
    >
      <section className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Evidence of Extraordinary Ability
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              This page organizes third-party verified evidence aligned to EB-1A criteria.
              Each entry includes what it is, why it matters, and independent verification.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              Claims on this site are supported by third-party verification links and downloadable artifacts.
            </p>
          </div>

          {/* EB-1A Criteria Summary */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {eb1aCriteria.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {eb1aCriteria.description}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {metCriteriaCount} / 3
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Minimum criteria met
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                    style={{ width: `${(metCriteriaCount / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {eb1aCriteria.criteria.map((criterion) => (
                <div
                  key={criterion.id}
                  className={`flex items-start gap-2 p-2 rounded ${
                    criterion.met
                      ? "bg-green-100 dark:bg-green-900/30"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <span className="text-lg">
                    {criterion.met ? "✓" : "○"}
                  </span>
                  <span
                    className={
                      criterion.met
                        ? "text-green-800 dark:text-green-300"
                        : "text-gray-600 dark:text-gray-400"
                    }
                  >
                    {criterion.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {evidenceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evidence Cards */}
          <div className="space-y-6">
            {filteredEvidence.length > 0 ? (
              filteredEvidence.map((evidence) => (
                <EvidenceCard key={evidence.id} evidence={evidence} />
              ))
            ) : (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                No evidence in this category yet.
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              About This Evidence
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All evidence items include independent third-party verification through official websites,
              press releases, or corporate announcements. Downloadable artifacts are available for
              immigration petition support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                Download Evidence Deck (PDF)
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
