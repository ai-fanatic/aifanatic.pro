import React from "react";
import ContainerBlock from "@components/ContainerBlock";

const downloadPackets = [
  {
    id: "eb1a-evidence-deck",
    title: "EB-1A Evidence Deck",
    description: "Comprehensive 15-slide evidence deck organized by EB-1A criteria with third-party verification links and artifacts.",
    fileSize: "8.2 MB",
    pages: "15 slides",
    format: "PDF",
    filename: "naveen-chatlapalli-eb1a-evidence-deck.pdf",
    category: "Evidence",
    featured: true,
    includes: [
      "All 6 evidence items with verifiers",
      "EB-1A criteria mapping",
      "Downloadable artifact inventory",
      "Third-party verification index"
    ]
  },
  {
    id: "executive-bio",
    title: "Executive Bio (1-page)",
    description: "Concise professional biography highlighting extraordinary ability credentials, awards, and leadership roles.",
    fileSize: "420 KB",
    pages: "1 page",
    format: "PDF",
    filename: "naveen-chatlapalli-executive-bio.pdf",
    category: "Bio",
    featured: true,
    includes: [
      "Current role and organization",
      "Awards and recognition",
      "Leadership positions",
      "Technical expertise areas"
    ]
  },
  {
    id: "portfolio",
    title: "Selected Work Portfolio",
    description: "Portfolio of flagship projects including Risk Orbit, enterprise automation solutions, and technical innovations.",
    fileSize: "12.5 MB",
    pages: "28 pages",
    format: "PDF",
    filename: "naveen-chatlapalli-portfolio.pdf",
    category: "Portfolio",
    featured: true,
    includes: [
      "3 detailed case studies",
      "Architecture diagrams",
      "Quantified outcomes",
      "Client testimonials (redacted)"
    ]
  },
  {
    id: "media-kit",
    title: "Media Kit",
    description: "Professional media assets including headshots, bios (short/long), talk abstracts, and branding guidelines.",
    fileSize: "5.8 MB",
    pages: "Multiple files",
    format: "ZIP",
    filename: "naveen-chatlapalli-media-kit.zip",
    category: "Media",
    featured: false,
    includes: [
      "Professional headshot (high-res)",
      "Short bio (50 words)",
      "Long bio (200 words)",
      "Speaker introduction script",
      "Talk abstracts and session descriptions"
    ]
  },
  {
    id: "speaking-portfolio",
    title: "Speaking Engagements Portfolio",
    description: "Comprehensive list of 20+ technical talks, workshops, and presentations with recordings and slides.",
    fileSize: "3.2 MB",
    pages: "12 pages",
    format: "PDF",
    filename: "naveen-chatlapalli-speaking-portfolio.pdf",
    category: "Speaking",
    featured: false,
    includes: [
      "Complete session list with dates",
      "Video recording links",
      "Slide deck downloads",
      "Audience metrics and feedback"
    ]
  },
  {
    id: "certifications",
    title: "Certifications & Training",
    description: "Professional certifications, technical training, and continuing education credentials.",
    fileSize: "6.4 MB",
    pages: "Multiple files",
    format: "PDF",
    filename: "naveen-chatlapalli-certifications.pdf",
    category: "Credentials",
    featured: false,
    includes: [
      "Professional certifications",
      "Technical training certificates",
      "Continuing education credits",
      "Specialized program completions"
    ]
  }
];

const categories = ["All", "Evidence", "Bio", "Portfolio", "Media", "Speaking", "Credentials"];

function DownloadCard({ packet }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
      {packet.featured && (
        <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
          ⭐ Recommended
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {packet.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {packet.format}
            </span>
            <span>{packet.pages}</span>
            <span>{packet.fileSize}</span>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {packet.category}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {packet.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
          Includes:
        </h4>
        <ul className="space-y-1">
          {packet.includes.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`/documents/downloads/${packet.filename}`}
        className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <span className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download {packet.format}
        </span>
      </a>
    </div>
  );
}

export default function Downloads() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPackets = selectedCategory === "All"
    ? downloadPackets
    : downloadPackets.filter(packet => packet.category === selectedCategory);

  return (
    <ContainerBlock
      title="Downloads - Naveen Chatlapalli"
      description="Download evidence decks, portfolios, bios, and professional documentation for EB-1A immigration petitions and professional inquiries."
    >
      <section className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Downloads
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Officer-friendly evidence packets, professional portfolios, and documentation
              designed for EB-1A petitions and professional inquiries.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              All documents are hosted on this domain and include third-party verification links.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Documents</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg text-center border border-purple-200 dark:border-purple-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Featured</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg text-center border border-green-200 dark:border-green-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">PDF</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Format</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-lg text-center border border-orange-200 dark:border-orange-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">Ready</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">For Review</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredPackets.map((packet) => (
              <DownloadCard key={packet.id} packet={packet} />
            ))}
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-lg p-8 border border-gray-300 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Custom Documentation?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you need customized evidence packets, employer verification letters,
              or additional documentation for your specific use case, please get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="/evidence"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                View Evidence Vault
              </a>
            </div>
          </div>

          {/* Usage Note */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
              📋 Usage Note
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              These documents are designed for immigration petitions, professional inquiries,
              and media requests. All verification links are current as of the document creation date.
              For the most up-to-date information, please visit the Evidence page or contact directly.
            </p>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
