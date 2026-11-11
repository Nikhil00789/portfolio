export const personalInfo = {
  name: "Nikhil Maurya",
  title: "Software Engineer – GenAI & Backend",
  tagline: "Building reliable GenAI platforms & enterprise systems",
  summary:
    "Software Engineer specializing in Generative AI and LLM-powered enterprise platforms, combining backend expertise with hands-on experience in AI agent workflows, prompt engineering, and Model Context Protocol (MCP) integrations. Proven track record in LLM testing, memory validation, PII redaction, and release engineering.",
  email: "ecnikhilmaurya007@gmail.com",
  phone: "+91-9621715394",
  location: "Lucknow, India",
  website: "https://nikhilmaurya.netlify.app",
  github: "https://github.com/Nikhil00789",
  linkedin: "https://linkedin.com/in/nikhilmaurya23",
  resumeFile: "/Nikhil_Maurya.pdf", // place your PDF in /public folder
};

export const skills = [
  {
    category: "GenAI & Agents",
    items: ["LLMs", "Prompt Engineering", "AI Agents", "MCP", "RAG", "Memory Validation", "PII Redaction"],
  },
  {
    category: "AI Validation",
    items: ["LLM Testing", "GenAI QA", "Edge-Case Design", "Root-Cause Analysis", "Release Validation", "Regression Testing"],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "Node.js", "SQL", "React.js", "Tailwind CSS", "Java (Basic)", "C"],
  },
  {
    category: "Mainframe",
    items: ["COBOL", "JCL", "VSAM", "DB2"],
  },
  {
    category: "Tools",
    items: ["Git", "Azure DevOps", "GitHub Copilot", "Claude Code", "Codex CLI", "Gemini CLI", "Postman", "Netlify", "Node-RED"],
  },
  {
    category: "Documentation",
    items: ["Architecture Docs", "API/Tool Mappings", "Release Sign-Off Reports", "User Manuals"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Programmer Analyst – Enterprise AI & Healthcare Solutions",
    company: "Cognizant Technology Solutions",
    project: "Enterprise GenAI Platforms",
    location: "Noida, India",
    period: "Aug 2025 – Present",
    type: "Full-time",
    achievements: [
      "Contributed to end-to-end development, integration, and release validation of enterprise GenAI platforms powering conversational assistants, autonomous digital workers, and code-generation pipelines.",
      "Architected and executed test suites for LLM context retention, session persistence, and memory mechanisms across desktop chat and code-generation modules, mitigating context window degradation.",
      "Integrated and validated Model Context Protocol (MCP) servers and connector configurations, streamlining agentic interactions across Git repositories and Azure DevOps workflows.",
      "Evaluated multi-agent and digital worker workflows, verifying agent selection accuracy, task routing, human-in-the-loop approval loops, and automated command-loop protection.",
      "Designed systematic PII and sensitive data redaction test suites covering credit cards, CVVs, PINs, OTPs, and SSNs to guard against prompt injection and data leakage.",
      "Drove branch-level release validation across feature, release, and hotfix builds, performing root-cause analysis across Electron processes, backend endpoints, and local runtimes prior to sign-off.",
      "Authored technical documentation including architecture overviews, metric-to-tool mappings, user manuals, and structured Markdown deployment reports.",
    ],
    tech: ["LLMs", "MCP", "AI Agents", "Azure DevOps", "Git", "PII Redaction"],
  },
  {
    id: 2,
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    project: "HCSC Healthcare Project",
    location: "Chennai, India",
    period: "Aug 2024 – Aug 2025",
    type: "Full-time",
    achievements: [
      "Supported core backend enterprise workflows involving batch job execution and data processing across legacy and relational systems (COBOL, JCL, VSAM, DB2).",
      "Monitored scheduled batch cycles, diagnosed execution abends, and implemented debugging solutions to maintain data integrity and system availability.",
      "Assisted in defect identification, root-cause analysis, and verification across the full software development lifecycle (SDLC).",
    ],
    tech: ["COBOL", "JCL", "VSAM", "DB2"],
  },
  {
    id: 3,
    role: "GenC Intern",
    company: "Cognizant Technology Solutions",
    project: "Technical Training Program",
    location: "Remote / Hybrid",
    period: "Dec 2023 – May 2024",
    type: "Internship",
    achievements: [
      "Completed enterprise engineering training covering relational database architecture, batch automation pipelines, COBOL/JCL fundamentals, structured debugging, and production coding conventions.",
    ],
    tech: ["COBOL", "JCL", "VSAM", "DB2", "Batch Processing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Generative AI Workspace & Intelligent Agent Platform",
    description:
      "Enterprise GenAI workspace integrating conversational AI, autonomous task planning, multi-step tool execution, and human-in-the-loop approval workflows.",
    highlights: [
      "End-to-end RAG with document chunking, embeddings, and semantic vector retrieval for grounded Q&A and content generation.",
      "MCP integration linking LLMs to external tools, APIs, and data sources through structured schemas.",
      "Multi-turn memory and session state management, plus automated PII detection and redaction pipelines.",
      "LLM reliability suites covering context retention, prompt safety, command-loop prevention, and failure recovery.",
    ],
    tech: ["Python", "LLMs", "RAG", "AI Agents", "MCP", "Vector Search"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Intelligent Multimodal Biometrics System",
    description:
      "High-accuracy biometric identity verification system integrating palmprint, finger-knuckle, and fingernail modalities.",
    highlights: [
      "Custom feature extraction pipelines and classification algorithms to maximize recognition precision.",
      "Designed to reduce false-acceptance rates across modalities.",
    ],
    tech: ["Python", "Computer Vision", "Machine Learning"],
    github: "https://github.com/Nikhil00789",
    demo: null,
    featured: false,
  },
  {
    id: 3,
    title: "Personal Portfolio & Interactive Showcase",
    description:
      "Responsive portfolio with a custom dark theme and modular components, deployed through automated CI/CD.",
    highlights: [
      "Continuous deployment via GitHub Actions and Netlify.",
    ],
    tech: ["React.js", "Tailwind CSS", "Netlify"],
    github: "https://github.com/Nikhil00789",
    demo: "https://nikhilmaurya.netlify.app",
    featured: false,
  },
];

export const education = [
  {
    degree: "B.Tech – Electronics and Communication Engineering",
    institution: "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow",
    period: "2019 – 2023",
    score: "CGPA: 8.0",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner — Amazon Web Services",
  "Claude Certified Architect Foundations (CCA-F) — Anthropic",
  "Python Programming — Coursera",
  "Data Analytics with Python — NPTEL",
  "Generative AI & Prompt Engineering",
];

export const achievements = [
  "🏆 Winner — Roborace Competition, ABHIVYAKTI (2020)",
  "🥈 2nd Position — Technical Quiz (2019–2020)",
];
