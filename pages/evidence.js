import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import evidenceData from "@constants/evidence.json";

export default function Evidence() {
  // Group evidence by category
  const categories = {
    "Judging": [],
    "Awards & Recognition": [],
    "Original Contributions": [],
    "Leadership Role": [],
    "Critical Role": [],
    "Publications": []
  };

  evidenceData.forEach(item => {
    if (categories[item.category]) {
      categories[item.category].push(item);
    }
  });

  return (
    <ContainerBlock
      title="EB-1A Evidence of Extraordinary Ability - Naveen Chatlapalli"
      description="Third-party verified evidence aligned to EB-1A criteria. Each entry includes independent verification and downloadable artifacts."
    >
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Evidence of Extraordinary Ability
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
              This page organizes third-party verified evidence aligned to EB-1A criteria.
              Each entry includes: what it is, why it matters, and independent verification.
            </p>
            <div className="mt-6 bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Claims on this site are supported by third-party verification links and downloadable artifacts.</strong>
              </p>
            </div>
          </div>

          {/* Evidence Sections */}
          {Object.entries(categories).map(([categoryName, items]) => {
            if (items.length === 0) return null;

            return (
              <div key={categoryName} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                  {categoryName}
                </h2>
                <div className="space-y-8">
                  {items.map((evidence, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                        {evidence.title}
                      </h3>

                      {/* Criterion Tag */}
                      <div className="mb-4">
                        <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                          EB-1A: {evidence.criterion}
                        </span>
                      </div>

                      {/* What */}
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          What:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {evidence.what}
                        </p>
                      </div>

                      {/* Why it matters */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Why it matters:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {evidence.why}
                        </p>
                      </div>

                      {/* Verification Links */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Verification:
                        </p>
                        <div className="space-y-2">
                          {evidence.verifiers.map((verifier, vIndex) => (
                            <div key={vIndex}>
                              <a
                                href={verifier.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                              >
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
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
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Artifacts */}
                      {evidence.artifacts && evidence.artifacts.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Downloadable Artifacts:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {evidence.artifacts.map((artifact, aIndex) => (
                              <span
                                key={aIndex}
                                className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm"
                              >
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                  />
                                </svg>
                                {artifact}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Download Complete Evidence Package
            </h2>
            <p className="text-lg mb-6">
              Access all evidence materials, certificates, and verification documents in one comprehensive PDF.
            </p>
            <a
              href="/downloads"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Downloads
            </a>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
