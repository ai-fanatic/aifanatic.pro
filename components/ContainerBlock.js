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
    description: `Agentic AI Architect building enterprise-grade AI agents. UiPath MVP, Globee Awards Judge, Dallas Chapter Leader, and Top 7 Winner in UiPath Specialist Coded Agent Challenge. Evidence-backed EB-1A extraordinary ability.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  // JSON-LD Structured Data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen Chatlapalli",
    jobTitle: "Solution Architect / Agentic AI Architect",
    url: "https://naveen.aifanatic.pro/",
    image: "https://naveen.aifanatic.pro/avatar.png",
    description: meta.description,
    sameAs: [
      "https://sessionize.com/aifanatic/",
      "https://www.linkedin.com/in/nchatlapalli",
      "https://github.com/ai-fanatic",
      "https://twitter.com/navaifanatic",
      "https://medium.com/@navaifanatic",
      "https://www.youtube.com/@aifanatic"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Ashling Partners",
      url: "https://ashlingpartners.com"
    },
    award: [
      "UiPath Most Valuable Professional (MVP)",
      "Globee Awards Judge 2024",
      "Top 7 Winner - UiPath Specialist Coded Agent Challenge"
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Enterprise Automation",
      "Agentic AI",
      "Large Language Models",
      "UiPath",
      "Solution Architecture"
    ]
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content="Naveen Chatlapalli, Agentic AI, UiPath MVP, AI Architect, Enterprise Automation, EB-1A, Globee Awards Judge, Risk Orbit, Solution Architect, Dallas, LLM, AI Agents" />
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
        <meta property="og:image" content={`https://naveen.aifanatic.pro${meta.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@navaifanatic" />
        <meta name="twitter:creator" content="@navaifanatic" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://naveen.aifanatic.pro${meta.image}`} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
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
