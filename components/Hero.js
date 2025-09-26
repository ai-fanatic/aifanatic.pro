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
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Solution Architect
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              UiPath MVP*
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              UiPath Dallas Chapter Leader
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Gen AI Engineer
            </h1>
          </RainbowHighlight>
          {/* <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Solopreneur
            </h1>
          </RainbowHighlight> */}
        </RoughNotationGroup>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-bold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            Contact Me
          </a>
          <a
            href="/download"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            📄 Download Presentation
          </a>
          <a
            href="/about"
            className="bg-white bg-opacity-20 backdrop-blur-lg px-8 py-3 rounded-full font-bold hover:bg-opacity-30 transition-all border border-white border-opacity-30 text-center"
          >
            Learn More
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
