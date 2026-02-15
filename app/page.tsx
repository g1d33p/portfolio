// src/app/page.tsx
// This file controls your Home page (the first page people see).
import FadeIn from "./components/FadeIn";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg">
          <p className="text-sm tracking-widest text-white/60">
            AI PRODUCT & PROJECT MANAGEMENT
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            I turn messy problems into structured, deliverable systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            I lead AI and analytics projects end-to-end — aligning stakeholders,
            managing delivery, and translating technical work into business outcomes.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
            >
              View Featured Work
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="featured" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Featured Case Studies</h2>
        <p className="mt-2 text-white/70">
          These are the projects that best represent how I think and deliver.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Bank Telemarketing Propensity"
            tag="Capstone • AI Delivery"
            outcome="Built prioritization models + what-if dashboard; documented risks & rollout plan."
            href="/projects/bank-telemarketing"
          />
          <ProjectCard
            title="Halloween Demand × Weather"
            tag="Time-series • BI"
            outcome="Integrated multi-source data and shipped a Tableau dashboard for planning."
            href="/projects/halloween-demand"
          />
          <ProjectCard
            title="Warranty Cost Optimization"
            tag="Hackathon • Decision Support"
            outcome="Delivered prioritization insights with constraints, explainability, and stakeholder review."
            href="/projects/warranty-optimization"
          />
        </div>
      </section>

      {/* LEADERSHIP & EXECUTION */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Leadership & Execution</h2>
        <p className="mt-2 text-white/70">
          Beyond technical delivery, I apply structured project thinking across professional and real-world coordination work.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <LeadershipCard
            title="PMP Certified"
            description="Applies structured risk thinking, stakeholder mapping, and delivery planning principles across AI and analytics work."
          />
          <LeadershipCard
            title="College Band Coordination"
            description="Managed schedules, rehearsals, and group alignment to deliver performances under time constraints."
          />
          <LeadershipCard
            title="Large Event Planning"
            description="Coordinated vendors, logistics, timelines, and expectations for a high-stake multi-stakeholder event."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-white/70">
            Add your email / LinkedIn here (you said you’ll handle personal details).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// This is a reusable UI component (a "card") used for each project preview.
// We are wrapping the card in an <a> tag so clicking the card navigates to another page.
function ProjectCard(props: { title: string; tag: string; outcome: string; href: string }) {
  return (
    <a
      href={props.href}

      className="premium-card group block rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
    >
      <div className="text-xs font-medium tracking-wide text-white/60">
        {props.tag}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{props.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {props.outcome}
      </p>

      <div className="mt-6 text-sm font-medium text-white/80">
        Read case study{" "}
        <span className="inline-block transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}

function LeadershipCard(props: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {props.description}
      </p>
    </div>
  );
}


