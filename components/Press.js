import React from "react";
import userData from "@constants/data";

export default function Press() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-12 text-center md:text-left">
          Press & Mentions
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto pt-12 pb-24">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              For press inquiries, please contact:{" "}
              <a
                href={`mailto:${userData.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                {userData.email}
              </a>
            </p>
            <div className="mt-6">
              <a
                href="/downloads"
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
              >
                Media Kit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
