import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Let's connect
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Reach out for speaking, collaborations, or enterprise automation
              work. I respond fastest via email and LinkedIn.
            </p>
          </div>
          <a
            href={`mailto:${userData.email}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Email me
          </a>
        </div>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Direct channels
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Best ways to get a quick response.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                  >
                    {userData.email}
                  </a>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    LinkedIn
                  </p>
                  <a
                    href={userData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Calendar
                  </p>
                  <a
                    href={userData.socialLinks.topmate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                  >
                    topmate.io/aifanatic
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Social presence
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Follow along for updates, talks, and videos.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={userData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Twitter
                  <span className="text-xs text-gray-400">Follow</span>
                </a>
                <a
                  href={userData.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  YouTube
                  <span className="text-xs text-gray-400">Watch</span>
                </a>
                <a
                  href={userData.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  TikTok
                  <span className="text-xs text-gray-400">Shorts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
