// lib/projects.ts
// This file is the single source of truth for your project content.
// Any page can import this instead of hardcoding project data in JSX.

export type Project = {
  slug: string; // becomes the URL: /projects/[slug]
  title: string;
  subtitle: string;
  year: string;
  type: string;
  tags: string[];
  featured?: boolean;       // show in "Featured Case Studies"
  featuredTag?: string;     // small label like "Capstone • AI Delivery"
  featuredOutcome?: string; // 1-line outcome for the card
  flagship?: boolean;       // show in the "Flagship Delivery" section
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
  heroImage?: {
    src: string;     // e.g. "/projects/retail-performance-dashboard.png"
    alt?: string;
    caption?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "bank-telemarketing",
    title: "Bank Telemarketing Propensity System",
    subtitle:
      "Leakage-free pre-call prioritization + decision support to improve outreach efficiency using Machine Learning.",
    year: "2025",
    type: "Capstone",
    tags: ["Exploratory Data Analysis", "Business Impact Analysis", "Market Analysis & Deployment Strategy"],
    flagship: true,
    featured: true,
    spotlight: false,
    featuredTag: "Capstone • AI Delivery",
    featuredOutcome:
      "Built a leakage-free call-prioritization system with capture@deciles, what-if analysis, and a rollout/monitoring plan.",
    
    // Stronger problem framing (business + decision)
    problem:
      "Telemarketing conversion is low and each call has real cost. The goal was to rank customers before outreach (without using post-call leakage signals like call duration) so teams can prioritize who to call first and measure lift in conversion and cost per acquisition.",
  
    // NEW: metrics (render as a row of cards on the page)
    metrics: [
      { label: "AUC (best)", value: "0.81 (NN), 0.80 (LR)" },
      { label: "Capture @ Top 10%", value: "~49% of subscribers" },
      { label: "Capture @ Top 20%", value: "~72% of subscribers" },
      { label: "Estimated savings", value: "~€165k per 41k-contact campaign" },
      { label: "CPA reduction", value: "~€44 → ~€13 (~70%)" },
    ],
  
    // Rewritten approach = system framing + delivery thinking
    approach: [
      "Defined the decision: pre-call ranking (what we know before calling) vs post-call outcomes (what happens during/after the call).",
      "Built leakage-free training data by excluding duration and other post-call signals; standardized preprocessing and evaluation.",
      "Trained and compared models (Logistic Regression, tree boosting, Neural Network) and validated with AUC + decile/capture metrics.",
      "Converted model scores into an operational call list: tiers/deciles + threshold guidance for different capacity levels.",
      "Added explainability (global + per-customer drivers) to support stakeholder trust and adoption.",
    ],
  
    // NEW: deployment / monitoring (what makes you look senior)
    deployment: [
      "Integration point: CRM exports a daily lead list → scoring pipeline → ranked call list returned to the calling team.",
      "Rollout: A/B test (ranked list vs baseline) with clear success metrics (conversion/cost-per-acquisition) and a fixed evaluation window.",
      "Monitoring: track score drift, conversion drift, tier performance, and recalibrate thresholds monthly/quarterly.",
      "Governance: leakage guardrails (no duration), data quality checks, and documented retraining cadence.",
    ],
  
    // NEW: risks / tradeoffs (adds realism)
    risks: [
      "Target leakage: call duration inflates performance—explicitly excluded to keep results realistic for pre-call decisioning.",
      "Class imbalance: success rate is low, so thresholds and capture metrics matter more than accuracy.",
      "Operational constraints: calling capacity changes—system supports tiered targeting strategies.",
    ],
  
    // Stronger impact (numbers + operational outcomes)
    impact: [
      "Enables a measurable pipeline from leads → ranked call list → tier-based outreach execution.",
      "Captures ~49% of subscribers in the top 10% of contacts and ~72% in the top 20% (capacity-friendly targeting).",
      "Estimated cost per acquisition improves ~€44 → ~€13 (~70%), with ~€165k savings per ~41k-contact campaign (planning estimate).",
      "Improves adoption readiness via explainability + documented rollout, monitoring, and retraining plan.",
    ],
  
    tools: ["Python", "Tableau", "MS Office"],
  
    // UPDATED: add final report PDF link (make sure file exists in /public)
    links: [
      { label: "Full Report (Viz included)", href: "/reports/bank-telemarketing-final-report.pdf" },
      { label: "GitHub (Dataset and Code)", href: "https://github.com/g1d33p/Capstone-2025" },
    ],
    heroImage: {
      src: "/projects/bankPic.png",
      alt: "Retail performance and discount optimization dashboard",
    },
    
  },
  
  {
    slug: "portfolio-rag-citations",
    title: "(InProgress) Portfolio RAG: Grounded Recruiter Q&A (Citations + Evals)",
    subtitle:
      "RAG system that answers recruiter questions about my projects and resume with source citations and evaluation scoring.",
    year: "2026",
    type: "GenAI System",
    tags: ["RAG", "LLM Evaluation", "Vector Search", "Guardrails", "Deployment"],
    flagship: false,
    featured: true,
    spotlight: true,
    featuredTag: "GenAI • RAG + Evals",
    featuredOutcome:
      "Shipped a citation-grounded RAG app with golden-set evals, latency/cost tracking, and refusal behavior when sources are missing.",
  
    problem:
      "Recruiters and hiring managers want fast, trustworthy answers about experience and impact — but typical chatbots hallucinate. The goal was a grounded QA system that only answers using my portfolio + resume sources, with citations and measurable reliability.",
  
    metrics: [
      { label: "Golden-set Q/A", value: "30+ labeled questions" },
      { label: "Faithfulness", value: "Target: ≥ 90% grounded" },
      { label: "Avg latency", value: "Target: < 3.0s" },
      { label: "Cost / query", value: "Tracked (tokens + retrieval)" },
    ],
  
    approach: [
      "Ingested portfolio case studies + resume PDFs into a document pipeline (chunking + metadata).",
      "Embedded chunks into a vector index and added a retrieval layer (top-k + optional rerank).",
      "Generated answers with strict grounding: citations required; refuse when evidence is missing.",
      "Built an evaluation harness (golden Q/A) to score answer relevance + citation coverage + faithfulness.",
      "Instrumented usage telemetry to monitor latency, failure rates, and cost per query.",
    ],
  
    deployment: [
      "Deployed as a web app with API routes for retrieval + generation.",
      "Guardrails: ‘answer only from sources’ + refusal fallback + max context limits.",
      "Monitoring: latency, cost/query, top queries, retrieval hit-rate, and eval regression checks after changes.",
      "Iteration loop: add new golden questions whenever new portfolio content ships.",
    ],
  
    risks: [
      "Over-retrieval: too many chunks increases cost and can dilute grounding — tuned k and chunk size.",
      "Missing evidence: system must refuse instead of guessing — enforced citation requirement.",
      "Stale index: portfolio updates require re-embedding — added a lightweight re-index workflow.",
    ],
  
    impact: [
      "Demonstrates production-style RAG thinking: grounding, evals, guardrails, and monitoring — not just a demo chatbot.",
      "Turns a portfolio into an interactive, verifiable knowledge base recruiters can trust.",
      "Shows AI PM skill set: system design tradeoffs (quality vs latency vs cost) and measurable reliability.",
    ],
  
    tools: ["Next.js", "TypeScript", "OpenAI API (or equivalent)", "Vector DB", "Evaluation Harness"],
  
    links: [
      { label: "Live Demo", href: "PUT_YOUR_DEMO_LINK_HERE" },
      { label: "GitHub Repo", href: "PUT_YOUR_GITHUB_LINK_HERE" },
      { label: "PRD (1-page)", href: "/reports/portfolio-rag-prd.pdf" },
    ],
  
    heroImage: {
      src: "/projects/portfolio-rag.png",
      alt: "RAG system with citations and evaluation dashboard",
    },
  },
  
  {
    slug: "ai-pm-ops-copilot",
    title: "(InProgress) AI PM Ops Copilot: JD → Fit-Gap → Tailored Assets (Human-in-the-loop)",
    subtitle:
      "Agentic workflow that turns a job description into a fit-gap matrix, portfolio edits, outreach drafts, and interview prep — with approvals + audit logs.",
    year: "2026",
    type: "Agentic Workflow",
    tags: ["AI Agents", "Tool Use", "Human-in-the-loop", "Workflow Automation"],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "Agents • HITL + Reliability",
    featuredOutcome:
      "Built an agentic workflow with tool constraints, approvals, and run history to reduce application prep time while keeping outputs controlled.",
  
    problem:
      "Most job-application automation fails because it’s either too generic or too risky (hallucinates, misrepresents experience). The goal was a controlled agent workflow that produces high-signal assets while keeping the user in charge via approvals and evidence-backed drafting.",
  
    metrics: [
      { label: "Time saved / application", value: "Target: 60–75%" },
      { label: "User edit acceptance", value: "Tracked per artifact" },
      { label: "Reliability", value: "Validation checks + refusal rules" },
      { label: "Auditability", value: "Run history + sources logged" },
    ],
  
    approach: [
      "Designed a tool-using workflow: parse JD → extract requirements → map evidence from resume/projects → draft assets.",
      "Added Human-in-the-loop checkpoints before final writing (approve/edit/regen).",
      "Implemented validation rules (no claims without evidence; consistent dates/titles; format checks).",
      "Created run history: inputs, outputs, decisions, and timestamps for auditability.",
      "Shipped a simple UI so users can iterate quickly and track outputs per role.",
    ],
  
    deployment: [
      "Deployed with a lightweight UI + backend workflow runner.",
      "Logging: captures prompts, tool calls, and outputs for debugging and reliability.",
      "Monitoring: failure rate, regeneration rate, and time-to-final per artifact.",
      "Security note: user data stays private; supports deleting runs/artifacts.",
    ],
  
    risks: [
      "Over-automation risk: prevents misrepresentation by requiring evidence mapping + approvals.",
      "Prompt drift: outputs vary over time — stabilized with templates + validation checks.",
      "Tool failures: added retries + graceful fallback to manual steps.",
    ],
  
    impact: [
      "Demonstrates real-world agent design: tool constraints, HITL approvals, logging, and reliability tradeoffs.",
      "Shows AI PM thinking: user journey, risks/guardrails, measurable outcomes, and iteration loops.",
      "Creates a practical demo that recruiters immediately understand (and you can show live).",
    ],
  
    tools: ["n8n or LangGraph", "Next.js UI", "LLM Tool Calling", "Templates", "Logging/Telemetry"],
  
    links: [
      { label: "Live Demo", href: "PUT_YOUR_DEMO_LINK_HERE" },
      { label: "GitHub Repo / Workflow", href: "PUT_YOUR_GITHUB_LINK_HERE" },
      { label: "Workflow Spec", href: "/reports/ai-pm-ops-copilot-spec.pdf" },
    ],
  
    heroImage: {
      src: "/projects/ai-pm-ops-copilot.png",
      alt: "Agent workflow with approvals and run history",
    },
  },

  {
    slug: "aqua-4.0",
    title: "Aqua 4.0 (ShrimpVision)",
    subtitle:
      "Mobile-first AI product to automate shrimp larvae counting and generate biomass + operational insights.",
    year: "2024",
    type: "Startup Product",
    role:
      "CTO — led technical strategy, product architecture, model feasibility analysis, and mobile UX concept design.",
      ownership: [
        "Led technical feasibility analysis for smartphone-based counting",
        "Designed product workflow and mobile UX concept",
        "Defined system architecture and deployment approach",
        "Contributed to pricing, rollout, and go-to-market strategy",
      ],      
    tags: ["Tech + Market Analysis", "Product Design", "Computer Vision"],
    flagship: false,
    featured: true,
    spotlight: false,
    featuredTag: "Startup • Product + AI",
    featuredOutcome:
      "Defined the product, technical approach, UX flow, and pilot rollout strategy for a scalable mobile AI system.",
  
    problem:
      "Shrimp larvae counting is still manual and inconsistent, leading to stocking errors, feed inefficiency, pricing disputes, and unreliable farm planning. Hatcheries need a fast, repeatable, and accessible way to measure counts and biomass without expensive equipment.",
  
    metrics: [
      { label: "Counting accuracy target", value: "~95% beta → goal 98%" },
      { label: "Hardware requirement", value: "Smartphone camera only" },
      { label: "Pilot scope", value: "12 hatcheries + 150–200 farms planned" },
      { label: "Scale design", value: "40k+ farms, multi-region roadmap" },
    ],
  
    approach: [
      "Defined the core product workflow: scan larvae → AI counts + sizes → biomass estimate → downloadable report + insights.",
      "Led technical feasibility analysis for smartphone-only deployment, model constraints, and image quality handling.",
      "Designed the product architecture including mobile UX flow, reporting logic, and CRM-style tracking of farm history.",
      "Benchmarked competitors and positioned the product around accessibility and scalability instead of hardware dependency.",
      "Worked with the team to define the pricing model, pilot rollout plan, and product roadmap.",
    ],
  
    deployment: [
      "MVP architecture: mobile capture → preprocessing → model inference → cloud sync → report generation.",
      "Pilot rollout planned across hatcheries and farms with structured feedback collection.",
      "Product feedback loop via in-app signals, field agents, and usage analytics.",
      "Scale roadmap: India launch → Southeast Asia → Latin America → expansion to additional species.",
    ],
  
    risks: [
      "Image quality variation (lighting, water clarity, device differences) requires robust preprocessing and model updates.",
      "Adoption risk if workflow is slower than manual methods — UX simplicity is critical.",
      "Connectivity constraints require offline-first capability and reliable sync behavior.",
    ],
  
    impact: [
      "Transforms larvae counting into a repeatable digital workflow instead of manual estimation.",
      "Extends beyond counting into biomass insights and farm-level decision support.",
      "Creates a scalable mobile-first product viable for small and mid-size farms.",
      "Demonstrates end-to-end product thinking: problem framing, technical feasibility, UX design, pricing, and rollout.",
    ],
  
    tools: [
      "Computer Vision",
      "Mobile UX design",
      "Product architecture planning",
      "Google Cloud integration",
      "Flutter & Firebase"
    ],
  
    links: [
      { label: "Pitch Deck/ Mockup Design", href: "/reports/aqua-4.0-pitch-deck.pdf" },
      { label: "Tech + Market Feasibility", href: "/reports/aqua-4.0-feasibility.pdf" },
      { label: "Revenue Model", href: "/reports/aqua-4.0-revenue-model.pdf" },
    ],
    heroImage: {
      src: "/projects/aqua.png",
      alt: "Retail performance and discount optimization dashboard",
    },
  },
  {
    slug: "retail-performance-dashboard",
    title: "Retail Performance & Discount Optimization Dashboard",
    subtitle:
      "Executive Tableau dashboard analyzing sales, profit leakage, and discount sensitivity across product categories.",
    year: "2025",
    type: "BI / Analytics",
    tags: ["Tableau", "Business Intelligence", "Pricing Strategy", "Data Storytelling"],
    featured: true,
  
    featuredTag: "BI • Executive Dashboard",
    featuredOutcome:
      "Identified discount-driven profit leakage and category-level pricing risks through executive visual analytics.",
  
    problem:
      "Retail leadership lacked a clear view of how discounting impacted profitability across categories and time. Decisions were made on revenue signals without understanding margin erosion or pricing sensitivity.",
  
    approach: [
      "Built a multi-level executive dashboard showing sales, profit, and quantity trends.",
      "Designed subcategory-level profitability comparison visuals to detect leakage patterns.",
      "Created discount sensitivity curves to show where profit collapses.",
      "Added heatmaps to reveal category-specific pricing risks and discount thresholds.",
      "Focused layout on executive readability rather than analyst complexity.",
    ],
  
    impact: [
      "Revealed categories where discounts drove revenue but destroyed profit.",
      "Enabled leadership to identify optimal discount ranges.",
      "Created an executive-ready decision dashboard instead of raw reporting.",
      "Strengthened storytelling capability around pricing strategy and margin risk.",
    ],
  
    tools: ["Tableau", "Data Modeling", "Business Analysis", "Dashboard UX"],
  
    links: [
      { label: "Tableau Public", href: "https://public.tableau.com/app/profile/jeevan.deep.borugadda/viz/SalesandCustomerDashboard_17716511596500/SalesDashboard?publish=yes" }
    ],
    heroImage: {
      src: "/projects/retail-performance-dashboard.png",
      alt: "Retail performance and discount optimization dashboard",
    },
  },
  
  {
    slug: "halloween-demand",
    title: "Halloween Demand × Weather",
    subtitle: "Merged hourly weather + demand counts and shipped a BI dashboard.",
    year: "2025",
    type: "Analytics",
    tags: ["BI", "Time Series", "Data Integration"],
    flagship: false,
    featured: false,
    spotlight: false,
    featuredTag: "Time-series • BI",
    featuredOutcome:
      "Integrated multi-source data and shipped a Tableau dashboard for planning.",

    problem:
      "Without understanding weather effects, planning staffing/supply is guesswork.",
    approach: [
      "Pulled and cleaned hourly weather data and merged with demand counts.",
      "Built visuals for time-of-day patterns and weather-driven changes.",
      "Published interactive dashboard for scenario exploration.",
    ],
    impact: [
      "Planning insights tied to measurable weather conditions.",
      "Clear visuals supporting better staffing and supply decisions.",
    ],
    tools: ["Python", "APIs", "Tableau"],
  },
  {
    slug: "warranty-optimization",
    title: "Warranty Cost Optimization",
    subtitle: "Prioritization under constraints with explainability for adoption.",
    year: "2025",
    type: "Hackathon",
    tags: ["Optimization", "Stakeholders", "Explainability"],
    flagship: false,
    featured: false,
    spotlight: false,
    featuredTag: "Hackathon • Decision Support",
    featuredOutcome:
      "Delivered prioritization insights with constraints, explainability, and stakeholder review.",

    problem:
      "Warranty costs needed reduction while respecting constraints and interpretability.",
    approach: [
      "Built a prioritization approach aligned to business rules.",
      "Added explainability to support stakeholder trust.",
      "Produced a clear recommendation workflow (not just a model).",
    ],
    impact: [
      "Actionable recommendations with clear rationale.",
      "Decision-support framing for real-world rollout.",
    ],
    tools: ["Python", "Pandas"],
  },
];

// Helper functions keep your pages clean:
export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
