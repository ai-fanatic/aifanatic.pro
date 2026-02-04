import React from "react";
import Link from "next/link";
import ContainerBlock from "@components/ContainerBlock";
import { userData } from "@constants/data";

export default function Blog() {
  return (
    <ContainerBlock
      title="Blog - Naveen Chatlapalli"
      description="Thoughts on AI, automation, and enterprise technology"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Thoughts on AI, automation, and building production-ready systems.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {userData.blogs?.map((blog) => (
              <article
                key={blog.slug}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {!userData.blogs?.length && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Blog posts coming soon. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </ContainerBlock>
  );
}
