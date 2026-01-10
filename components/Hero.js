import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
          Agentic AI Architect
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
          Building enterprise-grade AI agents for automation, risk intelligence, and governed orchestration.
        </p>

        {/* Credentials Strip */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-semibold text-sm">
              UiPath MVP
            </span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-semibold text-sm">
              Globee Awards Judge
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-semibold text-sm">
              Top 7 Winner - UiPath Challenge
            </span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3">
            <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full font-semibold text-sm">
              Solution Architect @ Ashling Partners
            </span>
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-semibold text-sm">
              UiPath Dallas Chapter Lead
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
          <a
            href="/evidence"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-white"
          >
            View EB-1A Evidence →
          </a>
          <a
            href="/downloads"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-white"
          >
            📄 Download Evidence Deck
          </a>
        </div>
      </div>

      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
