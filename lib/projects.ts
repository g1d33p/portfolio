// lib/projects.ts
// Single source of truth for portfolio project content.
// Strictly aligned with MAIN - Jeevan_Borugadda_Resume.docx and verified codebase implementations.

export type ProjectImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  tags: string[];

  featured?: boolean;
  featuredTag?: string;
  featuredOutcome?: string;
  flagship?: boolean;
  spotlight?: boolean;

  role?: string;
  ownership?: string[];

  problem: string;
  approach: string[];
  impact: string[];
  tools: string[];

  metrics?: { label: string; value: string }[];
  deployment?: string[];
  risks?: string[];

  links?: { label: string; href: string }[];
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "llm-eval-suite",
    title: "LLM Evaluation & Responsible AI Suite",
    subtitle:
      "Systematic benchmarking framework comparing Llama 3.1 vs Mistral across semantic quality, demographic bias, prompt effectiveness, and latency — with automated PM recommendations.",
    year: "2026",
    type: "AI Systems",
    tags: ["Model Evaluation", "Responsible AI", "A/B Testing", "Bias Detection"],
    flagship: true,
    featured: true,
    spotlight: false,
    featuredTag: "Flagship • AI Eval & Responsible AI",
    featuredOutcome:
      "Llama 3.1 scored 7.7% higher on semantic quality (0.713 vs 0.662); Mistral ran 26% faster; both models cleared bias audits across 3 scenarios; structured prompting improved summarization by 25.8%.",

    problem:
      "Teams deploying LLMs often lack a systematic framework to determine which model best fits their use case, whether outputs exhibit demographic bias, and how prompt design impacts quality. This project built production-ready evaluation infrastructure running fully locally with zero API cost.",

    metrics: [
      { label: "Llama 3.1 semantic quality", value: "0.713 / 1.0" },
      { label: "Mistral semantic quality", value: "0.662 / 1.0" },
      { label: "Latency — Mistral", value: "72.5s avg (26% faster)" },
      { label: "Bias risk — both models", value: "LOW (max gap: 0.023)" },
      { label: "Prompt A/B — summarization", value: "Structured +25.8% quality" },
      { label: "Infrastructure cost", value: "$0 (fully local via Ollama)" },
    ],

    approach: [
      "Built a multi-model router sending identical prompts to Llama 3.1 and Mistral concurrently, capturing latency, token throughput, and response characteristics across a curated golden set.",
      "Implemented semantic similarity evaluation using sentence-transformers (all-MiniLM-L6-v2) to score relevance, faithfulness, completeness, and groundedness against reference standards.",
      "Designed a demographic parity test suite evaluating gender, ethnicity, and name bias across professional and financial scenarios using sentiment auditing.",
      "Orchestrated A/B prompt-engineering tests with independent t-tests for statistical significance across summarization and explanation tasks.",
      "Generated automated PM reports translating raw benchmark data into clear model selection, bias risk, and prompt optimization recommendations.",
    ],

    deployment: [
      "Runs fully locally via Ollama with zero API cost; portable to containerized cloud environments.",
      "Interactive Streamlit dashboard displaying model comparison charts, bias parity metrics, and A/B test results.",
      "Single-command reproducible test runner for continuous model evaluation.",
    ],

    risks: [
      "Semantic cosine similarity can undervalue valid paraphrasing — documented as a known boundary.",
      "A/B statistical significance requires iterative sampling to ensure p<0.05 across prompt variants.",
    ],

    impact: [
      "Benchmarked Llama 3.1 vs. Mistral across quality, latency, and fairness KPIs; cleared demographic bias audit across 3 parity scenarios.",
      "Orchestrated A/B prompt tests yielding a 25.8% quality improvement and established production prompt standards.",
      "Provided an audit-ready, model-agnostic evaluation framework for enterprise AI deployments.",
    ],

    tools: [
      "Python",
      "Ollama (Llama 3.1, Mistral)",
      "sentence-transformers",
      "VADER Sentiment",
      "scipy",
      "Streamlit",
      "FastAPI",
    ],

    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/g1d33p/llm-eval-suite",
      },
    ],

    images: [
      {
        src: "/projects/llm-eval-suite.png",
        alt: "LLM Evaluation Suite — semantic quality comparison and bias analysis dashboard",
      },
    ],
  },

  {
    slug: "portfolio-rag-citations",
    title: "Local RAG Assistant (Citations & Golden-Set Evals)",
    subtitle:
      "End-to-end citation-grounded RAG pipeline for unstructured data ingestion, chunking, and embedding with source-only answering, refusal logic, and golden-set evals.",
    year: "2026",
    type: "GenAI System",
    tags: ["RAG Pipelines", "Local LLMs", "Vector Search", "Guardrails", "FastAPI"],
    flagship: false,
    featured: true,
    spotlight: true,
    featuredTag: "Spotlight • Local RAG + Evals",
    featuredOutcome:
      "Shipped an end-to-end RAG system with source-only answering, strict per-claim citations, refusal logic, and golden-set evaluation scoring.",

    problem:
      "Stakeholders and recruiters need rapid, verifiable answers about background, capabilities, and project delivery without hallucinated claims. The goal was to build a local-first RAG pipeline that answers strictly from source documents with citations and verified refusal behavior when evidence is absent.",

    metrics: [
      { label: "Grounding", value: "Source-only with [1], [2] citations" },
      { label: "Refusal logic", value: "Strict fallback when evidence missing" },
      { label: "Golden-set Q/A", value: "30+ validated test cases" },
      { label: "Infrastructure cost", value: "$0 (local Ollama + ChromaDB)" },
    ],

    approach: [
      "Scoped product requirements and delivered an end-to-end RAG pipeline for unstructured document ingestion, PDF chunking, and embedding.",
      "Embedded chunks into a local ChromaDB vector store using nomic-embed-text with tuned top-k retrieval.",
      "Implemented strict source-only prompting: enforced per-claim citations and explicit refusal logic when documents do not contain evidence.",
      "Built a golden-set evaluation framework to score answer relevance, faithfulness, and citation coverage.",
    ],

    deployment: [
      "Deployed with FastAPI backend and Next.js frontend for interactive Q&A.",
      "Guardrails enforce source-only answering, perspective boundaries, and max context limits.",
      "Supports rapid re-indexing as source documents are updated.",
    ],

    risks: [
      "Over-retrieval can dilute grounding — tuned top-k and chunk boundaries to balance context and precision.",
      "Missing evidence must trigger graceful refusal rather than speculative generation.",
    ],

    impact: [
      "Demonstrates production-style GenAI engineering: grounding, guardrails, evals, and auditability.",
      "Provides an interactive, verifiable proof-of-work knowledge base recruiters can query with confidence.",
    ],

    tools: [
      "Python",
      "FastAPI",
      "Ollama (Llama 3.1)",
      "nomic-embed-text",
      "ChromaDB",
      "LangChain",
      "Next.js",
      "TypeScript",
    ],

    links: [
      { label: "Live Demo Video", href: "https://youtu.be/z2po4USyml0" },
      {
        label: "GitHub Repo",
        href: "https://github.com/g1d33p/portfolio/tree/main/demos/rag-local",
      },
      { label: "PRD One-Pager", href: "/reports/Portfolio_RAG_PRD_OnePager.pdf" },
    ],

    images: [
      {
        src: "/projects/portfolio-rag.png",
        alt: "Local RAG Assistant with citations and source-only grounding",
      },
    ],
  },

  {
    slug: "ai-pm-ops-copilot",
    title: "AI PM Ops Copilot (Agentic Workflow & HITL Governance)",
    subtitle:
      "Agentic automation workflow turning complex job requirements into fit-gap analysis and tailored assets with Human-in-the-Loop approval gates.",
    year: "2026",
    type: "Agentic AI",
    tags: ["Agentic AI", "n8n", "Human-in-the-Loop", "Workflow Automation"],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "Agents • HITL Governance",
    featuredOutcome:
      "Built a 0-to-1 agentic workflow with Human-in-the-Loop approval gates, cutting manual preparation time by half with structured quality and compliance controls.",

    problem:
      "Job application and requirements mapping workflows are manual, fragmented, and vulnerable to generic or fabricated outputs. The goal was to build a governed agentic pipeline that parses requirements, retrieves grounded evidence, and produces tailored assets under human review.",

    metrics: [
      { label: "Prep time reduction", value: "~50% time saved per artifact" },
      { label: "Governance", value: "Human-in-the-Loop approval gates" },
      { label: "Traceability", value: "Full run history & requirement logs" },
      { label: "Architecture", value: "Local n8n + Docker + Ollama" },
    ],

    approach: [
      "Engineered an automated n8n workflow parsing job descriptions into structured requirement schemas (must-haves, responsibilities, keywords).",
      "Connected workflow to local RAG endpoints to retrieve citation-backed evidence from verified background documents.",
      "Embedded Human-in-the-Loop (HITL) checkpoints before final asset generation to ensure user oversight and compliance.",
      "Automated drafting of Fit/Gap analyses, ATS-aligned resume bullets, and outreach notes with full audit logging.",
    ],

    deployment: [
      "Orchestrated via n8n in Docker communicating with local Ollama and FastAPI services.",
      "Includes structured logging of prompts, tool calls, and outputs for debugging and compliance.",
      "Returns downloadable run reports for complete auditability.",
    ],

    risks: [
      "Over-automation risk mitigated through mandatory human review checkpoints.",
      "Output drift controlled through strict structured schemas and grounded evidence retrieval.",
    ],

    impact: [
      "Cut manual preparation time by half while maintaining strict quality, compliance, and traceability.",
      "Demonstrates real-world agent architecture: tool calling, HITL gates, and reproducible execution.",
    ],

    tools: [
      "n8n",
      "Docker",
      "Ollama (Llama 3.1)",
      "FastAPI",
      "Prompt Templates",
      "Webhooks",
    ],

    links: [
      { label: "Live Demo Video", href: "https://youtu.be/gZWPeWfMphg" },
      {
        label: "GitHub Workflow",
        href: "https://github.com/g1d33p/portfolio/tree/main/demos/agent-n8n",
      },
      { label: "Workflow Spec", href: "/reports/ai_pm_ops_workflow_spec.pdf" },
    ],

    images: [
      {
        src: "/projects/ai-pm-ops-copilot.png",
        alt: "Agent workflow with approvals and run history",
      },
      {
        src: "/projects/ai-pm-ops-copilot-results.png",
        alt: "Sample result output",
      },
    ],
  },

  {
    slug: "autonomous-desktop-agent",
    title: "Multi-Modal Autonomous Agent & Desktop OS",
    subtitle:
      "Local-first voice and desktop orchestration engine integrating LiveKit, Google Gemini Live, Hermes Agent, and macOS system automation with strict Human-in-the-Loop governance.",
    year: "2026",
    type: "Agentic AI",
    tags: [
      "Autonomous Agents",
      "LiveKit",
      "Google Gemini Live",
      "macOS Automation",
      "HITL Governance",
      "System Design",
    ],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "Agents • Voice & Desktop OS",
    featuredOutcome:
      "Architected a local-first multi-modal agent system combining real-time streaming voice (<600ms latency), persistent browser automation, and macOS desktop orchestration operating at zero idle cost.",

    problem:
      "Commercial AI assistants operate as rigid cloud SaaS silos lacking system-level desktop access, leaking sensitive context across networks, incurring high recurring infrastructure costs, and lacking verifiable guardrails when executing consequential actions.",

    metrics: [
      { label: "Token & Cost Governance", value: ">90% reduction via script short-circuiting" },
      { label: "Voice latency", value: "< 600ms streaming (LiveKit + Gemini)" },
      { label: "Idle cost", value: "$0 (local edge execution)" },
      { label: "Active operating cost", value: "< $25/mo (< $35/mo governed cap)" },
      { label: "Governance", value: "100% HITL on external actions" },
      { label: "Multi-channel access", value: "Global Swift hotkey, WhatsApp, CLI" },
    ],

    approach: [
      "Architected a local-first, privacy-preserving agent runtime leveraging LiveKit Agents framework and Google Gemini Live for bidirectional, low-latency audio streaming.",
      "Engineered a native Swift background daemon monitoring global hardware keycodes (Right Command double-tap) to trigger instant push-to-talk voice capture without window focus.",
      "Built persistent browser automation with authenticated profiles, enabling headless WhatsApp Web monitoring and messaging via background launchd daemons.",
      "Integrated native macOS automation via AppleScript and Python to orchestrate Calendar, Mail, Reminders, and filesystem workflows with automatic classification.",
      "Engineered multi-tier token governance and cost optimization: decoupled high-frequency scheduled tasks (inbox triage, digest dispatch) to zero-token direct script execution, reserving frontier reasoning LLMs strictly for dynamic multi-turn interactions and cutting projected monthly API spend from >$300/mo to <$25/mo.",
      "Implemented self-maintaining memory and reflection architecture: automated 2:00 AM routines that review daily cross-channel communications, extract durable facts and commitments into persistent stores, and maintain continuous context across sessions.",
      "Enforced strict Human-in-the-Loop (HITL) safety architecture: zero permanent file deletions, mandatory user confirmation before sending communications, and tool-enforced verification.",
      "Implemented multi-model failover routing: streaming Gemini Live for conversational voice, lightweight Gemini Flash Lite for batch triage, and local Ollama for zero-connectivity offline fallback.",
    ],

    deployment: [
      "Runs locally as native macOS launchd daemons (com.jeevan.rightcmdlistener, com.jeevan.whatsappwatcher) ensuring 24/7 background availability with minimal memory footprint.",
      "Multi-client support across terminal console mode, Next.js web frontend, and Flutter mobile client.",
      "Configured automated cron triggers for morning executive briefings, daytime inbox triage, and overnight reflections.",
    ],

    risks: [
      "Consequential action risks mitigated through strict approval boundaries where agent proposes actions but requires explicit user confirmation.",
      "System sleep limitations handled via hybrid architecture separating heavy local tasks from lightweight messaging alerts.",
    ],

    impact: [
      "Delivered an always-on, hands-free personal operating system managing cross-stream non-profit operations, calendar commitments, and inbox sorting.",
      "Eliminates context-switching friction by executing tasks via voice and WhatsApp on the go.",
      "Demonstrates advanced 0-to-1 AI product delivery, hardware/software integration, and cost-optimized system architecture.",
    ],

    tools: [
      "Python",
      "Swift",
      "LiveKit",
      "Google Gemini Live",
      "Hermes Agent",
      "Playwright",
      "AppleScript",
      "Next.js",
    ],

    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/g1d33p/jarvis-voice-butler",
      },
    ],

    images: [],
  },

  {
    slug: "enterprise-ai-recruiting-agent",
    title: "Enterprise AI Recruiting Agent (Autonomous Talent Pipeline)",
    subtitle:
      "Autonomous agent pipeline supporting talent-sourcing workflows, multi-dimensional offer scoring, and tailored ATS artifacts with human-in-the-loop controls.",
    year: "2026",
    type: "Agentic AI",
    tags: ["Autonomous Agents", "Workflow Automation", "Playwright", "Claude Code"],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "Agents • Talent Sourcing",
    featuredOutcome:
      "Managed strategic delivery of an autonomous AI agent supporting talent-sourcing workflows, 10-dimension role evaluation, and tailored CV generation.",

    problem:
      "Talent sourcing and application workflows are traditionally high-friction and manual. Typical automated tools hallucinate qualifications or produce generic applications. The goal was to build a rigorous agentic pipeline that analyzes requirements, matches verifiable evidence, and creates tailored artifacts under human review.",

    metrics: [
      { label: "Evaluation framework", value: "10 weighted dimensions (A–F)" },
      { label: "Portal automation", value: "45+ pre-configured company portals" },
      { label: "Pipeline integrity", value: "Automated dedup & status checks" },
      { label: "Governance", value: "Mandatory human review before submission" },
    ],

    approach: [
      "Managed strategic delivery of an autonomous AI agent pipeline supporting sourcing and application workflows.",
      "Engineered multi-step agent workflows parsing listings, evaluating fit across 10 dimensions, and cross-referencing background evidence.",
      "Built automated ATS-optimized PDF generation adapting resume content per role using Playwright and structured typography.",
      "Integrated automated portal scanning across 45+ companies and batch evaluation with parallel worker execution.",
    ],

    deployment: [
      "CLI-driven pipeline with Go-based terminal UI for tracking and filtering application statuses.",
      "Automated merge, deduplication, status normalization, and health verification scripts.",
      "Human-in-the-loop review model: system evaluates and recommends, human approves and acts.",
    ],

    risks: [
      "Over-automation prevented by design: system never submits applications autonomously.",
      "Data consistency enforced via centralized profile schemas and sync validation checks.",
    ],

    impact: [
      "Streamlines application preparation and sourcing workflow time while preserving strict factual integrity.",
      "Demonstrates advanced agent orchestration, CLI tooling, and governed automation.",
    ],

    tools: [
      "Node.js",
      "Playwright",
      "Go",
      "Claude Code",
      "Markdown / ATS Engines",
    ],

    links: [],

    images: [],
  },

  {
    slug: "bank-telemarketing",
    title: "Bank Telemarketing Propensity System (ML Delivery & Decision Support)",
    subtitle:
      "Leakage-free pre-call customer prioritization system delivering ~$190K in campaign cost avoidance and ~49% subscriber capture in the top 10% of contacts.",
    year: "2025",
    type: "ML Delivery",
    tags: ["CRISP-DM", "XGBoost", "SHAP", "Tableau", "ROI Analysis"],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "ML Delivery • Decision Support",
    featuredOutcome:
      "Directed product strategy and full SDLC delivery using CRISP-DM; captured ~49% subscriber uptake in top 10% of contacts with ~$190K campaign cost avoidance.",

    problem:
      "Telemarketing outreach conversion is low and each call incurs real operational cost. The goal was to build a leakage-free propensity scoring model to prioritize high-potential customers before calling, optimizing agent capacity and minimizing campaign cost.",

    metrics: [
      { label: "Capture @ Top 10%", value: "~49% of subscribers" },
      { label: "Capture @ Top 20%", value: "~72% of subscribers" },
      { label: "Cost avoidance", value: "~$190K per campaign" },
      { label: "CPA reduction", value: "~70% reduction in acquisition cost" },
      { label: "Model AUC", value: "0.81 (leakage-free pre-call features)" },
    ],

    approach: [
      "Directed product strategy and full SDLC delivery using CRISP-DM framework from problem definition to executive readout.",
      "Built leakage-free feature sets by strictly excluding post-call duration signals; standardized preprocessing and validation.",
      "Trained and compared classification models (XGBoost, Logistic Regression, Neural Networks) evaluated on capture@decile and AUC.",
      "Translated model probabilities into operational decile tiers with clear calling-capacity thresholds.",
      "Built interactive Tableau dashboards translating model performance and profitability drivers for non-technical stakeholders.",
    ],

    deployment: [
      "Designed CRM lead integration pipeline: raw export → scoring model → ranked tiered call list.",
      "Rollout plan with A/B testing strategy against baseline outreach and evaluation windows.",
      "Monitoring framework tracking score drift, conversion drift, and threshold recalibration cadence.",
    ],

    risks: [
      "Target leakage: call duration artificially inflates model accuracy; explicitly excluded to ensure real-world pre-call validity.",
      "Class imbalance addressed through probability calibration and decile-based ranking rather than arbitrary cutoff thresholds.",
    ],

    impact: [
      "Captured ~49% of subscribers in the top 10% of contacts and ~72% in the top 20%, dramatically improving outbound efficiency.",
      "Delivered estimated ~$190K in campaign cost avoidance through strategic capacity reallocation.",
      "Enabled executive and operational adoption through visual explainability and documented rollout guidelines.",
    ],

    tools: ["Python", "SQL", "XGBoost", "SHAP", "Tableau"],

    links: [
      {
        label: "Full Report (Viz included)",
        href: "/reports/bank-telemarketing-final-report.pdf",
      },
      {
        label: "GitHub (Dataset and Code)",
        href: "https://github.com/g1d33p/Capstone-2025",
      },
    ],

    images: [
      {
        src: "/projects/bankPic.png",
        alt: "Bank telemarketing project hero image",
      },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
