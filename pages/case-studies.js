import React, { useState } from "react";
import ContainerBlock from "@components/ContainerBlock";
import caseStudiesData, { caseStudyCategories } from "@constants/caseStudiesData";

function CaseStudyCard({ caseStudy, onSelect }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={() => onSelect(caseStudy)}
    >
      {caseStudy.featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 text-xs font-bold uppercase">
          ⭐ Featured
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {caseStudy.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {caseStudy.year}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {caseStudy.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {caseStudy.problem}
        </p>
        <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Read full case study →
        </button>
      </div>
    </div>
  );
}

function CaseStudyDetail({ caseStudy, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-start justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full my-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="mb-6">
            {caseStudy.featured && (
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-2">
                ⭐ Featured
              </div>
            )}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {caseStudy.title}
            </h2>
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                {caseStudy.category}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {caseStudy.year}
              </span>
            </div>
          </div>

          {/* Problem */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-red-500">❗</span> Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {caseStudy.problem}
            </p>
          </section>

          {/* Role */}
          <section className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
              My Role
            </h3>
            <p className="text-blue-800 dark:text-blue-200">{caseStudy.role}</p>
          </section>

          {/* Solution */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-green-500">✓</span> Solution
            </h3>
            <ul className="space-y-2">
              {caseStudy.solution.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-green-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center gap-2">
              <span>📊</span> Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(caseStudy.impact).map(([key, value]) => {
                if (key.includes("Detail")) return null;
                const detailKey = `${key}Detail`;
                const detail = caseStudy.impact[detailKey];
                return (
                  <div key={key} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {detail || value}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Stack */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technicalStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Proof */}
          {caseStudy.proof && caseStudy.proof.length > 0 && (
            <section className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Verification & Proof
              </h3>
              <ul className="space-y-2">
                {caseStudy.proof.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
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
                      {item.label} ({item.type})
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Artifacts */}
          {caseStudy.artifacts && caseStudy.artifacts.length > 0 && (
            <section className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Downloadable Artifacts
              </h3>
              <div className="space-y-2">
                {caseStudy.artifacts.map((artifact, index) => (
                  <a
                    key={index}
                    href={`/documents/case-studies/${artifact.filename}`}
                    className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1"
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
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {artifact.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {artifact.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Key Outcomes
              </h3>
              <ul className="space-y-2">
                {caseStudy.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredCaseStudies =
    selectedCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.category === selectedCategory);

  return (
    <ContainerBlock
      title="Case Studies - Naveen Chatlapalli"
      description="Detailed case studies of enterprise AI and automation projects with measurable outcomes and proof of impact."
    >
      <section className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Flagship projects demonstrating enterprise AI and automation expertise
              with quantified outcomes and third-party verification.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {caseStudyCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onSelect={setSelectedCaseStudy}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking for evidence-backed results?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Each case study includes quantified outcomes, technical architecture details,
              and verification through client testimonials or public recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/evidence"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                View EB-1A Evidence
              </a>
              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                Download Portfolio (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedCaseStudy && (
        <CaseStudyDetail
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </ContainerBlock>
  );
}
