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


  problem: string;
  approach: string[];
  impact: string[];
  tools: string[];

  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "bank-telemarketing",
    title: "Bank Telemarketing Propensity System",
    subtitle:
      "Pre-call prioritization + decision support to improve outreach efficiency.",
    year: "2025",
    type: "Capstone",
    tags: ["ML", "Decision Support", "Explainability"],
    flagship: true,
    featured: true,
    featuredTag: "Capstone • AI Delivery",
    featuredOutcome:
      "Built prioritization models + what-if dashboard; documented risks & rollout plan.",


    problem:
      "Telemarketing conversion is low and calling is expensive. We needed a prioritization strategy that is measurable and explainable.",
    approach: [
      "Defined pre-call vs post-call signal flow.",
      "Trained and compared predictive models with strong evaluation.",
      "Converted scores into an actionable call-list ranking + thresholds.",
      "Documented deployment + monitoring plan.",
    ],
    impact: [
      "Clear pipeline from leads → ranked call list.",
      "Stakeholder-friendly reasoning behind decisions.",
      "Reusable framework for other outreach campaigns.",
    ],
    tools: ["Python", "scikit-learn", "XGBoost/LightGBM", "SHAP"],
    links: [{ label: "GitHub", href: "https://github.com/yourname/yourrepo" }],
  },
  {
    slug: "halloween-demand",
    title: "Halloween Demand × Weather",
    subtitle: "Merged hourly weather + demand counts and shipped a BI dashboard.",
    year: "2025",
    type: "Analytics",
    tags: ["BI", "Time Series", "Data Integration"],
    flagship: false,
    featured: true,
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
    featured: true,
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
  {
    slug: "aqua-4.0",
    title: "Aqua 4.0",
    subtitle:
      "ML ready deployable app based on Image Recognition to count Shrimp larvae",
    year: "2025",
    type: "Product/ Startup",
    tags: ["ML", "PRD", "Market Research"],
    flagship: true,
    featured: true,
    featuredTag: "Product • Deployable ML app",
    featuredOutcome:
      "Used to count shrimp larvae using image recognition Ml models to reduce the time taken in counting larvae manually",


    problem:
      "Counting larvae is a huge problem in aqua culture, requires intense manual labor, costs of selling/buying fluctuate in inefficient counting",
    approach: [
      "Image recognition tech to count number of larvae precisely",
      "Trained and compared market competitors with strong evaluation.",
      "Additional market details for transparent buying/ selling of larvae",
      "Designed prototypes, functioning algorithm",
    ],
    impact: [
      "No more intense manual labor, costs go down",
      "Transparent market trends for buyers/ sellers",
      "Reusable and upgradable framework",
    ],
    tools: ["Python", "scikit-learn", "XGBoost/LightGBM", "SHAP"],
    links: [{ label: "GitHub", href: "https://github.com/yourname/yourrepo" }],
  },
];

// Helper functions keep your pages clean:
export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
