import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title:
      "Naveen Chatlapalli - Agentic AI Architect | UiPath MVP | Globee Awards Judge",
    description: `Agentic AI Architect building enterprise-grade AI agents. UiPath MVP, Globee Awards Judge, Top 7 Winner UiPath Specialist Coded Agent Challenge. Solution Architect at Ashling Partners.`,
    image: "https://naveen.aifanatic.pro/avatar.png",
    type: "website",
    ...customMeta,
  };

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naveen Chatlapalli",
    "jobTitle": "Agentic AI Architect | Solution Architect",
    "url": "https://naveen.aifanatic.pro/",
    "image": "https://naveen.aifanatic.pro/avatar.png",
    "description": meta.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "Texas",
      "addressCountry": "USA"
    },
    "sameAs": [
      "https://sessionize.com/aifanatic/",
      "https://linkedin.com/in/nchatlapalli",
      "https://github.com/ai-fanatic",
      "https://twitter.com/navaifanatic",
      "https://medium.com/@navaifanatic",
      "https://www.youtube.com/@aifanatic"
    ],
    "award": [
      "UiPath Most Valuable Professional (MVP) 2024",
      "Top 7 Winner - UiPath Specialist Coded Agent Challenge",
      "Globee Awards Judge 2024",
      "UiPath Top Contributor 2024"
    ],
    "knowsAbout": [
      "Agentic AI",
      "Enterprise Automation",
      "UiPath",
      "Multi-Agent Systems",
      "AI Orchestration",
      "Solution Architecture"
    ]
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://naveen.aifanatic.pro${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://naveen.aifanatic.pro${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Naveen Chatlapalli - Agentic AI Architect" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@navaifanatic" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
