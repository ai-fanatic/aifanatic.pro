import React from "react";
import ContainerBlock from "@components/ContainerBlock";

export default function Downloads() {
  const downloadItems = [
    {
      title: "EB-1A Evidence Deck",
      description:
        "Comprehensive 10-15 slide presentation documenting evidence of extraordinary ability across all EB-1A criteria.",
      fileType: "PDF",
      size: "Coming Soon",
      path: "#",
      available: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Executive Bio (1-Page)",
      description:
        "Concise professional biography highlighting key achievements, awards, and technical expertise.",
      fileType: "PDF",
      size: "Coming Soon",
      path: "#",
      available: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Media Kit",
      description:
        "Professional headshot, short bio, long bio, talk abstracts, and press-ready materials.",
      fileType: "ZIP",
      size: "Coming Soon",
      path: "#",
      available: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Selected Work Portfolio",
      description:
        "Curated portfolio showcasing flagship projects, case studies, and measurable outcomes.",
      fileType: "PDF",
      size: "Coming Soon",
      path: "#",
      available: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      ),
    },
    {
      title: "Speaking & Publications Resume",
      description:
        "Complete list of talks, publications, videos, and community contributions with metrics.",
      fileType: "PDF",
      size: "Coming Soon",
      path: "#",
      available: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <ContainerBlock
      title="Downloads - Evidence & Media Kit - Naveen Chatlapalli"
      description="Download EB-1A evidence deck, executive bio, media kit, and portfolio materials. Officer-friendly packets with verification."
    >
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Downloads
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mb-4">
              Officer-friendly evidence packets, professional materials, and comprehensive
              documentation. All files hosted on this domain with third-party verification.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> All downloadable materials include verifiable sources and
                are formatted for EB-1A petition review. PDFs include clickable verification
                links.
              </p>
            </div>
          </div>

          {/* Download Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {downloadItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="text-blue-600 dark:text-blue-400 mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>

                {/* File Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Format: {item.fileType}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Size: {item.size}
                  </span>
                </div>

                {/* Download Button */}
                {item.available ? (
                  <a
                    href={item.path}
                    download
                    className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Download {item.fileType}
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-center font-bold py-3 px-6 rounded-lg cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Alternative Access */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Need a Custom Evidence Package?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              For attorneys, USCIS officers, or media inquiries requiring customized documentation
              packages, please contact me directly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
            >
              Contact for Custom Package
            </a>
          </div>

          {/* Verification Note */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Verification & Authenticity
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All PDFs include embedded verification links to third-party sources
              </p>
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Files hosted on naveen.aifanatic.pro (not third-party storage)
              </p>
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Each claim includes source documentation and official references
              </p>
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Contact information provided for verification inquiries
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
