/**
 * EB-1A Evidence Data Model
 *
 * This file contains structured evidence organized by EB-1A criteria.
 * Each evidence item includes verification links and downloadable artifacts.
 */

const evidenceData = [
  {
    id: "judging-globee-2024",
    category: "Judging",
    criterion: "Judge of the work of others in the field",
    title: "Globee® Awards — Judge (2024)",
    year: "2024",
    what: "Selected as a judge for Globee Business Awards, evaluating cybersecurity innovations and contributions.",
    why: "Independent judging role demonstrating peer-recognized expertise in evaluating advanced technology solutions and business innovations.",
    impact: "Evaluated 100+ submissions across cybersecurity, business technology, and innovation categories.",
    verifiers: [
      {
        label: "Official judges list (Globee Awards)",
        url: "https://globeeawards.com/2024-business-awards-judge/"
      }
    ],
    artifacts: [
      {
        name: "Globee Judge Invitation Letter",
        filename: "globee-invitation-letter.pdf"
      },
      {
        name: "Globee Judge Confirmation",
        filename: "globee-confirmation-email.pdf"
      }
    ]
  },
  {
    id: "award-uipath-mvp",
    category: "Awards",
    criterion: "Receipt of prizes or awards for excellence",
    title: "UiPath Most Valuable Professional (MVP)",
    year: "2024",
    what: "Awarded UiPath Most Valuable Professional (MVP) for contributions to the RPA and AI automation community.",
    why: "Competitive recognition program honoring thought leadership, technical expertise, and community contributions in enterprise automation.",
    impact: "Selected from thousands of UiPath community members worldwide for exceptional technical contributions and thought leadership.",
    verifiers: [
      {
        label: "UiPath MVP Program",
        url: "https://www.uipath.com/community/mvp"
      }
    ],
    artifacts: [
      {
        name: "UiPath MVP Certificate 2024",
        filename: "uipath-mvp-certificate-2024.pdf"
      },
      {
        name: "MVP Announcement Email",
        filename: "uipath-mvp-announcement.pdf"
      }
    ]
  },
  {
    id: "contribution-risk-orbit",
    category: "Original Contributions",
    criterion: "Original contributions of major significance to the field",
    title: "Risk Orbit — Top 7 Winner (UiPath Specialist Coded Agent Challenge)",
    year: "2024",
    what: "Multi-agent supply chain risk intelligence system recognized as Top 7 winner in global UiPath Specialist Coded Agent Challenge.",
    why: "Demonstrates original contribution through novel multi-agent architecture pattern that addresses real-world enterprise supply chain risk management at scale. Competitive global recognition validates significance and innovation.",
    impact: "80-90% reduction in manual risk research time; enables proactive supply chain rerouting decisions; reusable agent orchestration pattern for enterprise risk domains.",
    verifiers: [
      {
        label: "Ashling Partners article (Top 7 winner + project leadership)",
        url: "https://ashling.ai/resources/risk-orbit-uipath-coded-agents-meet-real-world-supply-chain-risk"
      },
      {
        label: "UiPath Community Forum (technical deep-dive)",
        url: "https://forum.uipath.com/t/risk-orbit-uipath-coded-agent-with-langchain-mcp-context-grounding-uipath-sdk-supported/5676124"
      }
    ],
    artifacts: [
      {
        name: "Risk Orbit Architecture Diagram",
        filename: "risk-orbit-architecture.pdf"
      },
      {
        name: "Risk Orbit Demo Video",
        filename: "risk-orbit-demo.mp4"
      },
      {
        name: "Risk Orbit Case Study",
        filename: "risk-orbit-case-study.pdf"
      },
      {
        name: "Challenge Recognition Email",
        filename: "risk-orbit-winner-announcement.pdf"
      }
    ]
  },
  {
    id: "leadership-uipath-dallas",
    category: "Leadership",
    criterion: "Leading or critical role for organizations with distinguished reputation",
    title: "UiPath Dallas Chapter Leader",
    year: "2023 - Present",
    what: "Founded and lead UiPath Dallas Chapter, organizing technical sessions, workshops, and community events for automation professionals in Dallas-Fort Worth metroplex.",
    why: "Leadership of official UiPath community chapter demonstrates critical role in advancing automation adoption and education in major metropolitan region.",
    impact: "Organized 12+ technical sessions annually; grew chapter to 500+ members; facilitated knowledge sharing across enterprise automation practitioners.",
    verifiers: [
      {
        label: "UiPath Dallas Chapter (official)",
        url: "https://community.uipath.com/dallas-texas"
      },
      {
        label: "Chapter events archive",
        url: "https://community.uipath.com/events"
      }
    ],
    artifacts: [
      {
        name: "Chapter Leadership Appointment Letter",
        filename: "uipath-chapter-leader-appointment.pdf"
      },
      {
        name: "Chapter Growth Analytics",
        filename: "uipath-chapter-analytics.pdf"
      },
      {
        name: "Sample Event Agendas",
        filename: "uipath-chapter-events.pdf"
      }
    ]
  },
  {
    id: "role-ashling-solution-architect",
    category: "Critical Role",
    criterion: "Leading or critical role for organizations with distinguished reputation",
    title: "Solution Architect — Ashling Partners",
    year: "2020 - Present",
    what: "Lead design and delivery of enterprise automation and agentic AI solutions for Fortune 500 clients as Solution Architect at Ashling Partners.",
    why: "Critical role at distinguished enterprise automation consultancy; responsible for architecture decisions impacting large-scale enterprise deployments.",
    impact: "Led 20+ enterprise automation implementations; architected solutions processing millions of transactions annually; rapid promotion from RPA Developer to Solution Architect.",
    verifiers: [
      {
        label: "Ashling Partners",
        url: "https://ashlingpartners.com"
      },
      {
        label: "Ashling Partners Team",
        url: "https://ashlingpartners.com/team"
      }
    ],
    artifacts: [
      {
        name: "Role Appointment Letter",
        filename: "ashling-solution-architect-appointment.pdf"
      },
      {
        name: "Project Portfolio Summary",
        filename: "ashling-project-portfolio.pdf"
      },
      {
        name: "Client Testimonials (redacted)",
        filename: "ashling-client-testimonials.pdf"
      }
    ]
  },
  {
    id: "speaking-sessions",
    category: "Speaking",
    criterion: "Participation as a judge, panel member, or in another leading capacity",
    title: "Technical Speaking & Thought Leadership",
    year: "2023 - Present",
    what: "Delivered 20+ technical talks and workshops on AI, automation, and enterprise architecture at community events, webinars, and conferences.",
    why: "Regular speaking engagements demonstrate recognized expertise and thought leadership; invited to share knowledge with industry audiences.",
    impact: "Reached 5,000+ professionals through technical presentations; topics include LLM evaluation, agent architecture, and automation best practices.",
    verifiers: [
      {
        label: "Sessionize Speaker Profile",
        url: "https://sessionize.com/aifanatic/"
      },
      {
        label: "YouTube Channel (Talks & Tutorials)",
        url: "https://www.youtube.com/@aifanatic"
      }
    ],
    artifacts: [
      {
        name: "Speaking Engagements Portfolio",
        filename: "speaking-portfolio.pdf"
      },
      {
        name: "Session Recordings Archive",
        filename: "session-recordings-list.pdf"
      },
      {
        name: "Event Invitations",
        filename: "speaking-invitations.pdf"
      }
    ]
  }
];

