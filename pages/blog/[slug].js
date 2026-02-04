import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ContainerBlock from "@components/ContainerBlock";
import userData from "@constants/data";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = userData.blogs?.find((b) => b.slug === slug);

  const getReadingTime = (content) => {
    const words = content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
    return Math.ceil(words / 200);
  };

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
    <>
      <Head>
        <style>{
          `
          .blog-content {
            font-size: 1.125rem;
            line-height: 1.8;
            color: inherit;
          }
          
          .blog-content .lead {
            font-size: 1.25rem;
            font-weight: 400;
            color: #4b5563;
            margin-bottom: 1.5rem;
          }
          
          .blog-content h2 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 3rem;
            margin-bottom: 1rem;
            color: inherit;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e5e7eb;
          }
          
          .blog-content h3 {
            font-size: 1.375rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: inherit;
          }
          
          .blog-content .pattern-subtitle {
            font-size: 1.125rem;
            color: #6b7280;
            font-style: italic;
            margin-top: -0.5rem;
            margin-bottom: 1rem;
          }
          
          .blog-content p {
            margin-bottom: 1.25rem;
          }
          
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          
          .blog-content li {
            margin-bottom: 0.5rem;
          }
          
          .blog-content ul {
            list-style-type: disc;
          }
          
          .blog-content ol {
            list-style-type: decimal;
          }
          
          .blog-content strong {
            font-weight: 600;
          }
          
          .blog-content em {
            font-style: italic;
          }
          
          .blog-content code {
            background-color: rgba(156, 163, 175, 0.2);
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.875em;
          }
          
          .blog-content pre {
            background: #1f2937;
            color: #f3f4f6;
            padding: 1.25rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          
          .blog-content pre code {
            background: transparent;
            padding: 0;
            font-size: 0.875rem;
            line-height: 1.7;
          }
          
          /* Result Box */
          .blog-content .result-box {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-left: 4px solid #10b981;
            padding: 1.25rem;
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 1.5rem 0;
            font-size: 1rem;
          }
          
          .blog-content .warning-box {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-left: 4px solid #f59e0b;
            padding: 1.25rem;
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 1.5rem 0;
            font-size: 1rem;
          }
          
          .blog-content .insight-box {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border-left: 4px solid #3b82f6;
            padding: 1.25rem;
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 1.5rem 0;
            font-size: 1rem;
          }
          
          /* Example Flow */
          .blog-content .example-flow {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin: 1.5rem 0;
          }
          
          .blog-content .flow-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .blog-content .flow-item:last-child {
            border-bottom: none;
          }
          
          /* Comparison */
          .blog-content .comparison {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 1rem 0;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 0.5rem;
          }
          
          .blog-content .comparison .bad {
            color: #dc2626;
          }
          
          .blog-content .comparison .good {
            color: #16a34a;
          }
          
          /* Metrics Grid */
          .blog-content .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
          }
          
          .blog-content .metric-card {
            background: #f9fafb;
            padding: 1.25rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
          }
          
          .blog-content .metric-card strong {
            display: block;
            margin-bottom: 0.75rem;
            color: #374151;
          }
          
          .blog-content .metric-card ul {
            margin: 0;
          }
          
          /* Antipattern */
          .blog-content .antipattern {
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 0.75rem;
            padding: 1.25rem;
            margin: 1rem 0;
          }
          
          .blog-content .antipattern h4 {
            color: #dc2626;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          
          .blog-content .final-cta {
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            text-align: center;
            font-size: 1.25rem;
            margin-top: 2rem;
          }
          
          .blog-content blockquote {
            border-left: 4px solid #3b82f6;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: #6b7280;
          }
          
          .blog-content a {
            color: #3b82f6;
            text-decoration: underline;
          }
          
          .blog-content a:hover {
            color: #2563eb;
          }
          
          .blog-content hr {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 2rem 0;
          }
          
          .dark .blog-content pre {
            background: #111827;
          }
          
          .dark .blog-content code {
            background-color: rgba(75, 85, 99, 0.4);
          }
          
          .dark .blog-content .lead {
            color: #9ca3af;
          }
          
          .dark .blog-content h2 {
            border-color: #374151;
          }
          
          .dark .blog-content .pattern-subtitle {
            color: #9ca3af;
          }
          
          .dark .blog-content .result-box {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
            color: #d1fae5;
          }
          
          .dark .blog-content .warning-box {
            background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
            color: #fef3c7;
          }
          
          .dark .blog-content .insight-box {
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            color: #dbeafe;
          }
          
          .dark .blog-content .example-flow,
          .dark .blog-content .comparison,
          .dark .blog-content .metric-card {
            background: #1f2937;
          }
          
          .dark .blog-content .flow-item {
            border-color: #374151;
          }
          
          .dark .blog-content .metric-card strong {
            color: #e5e7eb;
          }
          
          .dark .blog-content .antipattern {
            background: #450a0a;
            border-color: #7f1d1d;
          }
          
          .dark .blog-content blockquote {
            color: #9ca3af;
          }
          
          .dark .blog-content hr {
            border-color: #374151;
          }
          `
        }</style>
      </Head>
      
      <ContainerBlock
        title={`${blog.title} - Naveen Chatlapalli`}
        description={blog.excerpt}
      >
        <article className="bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to all articles
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-10 pb-10 border-b border-gray-200 dark:border-gray-700">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                  {blog.category}
                </span>
                <span className="text-gray-400">•</span>
                <time className="text-gray-500 dark:text-gray-400">
                  {blog.date}
                </time>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {getReadingTime(blog.content)} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {blog.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Content */}
            <div
              className="blog-content text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {userData.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {userData.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {userData.designation}
                    </p>
                  </div>
                </div>

                {/* Share */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Share:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://naveen.aifanatic.pro/blog/${blog.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                    aria-label="Share on Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://naveen.aifanatic.pro/blog/${blog.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                {(() => {
                  const currentIndex = userData.blogs?.findIndex(b => b.slug === slug) ?? -1;
                  const prevPost = currentIndex > 0 ? userData.blogs[currentIndex - 1] : null;
                  const nextPost = currentIndex < (userData.blogs?.length || 0) - 1 ? userData.blogs[currentIndex + 1] : null;
                  
                  return (
                    <>
                      <div className="flex-1">
                        {prevPost && (
                          <Link
                            href={`/blog/${prevPost.slug}`}
                            className="group flex items-start gap-3"
                          >
                            <div className="mt-1 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Previous</p>
                              <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {prevPost.title}
                              </p>
                            </div>
                          </Link>
                        )}
                      </div>
                      
                      <div className="flex-1 text-right">
                        {nextPost && (
                          <Link
                            href={`/blog/${nextPost.slug}`}
                            className="group inline-flex items-start gap-3"
                          >
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Next</p>
                              <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {nextPost.title}
                              </p>
                            </div>
                            <div className="mt-1 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </div>
                          </Link>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </footer>
          </div>
        </article>
      </ContainerBlock>
    </>
  );
}
