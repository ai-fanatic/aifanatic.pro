import React, { useState } from "react";
import Link from "next/link";
import ContainerBlock from "@components/ContainerBlock";
import userData from "@constants/data";

export default function Blog() {
  const [viewMode, setViewMode] = useState("tile"); // tile, list, compact

  const getReadingTime = (content) => {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.ceil(words / 200);
  };

  return (
    <ContainerBlock
      title="Blog - Naveen Chatlapalli"
      description="Thoughts on AI, automation, and enterprise technology"
    >
      <section className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Deep dives into AI engineering, agentic automation, and lessons from building production systems at scale.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {userData.blogs?.length || 0} article{userData.blogs?.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode("tile")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "tile"
                    ? "bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                title="Tile view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                title="List view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "compact"
                    ? "bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                title="Compact view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Posts */}
          {!userData.blogs?.length ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Blog posts coming soon. Stay tuned!
              </p>
            </div>
          ) : (
            <div className={`
              ${viewMode === "tile" ? "grid gap-6 md:grid-cols-2" : ""}
              ${viewMode === "list" ? "flex flex-col gap-6" : ""}
              ${viewMode === "compact" ? "flex flex-col gap-2" : ""}
            `}>
              {userData.blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className={`
                    group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                    rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300
                    ${viewMode === "tile" ? "" : ""}
                    ${viewMode === "list" ? "flex flex-col md:flex-row md:items-center" : ""}
                    ${viewMode === "compact" ? "flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800" : ""}
                  `}
                >
                  {/* Content */}
                  <div className={`
                    flex-1
                    ${viewMode === "tile" ? "p-6" : ""}
                    ${viewMode === "list" ? "p-6" : ""}
                    ${viewMode === "compact" ? "flex-1 min-w-0" : ""}
                  `}>
                    {/* Meta */}
                    <div className={`
                      flex items-center gap-3 mb-3
                      ${viewMode === "compact" ? "text-xs" : "text-sm"}
                    `}>
                      <span className="text-gray-500 dark:text-gray-400">
                        {blog.date}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {blog.category}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {getReadingTime(blog.content)} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className={`
                      font-semibold text-gray-900 dark:text-white mb-2
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors
                      ${viewMode === "tile" ? "text-xl" : ""}
                      ${viewMode === "list" ? "text-xl md:text-2xl" : ""}
                      ${viewMode === "compact" ? "text-base truncate" : ""}
                    `}>
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    {/* Excerpt - hidden in compact */}
                    {viewMode !== "compact" && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Tags - hidden in compact */}
                    {viewMode !== "compact" && (
                      <div className="flex flex-wrap gap-2">
                        {blog.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Read more link - shown in list view */}
                  {viewMode === "list" && (
                    <div className="px-6 pb-6 md:pb-6 md:pr-6">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                      >
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  )}

                  {/* Arrow for compact */}
                  {viewMode === "compact" && (
                    <div className="text-gray-400 dark:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </ContainerBlock>
  );
}
