import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ContainerBlock from "@components/ContainerBlock";
import { userData } from "@constants/data";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = userData.blogs?.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <ContainerBlock title="Blog Post Not Found">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Blog post not found
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </ContainerBlock>
    );
  }

  return (
    <ContainerBlock
      title={`${blog.title} - Naveen Chatlapalli`}
      description={blog.excerpt}
    >
      <article className="bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
          >
            ← Back to blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {blog.date}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {blog.excerpt}
            </p>
          </header>

          <div
            className="prose dark:prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <hr className="my-12 border-gray-200 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Published by {userData.name}
              </p>
            </div>
            <div className="flex gap-2">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </ContainerBlock>
  );
}
