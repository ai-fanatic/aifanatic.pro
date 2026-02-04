import React from "react";
import userData from "@constants/data";

export default function Highlight() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-32 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-6xl font-bold py-12 text-center md:text-left">
          Recent Highlights:
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 pb-24">
          {userData.highlight.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a
      href={link}
      className="group block w-full overflow-hidden rounded-2xl shadow-xl transition-transform hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={`${title} highlight`}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <h1 className="absolute top-8 left-8 max-w-[70%] rounded-lg bg-black/70 px-3 py-2 text-lg font-semibold text-white shadow-sm backdrop-blur-sm md:text-xl">
          {title}
        </h1>
        <span className="absolute bottom-8 left-8 rounded-full border border-white/40 px-3 py-1 text-sm font-semibold text-white">
          {number.length === 1 ? "0" + number : number}
        </span>
      </div>
    </a>
  );
};
