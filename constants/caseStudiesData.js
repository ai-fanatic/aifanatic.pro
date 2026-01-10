/**
 * Case Studies Data
 *
 * Detailed project case studies with measurable outcomes and proof
 */

const caseStudiesData = [
  {
    id: "risk-orbit",
    title: "Risk Orbit — Multi-Agent Supply Chain Risk Intelligence",
    category: "Enterprise AI",
    year: "2024",
    featured: true,
    thumbnail: "/risk-orbit-thumbnail.png",
    problem: "Operations teams react late to geopolitical, tariff, and port disruptions because risk signals are fragmented across tools. Manual research takes 4-6 hours per incident, delaying critical supply chain rerouting decisions.",
    role: "Project lead and architecture owner responsible for agent orchestration design, governance patterns, and integration architecture.",
    solution: [
      "UiPath Maestro orchestration for event-driven triggers and workflow coordination",
      "Specialized agents for geopolitical risk analysis and tariff policy reasoning using LangChain",
      "Governed knowledge retrieval via Model Context Protocol (MCP) server pattern",
      "Unified Risk Summary Report delivery workflow with automated stakeholder notification",
      "Reusable coded-agent pattern enabling rapid deployment of additional risk modules"
    ],
    impact: {
      timeReduction: "80-90%",
      timeReductionDetail: "Manual risk research time reduced from 4-6 hours to 30-45 minutes per incident",
      responseSpeed: "3x faster",
      responseSpeedDetail: "Escalation and proactive rerouting decisions made 3x faster due to automated intelligence gathering",
      reusability: "3+ modules",
      reusabilityDetail: "Agent architecture pattern reused for tariff analysis, port disruption monitoring, and geopolitical risk modules",
      recognition: "Top 7 Winner",
      recognitionDetail: "Recognized as Top 7 winner in global UiPath Specialist Coded Agent Challenge"
    },
    technicalStack: [
      "UiPath Maestro (orchestration)",
      "LangChain (agent framework)",
      "Model Context Protocol (MCP)",
      "UiPath SDK (integration)",
      "OpenAI GPT-4 (reasoning engine)",
      "Azure Functions (serverless compute)"
    ],
    proof: [
      {
        type: "Recognition Article",
        label: "Ashling Partners: Risk Orbit Top 7 Winner",
        url: "https://ashling.ai/resources/risk-orbit-uipath-coded-agents-meet-real-world-supply-chain-risk"
      },
      {
        type: "Technical Deep-Dive",
        label: "UiPath Community Forum: Architecture & Implementation",
        url: "https://forum.uipath.com/t/risk-orbit-uipath-coded-agent-with-langchain-mcp-context-grounding-uipath-sdk-supported/5676124"
      }
    ],
    artifacts: [
      {
        name: "Architecture Diagram",
        filename: "risk-orbit-architecture.pdf",
        description: "Detailed system architecture showing agent orchestration flow"
      },
      {
        name: "Demo Video",
        filename: "risk-orbit-demo.mp4",
        description: "5-minute demonstration of Risk Orbit in action"
      },
      {
        name: "Case Study Full Report",
        filename: "risk-orbit-case-study.pdf",
        description: "Complete case study with metrics and outcomes"
      },
      {
        name: "Technical Documentation",
        filename: "risk-orbit-technical-docs.pdf",
        description: "Implementation guide and reusable patterns"
      }
    ],
    outcomes: [
      "Deployed to production for supply chain risk monitoring across 3 business units",
      "Pattern adopted as template for future coded-agent implementations at Ashling Partners",
      "Presented at UiPath Dallas Chapter event with 100+ attendees",
      "Featured in Ashling Partners thought leadership content"
    ]
  },
  {
    id: "enterprise-automation-platform",
    title: "Enterprise Automation Platform — Fortune 500 Financial Services",
    category: "Enterprise Automation",
    year: "2023",
    featured: true,
    thumbnail: "/enterprise-automation-thumbnail.png",
    problem: "Financial services client processing 50,000+ loan applications monthly with 72-hour average processing time. Manual document review created bottlenecks and compliance risks.",
    role: "Lead Solution Architect responsible for end-to-end automation design, integration architecture, and production deployment strategy.",
    solution: [
      "Intelligent Document Processing (IDP) pipeline using UiPath Document Understanding",
      "Multi-stage automation workflow for loan application processing",
      "Integration with core banking systems and credit bureaus",
      "Compliance validation engine with real-time audit logging",
      "Exception handling and human-in-the-loop review workflows"
    ],
    impact: {
      processingTime: "65% reduction",
      processingTimeDetail: "Average loan processing time reduced from 72 hours to 25 hours",
      throughput: "2.5x increase",
      throughputDetail: "Monthly processing capacity increased from 50,000 to 125,000 applications without additional headcount",
      accuracy: "99.2%",
      accuracyDetail: "Document extraction accuracy of 99.2% with automated validation",
      costSavings: "$2.4M annually",
      costSavingsDetail: "Estimated annual cost savings through operational efficiency and reduced errors"
    },
    technicalStack: [
      "UiPath Studio (development)",
      "UiPath Orchestrator (management)",
      "UiPath Document Understanding",
      "Azure Cognitive Services",
      "SQL Server (data persistence)",
      "RESTful API integrations"
    ],
    proof: [
      {
        type: "Client Testimonial",
        label: "Client feedback (redacted)",
        url: "/documents/case-studies/client-testimonial-redacted.pdf"
      }
    ],
    artifacts: [
      {
        name: "Solution Architecture",
        filename: "enterprise-automation-architecture.pdf",
        description: "High-level solution architecture and integration diagram"
      },
      {
        name: "Results Summary",
        filename: "enterprise-automation-results.pdf",
        description: "Quantified outcomes and performance metrics (redacted)"
      }
    ],
    outcomes: [
      "Successfully deployed to production with zero critical incidents in first 90 days",
      "Solution scaled to process 125,000+ applications monthly",
      "Client expanded automation program to 3 additional business processes",
      "Architecture reused as template for 2 additional financial services clients"
    ]
  },
  {
    id: "intelligent-invoice-processing",
    title: "Intelligent Invoice Processing — Healthcare Provider Network",
    category: "Document AI",
    year: "2022-2023",
    featured: false,
    thumbnail: "/invoice-processing-thumbnail.png",
    problem: "Healthcare provider network processing 30,000+ invoices monthly across 200+ vendors with inconsistent formats. Manual data entry costing 15 FTEs and creating payment delays.",
    role: "Solution Architect and technical lead for AI/ML model training and integration design.",
    solution: [
      "Custom ML models trained on 50,000+ historical invoices for field extraction",
      "Vendor-specific processing templates for top 80% of invoice volume",
      "Automated approval routing based on business rules and thresholds",
      "Integration with ERP system (SAP) for payment processing",
      "Real-time dashboard for exception management and processing metrics"
    ],
    impact: {
      fte: "12 FTEs redeployed",
      fteDetail: "Reduced manual processing requirement from 15 FTEs to 3 FTEs (exception handling)",
      processingTime: "85% faster",
      processingTimeDetail: "Average invoice processing time reduced from 3 days to 5 hours",
      accuracy: "97.5%",
      accuracyDetail: "Automated extraction accuracy of 97.5% for structured invoice fields",
      paymentCycle: "60% reduction",
      paymentCycleDetail: "Vendor payment cycle time reduced by 60%, improving supplier relationships"
    },
    technicalStack: [
      "UiPath Document Understanding",
      "Custom ML models (Azure ML)",
      "UiPath Apps (UI layer)",
      "SAP integration (BAPI/RFC)",
      "Power BI (analytics)"
    ],
    proof: [],
    artifacts: [
      {
        name: "Training Methodology",
        filename: "invoice-processing-ml-training.pdf",
        description: "ML model training approach and validation results"
      },
      {
        name: "Implementation Summary",
        filename: "invoice-processing-implementation.pdf",
        description: "Project timeline and deployment approach (redacted)"
      }
    ],
    outcomes: [
      "Processed 500,000+ invoices in first year of production",
      "Client satisfaction score: 9.2/10",
      "Solution roadmap expanded to include purchase orders and expense reports",
      "Presented as reference architecture at internal Ashling Partners training"
    ]
  }
];

/**
 * Case study categories
 */
export const caseStudyCategories = [
  { id: "all", label: "All Case Studies" },
  { id: "Enterprise AI", label: "Enterprise AI" },
  { id: "Enterprise Automation", label: "Enterprise Automation" },
  { id: "Document AI", label: "Document AI" }
];

export default caseStudiesData;
