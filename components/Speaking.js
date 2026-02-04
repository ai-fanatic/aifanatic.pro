import React from "react";
import userData from "@constants/data";

export default function Speaking() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-12 text-center md:text-left">
          Speaking
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto pt-12 pb-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Speaker Profile
            </h2>
            <a
              href="https://sessionize.com/aifanatic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
            >
              View Sessionize Profile →
            </a>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Sessions & Talks
            </h2>
            <div className="space-y-6">
              {userData.talks.map((talk, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {talk.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="font-medium">{talk.source}</span>
                        {talk.date && <span>{talk.date}</span>}
                      </div>
                    </div>
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm whitespace-nowrap"
                    >
                      View →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
