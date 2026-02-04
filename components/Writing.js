import React from "react";
import userData from "@constants/data";

export default function Writing() {
  // Group blogposts by source/platform
  const groupedWritings = userData.blogpost.reduce((acc, post) => {
    const source = post.source || "Other";
    if (!acc[source]) {
      acc[source] = [];
    }
    acc[source].push(post);
    return acc;
  }, {});

  // Also include highlights that are writing-related
  const writingHighlights = userData.highlight.filter(
    (h) => h.link && (h.link.includes("medium.com") || h.link.includes("ashling") || h.link.includes("community.uipath"))
  );

  // Group highlights by source
  const highlightGroups = {};
  writingHighlights.forEach((h) => {
    let source = "Other";
    if (h.link.includes("ashling")) source = "Ashling";
    else if (h.link.includes("community.uipath")) source = "UiPath Community";
    else if (h.link.includes("medium.com")) source = "Medium";
    
    if (!highlightGroups[source]) {
      highlightGroups[source] = [];
    }
    highlightGroups[source].push({
      title: h.title,
      date: "", // Highlights don't have dates in current structure
      source: source,
      link: h.link,
    });
  });

  // Merge grouped writings with highlight groups
  Object.keys(highlightGroups).forEach((source) => {
    if (!groupedWritings[source]) {
      groupedWritings[source] = [];
    }
    groupedWritings[source].push(...highlightGroups[source]);
  });

  // Sort each group by date (newest first) - simplified sorting
  Object.keys(groupedWritings).forEach((source) => {
    groupedWritings[source].sort((a, b) => {
      // Simple date comparison - handle missing dates
      const dateA = a.date || "";
      const dateB = b.date || "";
      return dateB.localeCompare(dateA);
    });
  });

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-12 text-center md:text-left">
          Writing
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto pt-12 pb-24">
          {Object.keys(groupedWritings)
            .sort()
            .map((platform) => (
              <div key={platform} className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  {platform}
                </h2>
                <div className="space-y-4">
                  {groupedWritings[platform].map((entry, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            <a
                              href={entry.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {entry.title}
                            </a>
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            {entry.date && (
                              <span className="font-medium">{entry.date}</span>
                            )}
                            <span>{entry.source}</span>
                          </div>
                        </div>
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm whitespace-nowrap"
                        >
                          Read →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
