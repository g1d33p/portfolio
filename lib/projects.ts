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
    spotlight: true,
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
