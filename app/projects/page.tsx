// src/app/projects/page.tsx
// This file creates the /projects page.

export default function ProjectsPage() {
  const projects = [
    {
      title: "Bank Telemarketing Propensity",
      tag: "Capstone • AI Delivery",
      outcome:
        "Built prioritization models + what-if dashboard; documented risks & rollout plan.",
      href: "/projects/bank-telemarketing",
    },
    {
      title: "Halloween Demand × Weather",
      tag: "Time-series • BI",
      outcome:
        "Integrated multi-source data and shipped a Tableau dashboard for planning.",
      href: "/projects/halloween-demand",
    },
    {
      title: "Warranty Cost Optimization",
      tag: "Hackathon • Decision Support",
      outcome:
        "Delivered prioritization insights with constraints, explainability, and stakeholder review.",
      href: "/projects/warranty-optimization",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          A selection of work showcasing delivery, systems thinking, and applied AI/analytics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="premium-card group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="text-xs font-medium tracking-wide text-white/60">
                {p.tag}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {p.outcome}
              </p>
              <div className="mt-6 text-sm font-medium text-white/80">
                Open case study{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
