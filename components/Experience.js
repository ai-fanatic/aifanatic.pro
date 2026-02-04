import React from "react";
import userData from "@constants/data";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Experience
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Career timeline
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Roles and responsibilities spanning enterprise automation, solution
          architecture, and product leadership.
        </p>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="relative border-l border-gray-200 pl-6 dark:border-gray-700">
            {userData.experience.map((exp, idx) => (
              <div key={idx} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900"></span>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                      {exp.year}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
