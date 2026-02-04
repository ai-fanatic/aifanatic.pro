import React from "react";

export default function Judging() {
  const judgingEntries = [
    {
      program: "Globee Awards",
      year: "2024",
      role: "Judge",
      verificationLink: "https://globeeawards.com/2024-business-awards-judge/",
      note: "Global awards program recognizing excellence across technology and business.",
    },
    {
      program: "TechX Awards (ChaTech)",
      year: "",
      role: "AI Innovation Award Finalist",
      verificationLink:
        "https://www.chattanoogapulse.com/local-news/business-news/chatech-announces-finalists-for-the-6th-annual-techx-awards/",
      note: "Recognized as a finalist for AI innovation at the 6th annual TechX Awards.",
    },
    {
      program: "HackSharks 2.0",
      year: "",
      role: "Judge",
      verificationLink: "https://hacksharks-2-0.devpost.com/",
      note: "Judged submissions for the HackSharks 2.0 hackathon on Devpost.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Judging
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Awards judging & recognition
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Global multi-award judge with recognition across innovation and enterprise technology.
        </p>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {judgingEntries.map((entry, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {entry.program}
                    </h2>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {entry.role}
                      {entry.year ? ` • ${entry.year}` : ""}
                    </p>
                  </div>
                  {entry.verificationLink && (
                    <a
                      href={entry.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      View source
                    </a>
                  )}
                </div>
                {entry.note && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    {entry.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
