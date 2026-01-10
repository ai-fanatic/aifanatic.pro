import React from "react";
import ContainerBlock from "@components/ContainerBlock";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      name: "Risk Orbit — Multi-Agent Supply Chain Risk Intelligence",
      problem:
        "Operations teams react late to geopolitical, tariff, and port disruptions because risk signals are fragmented across tools.",
      role:
        "Project lead + architecture owner (agent orchestration, governance, integration design).",
      solution: [
        "UiPath Maestro orchestration for event-driven triggers",
        "Specialized agents for geopolitical risk + tariff policy reasoning",
        "Governed knowledge via MCP server pattern",
        "Unified 'Risk Summary Report' delivery workflow",
        "Multi-agent coordination with context grounding via LangChain",
      ],
      impact: [
        "80–90% reduction in manual research time (baseline: 2-3 hours → 15-20 minutes)",
        "Faster escalation and proactive rerouting decisions (same-day vs. 2-3 day lag)",
        "Reusable coded-agent pattern for additional risk modules",
        "Top 7 Winner recognition in UiPath Specialist Coded Agent Challenge",
      ],
      proof: [
        {
          label: "Ashling article - Top 7 Winner",
          url:
            "https://ashling.ai/resources/risk-orbit-uipath-coded-agents-meet-real-world-supply-chain-risk",
        },
        {
          label: "UiPath Forum - Technical Overview",
          url:
            "https://forum.uipath.com/t/risk-orbit-uipath-coded-agent-with-langchain-mcp-context-grounding-uipath-sdk-supported/5676124",
        },
      ],
      tech: [
        "UiPath Maestro",
        "LangChain",
        "MCP Server Pattern",
        "Azure Functions",
        "GPT-4",
        "UiPath SDK",
      ],
      year: "2024",
    },
    {
      id: 2,
      name: "Unsloth — Multimodal Documentation Agent",
      problem:
        "Technical teams waste hours manually creating documentation from screenshots, videos, and raw assets.",
      role:
        "Creator and architect of full-stack solution with AI-powered documentation generation.",
      solution: [
        "React front-end with drag-and-drop asset upload",
        "Azure Functions serverless backend for scalable processing",
        "OpenAI GPT-4 Vision for multimodal content analysis",
        "Automated FAQ generation from documentation context",
        "Chrome extension for one-click capture and generation",
      ],
      impact: [
        "1st place winner in Ashling Partners internal innovation challenge",
        "90% reduction in documentation time (3 hours → 15 minutes)",
        "Live production use by development teams",
        "Reusable pattern for enterprise knowledge management",
      ],
      proof: [
        {
          label: "Live Application",
          url: "https://unsloth.aifanatic.pro",
        },
      ],
      tech: [
        "React",
        "Azure Functions",
        "OpenAI GPT-4 Vision",
        "Chrome Extension APIs",
        "Next.js",
      ],
      year: "2024",
    },
    {
      id: 3,
      name: "Enterprise RPA Solution Architecture — Fortune 500 Client",
      problem:
        "Manual invoice processing across multiple ERP systems causing 3-5 day delays and 15% error rate.",
      role:
        "Lead Solution Architect - Design, implementation oversight, and production deployment.",
      solution: [
        "UiPath ReFramework implementation with queue-based processing",
        "Document Understanding for invoice extraction (95%+ accuracy)",
        "Exception handling with human-in-the-loop review workflow",
        "Integration with SAP, Oracle, and legacy systems",
        "Orchestrator-based monitoring and analytics dashboard",
      ],
      impact: [
        "Processing time: 3-5 days → 4-6 hours (90% reduction)",
        "Error rate: 15% → 2% (87% improvement)",
        "ROI achieved in 6 months (projected 18-month payback)",
        "$2.5M annual cost savings (FTE reduction + error remediation)",
        "Scalable framework deployed to 5 additional business units",
      ],
      proof: [
        {
          label: "Ashling Partners - Case Studies",
          url: "https://ashlingpartners.com",
        },
      ],
      tech: [
        "UiPath Studio",
        "Document Understanding",
        "Orchestrator",
        "SAP Integration",
        "REFramework",
      ],
      year: "2021-2023",
    },
  ];

  return (
    <ContainerBlock
      title="Case Studies - Naveen Chatlapalli"
      description="Detailed project showcases with measurable outcomes, technical architecture, and independent verification."
    >
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
              Flagship projects demonstrating technical leadership, measurable impact, and
              innovative solutions in enterprise automation and AI.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      Case Study #{study.id}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {study.year}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    {study.name}
                  </h2>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{study.problem}</p>
                </div>

                {/* Your Role */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Your Role
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{study.role}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                    Solution
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {study.solution.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-6 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded">
                  <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-3">
                    Impact (Evidence-Backed)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                    {study.impact.map((item, idx) => (
                      <li key={idx} className="font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Proof & Verification
                  </h3>
                  <div className="space-y-2">
                    {study.proof.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Want to discuss a similar challenge?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