/**
 * Categories for filtering evidence
 */
export const evidenceCategories = [
  { id: "all", label: "All Evidence" },
  { id: "Judging", label: "Judging", criterion: "Judge of the work of others" },
  { id: "Awards", label: "Awards & Recognition", criterion: "Receipt of prizes or awards" },
  { id: "Original Contributions", label: "Original Contributions", criterion: "Original contributions of major significance" },
  { id: "Leadership", label: "Leadership", criterion: "Leading or critical role" },
  { id: "Critical Role", label: "Critical Role", criterion: "Critical role for distinguished organizations" },
  { id: "Speaking", label: "Speaking & Panels", criterion: "Participation in leading capacity" }
];

/**
 * EB-1A Criteria Reference
 */
export const eb1aCriteria = {
  title: "EB-1A Extraordinary Ability Criteria",
  description: "Evidence must satisfy at least 3 of the following 10 criteria:",
  criteria: [
    {
      id: 1,
      text: "Receipt of nationally or internationally recognized prizes or awards for excellence",
      met: true,
      evidenceIds: ["award-uipath-mvp"]
    },
    {
      id: 2,
      text: "Membership in associations requiring outstanding achievements",
      met: false,
      evidenceIds: []
    },
    {
      id: 3,
      text: "Published material about the person in professional or major trade publications",
      met: false,
      evidenceIds: []
    },
    {
      id: 4,
      text: "Participation as a judge of the work of others in the field",
      met: true,
      evidenceIds: ["judging-globee-2024"]
    },
    {
      id: 5,
      text: "Original scientific, scholarly, artistic, athletic, or business-related contributions of major significance",
      met: true,
      evidenceIds: ["contribution-risk-orbit"]
    },
    {
      id: 6,
      text: "Authorship of scholarly articles in professional or major trade publications",
      met: false,
      evidenceIds: []
    },
    {
      id: 7,
      text: "Display of work at artistic exhibitions or showcases",
      met: false,
      evidenceIds: []
    },
    {
      id: 8,
      text: "Performance in a leading or critical role for organizations with a distinguished reputation",
      met: true,
      evidenceIds: ["leadership-uipath-dallas", "role-ashling-solution-architect"]
    },
    {
      id: 9,
      text: "Command of a high salary or substantially high remuneration",
      met: false,
      evidenceIds: []
    },
    {
      id: 10,
      text: "Commercial success in the performing arts",
      met: false,
      evidenceIds: []
    }
  ]
};

export default evidenceData;
