import React from "react";

export default function Downloads() {
  const downloads = [
    {
      name: "Highlights Deck",
      description: "Overview of key achievements and highlights",
      url: "#", // Placeholder - actual PDF would be added
      type: "PDF",
    },
    {
      name: "One-Page Bio",
      description: "Concise professional biography",
      url: "#", // Placeholder - actual PDF would be added
      type: "PDF",
    },
    {
      name: "Risk Orbit Case Study",
      description: "Detailed case study of the Risk Orbit project",
      url: "#", // Placeholder - actual PDF would be added
      type: "PDF",
    },
    {
      name: "Selected Slides",
      description: "Curated presentation slides from key talks",
      url: "#", // Placeholder - actual PDF would be added
      type: "PDF",
    },
    {
      name: "Media Kit",
      description: "Press kit with photos, bio, and key information",
      url: "#", // Placeholder - actual ZIP would be added
      type: "ZIP",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-12 text-center md:text-left">
          Downloads
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto pt-12 pb-24">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            Downloadable materials including case studies, presentations, and media resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {download.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {download.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm font-medium">
                      {download.type}
                    </span>
                  </div>
                </div>
                <a
                  href={download.url}
                  className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Download →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
