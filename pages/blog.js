import React, { useMemo, useState } from "react";
import Link from "next/link";
import ContainerBlock from "@components/ContainerBlock";
import userData from "@constants/data";

export default function Blog() {
  const [viewMode, setViewMode] = useState("tile"); // tile, list, compact
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);

  const blogs = userData.blogs ?? [];
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const getReadingTime = (content = "") => {
    const words = content
      .replace(/<[^>]*>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  const categoryOptions = useMemo(() => {
    const categories = new Map();
    blogs.forEach((blog) => {
      if (!blog.category) {
        return;
      }
      const value = blog.category.toLowerCase();
      if (!categories.has(value)) {
        categories.set(value, blog.category);
      }
    });
    return [{ label: "All", value: "all" }, ...Array.from(categories, ([value, label]) => ({ label, value }))];
  }, [blogs]);

  const tagOptions = useMemo(() => {
    const tags = new Map();
    blogs.forEach((blog) => {
      blog.tags?.forEach((tag) => {
        const value = tag.toLowerCase();
        if (!tags.has(value)) {
          tags.set(value, tag);
        }
      });
    });
    return Array.from(tags, ([value, label]) => ({ label, value }));
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const tokens = normalizedQuery ? normalizedQuery.split(/\s+/).filter(Boolean) : [];

    return blogs.filter((blog) => {
      const content = blog.content ? blog.content.replace(/<[^>]*>/g, " ") : "";
      const searchable = [
        blog.title,
        blog.excerpt,
        blog.category,
        blog.date,
        blog.tags?.join(" "),
        content,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery = tokens.length === 0 || tokens.every((token) => searchable.includes(token));
      const matchesCategory =
        activeCategory === "all" ||
        blog.category?.toLowerCase() === activeCategory;
      const matchesTags =
        selectedTags.length === 0 ||
        blog.tags?.some((tag) => selectedTags.includes(tag.toLowerCase()));

      return matchesQuery && matchesCategory && matchesTags;
    });
  }, [activeCategory, blogs, normalizedQuery, selectedTags]);

  const hasSearch = normalizedQuery.length > 0;
  const totalCount = blogs.length;
  const resultCount = filteredBlogs.length;
  const hasFilters = activeCategory !== "all" || selectedTags.length > 0;

  const toggleTag = (tagValue) => {
    setSelectedTags((prev) => {
      if (prev.includes(tagValue)) {
        return prev.filter((tag) => tag !== tagValue);
      }
      return [...prev, tagValue];
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setSelectedTags([]);
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
          <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative w-full sm:max-w-md">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setSearchQuery("");
                        event.currentTarget.blur();
                      }
                    }}
                    placeholder="Search articles, tags, or topics"
                    aria-label="Search blog posts"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-10 py-2.5 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {hasSearch && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                      aria-label="Clear search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {hasSearch
                    ? `${resultCount} of ${totalCount} article${totalCount !== 1 ? "s" : ""}`
                    : `${totalCount} article${totalCount !== 1 ? "s" : ""}`}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("tile")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "tile"
                      ? "bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                  title="Tile view"
                  aria-pressed={viewMode === "tile"}
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
                  aria-pressed={viewMode === "list"}
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
                  aria-pressed={viewMode === "compact"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Categories:
                </span>
                {categoryOptions.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setActiveCategory(category.value)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                      activeCategory === category.value
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                        : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-300"
                    }`}
                    aria-pressed={activeCategory === category.value}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {tagOptions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Tags:
                  </span>
                  {tagOptions.map((tag) => (
                    <button
                      key={tag.value}
                      type="button"
                      onClick={() => toggleTag(tag.value)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                        selectedTags.includes(tag.value)
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
                          : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-300"
                      }`}
                      aria-pressed={selectedTags.includes(tag.value)}
                    >
                      #{tag.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {(hasSearch || hasFilters) && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Clear search and filters
              </button>
            )}

            {hasSearch && resultCount === 0 && (
              <div className="rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                No articles match "{searchQuery}". Try a different keyword or clear the search.
              </div>
            )}
          </div>

          {/* Blog Posts */}
          {!totalCount ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Blog posts coming soon. Stay tuned!
              </p>
            </div>
          ) : !resultCount ? (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                No results found.
              </p>
              {(hasSearch || hasFilters) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Clear search and filters
                </button>
              )}
            </div>
          ) : (
            <div className={`
              ${viewMode === "tile" ? "grid gap-6 md:grid-cols-2" : ""}
              ${viewMode === "list" ? "flex flex-col gap-6" : ""}
              ${viewMode === "compact" ? "flex flex-col gap-2" : ""}
            `}>
              {filteredBlogs.map((blog) => (
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
