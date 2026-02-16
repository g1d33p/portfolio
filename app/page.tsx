// src/app/page.tsx
// This file controls your Home page (the first page people see).
import FadeIn from "./components/FadeIn";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
  <div className="grid gap-10 md:grid-cols-2 md:items-center">
    {/* LEFT: Copy */}
    <div>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          AI Product / Project Management
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          Systems Thinking • Delivery • Stakeholders
        </span>
      </div>

      <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        I ship AI & analytics work that{" "}
        <span className="text-white/70">changes decisions</span>, not just dashboards.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
        I frame messy problems, align stakeholders, and turn technical work into
        measurable outcomes — with a PMP mindset for risk, scope, and delivery.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="/projects"
          className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
        >
          View Case Studies
        </a>
        <a
          href="/#contact"
          className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
        >
          Resume
        </a>
      </div>

      {/* Quick metrics */}
      <div className="mt-10 grid grid-cols-3 gap-3">
        <Metric label="Focus" value="AI delivery" />
        <Metric label="Style" value="PM mindset" />
        <Metric label="Strength" value="Story + execution" />
      </div>
    </div>

    {/* RIGHT: Portrait + glass panel */}
    <div className="relative">
      <div className="premium-card overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="p-6">
          <div className="text-xs font-medium tracking-wide text-white/60">
            Currently exploring
          </div>
          <div className="mt-2 text-sm text-white/80">
            Unified Notification Hub (BlackBerry Hub-inspired)
          </div>
        </div>

        <div className="relative">
          <img
            src="/headshot.jpg"
            alt="Headshot"
            className="h-[380px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
        </div>
      </div>

      {/* Floating accent dot */}
      <div className="absolute -right-3 top-10 h-3 w-3 rounded-full bg-white/70 shadow-[0_0_30px_rgba(255,255,255,0.35)]" />
    </div>
  </div>
</section>


{/* FLAGSHIP PROJECT */}
<section className="mx-auto max-w-6xl px-6 pb-20">
  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
    <div className="text-xs font-medium tracking-wide text-white/60">
      Flagship Delivery
    </div>

    <h2 className="mt-3 text-2xl font-semibold">
      Bank Telemarketing Propensity System
    </h2>

    <p className="mt-4 max-w-2xl text-white/70">
      Built an end-to-end prioritization framework combining predictive modeling,
      decision simulation, and rollout planning to help teams focus outreach on
      customers most likely to convert.
    </p>

    <div className="mt-6 flex flex-wrap gap-3 text-sm">
      <span className="rounded-full border border-white/20 px-3 py-1">
        Predictive Modeling
      </span>
      <span className="rounded-full border border-white/20 px-3 py-1">
        Stakeholder Alignment
      </span>
      <span className="rounded-full border border-white/20 px-3 py-1">
        Deployment Planning
      </span>
    </div>

    <a
      href="/projects/bank-telemarketing"
      className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black hover:opacity-90"
    >
      View Case Study →
    </a>
  </div>
</section>

{/* WHAT I DO */}
<section className="mx-auto max-w-6xl px-6 pb-20">
  <div className="grid gap-6 md:grid-cols-3 text-sm">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="font-semibold">Translate AI into business decisions</div>
      <p className="mt-2 text-white/70">
        Focus on delivery framing, prioritization logic, and measurable outcomes.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="font-semibold">Bridge stakeholders and technical teams</div>
      <p className="mt-2 text-white/70">
        Align expectations, risks, and rollout strategy so projects actually land.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="font-semibold">Design systems, not just models</div>
      <p className="mt-2 text-white/70">
        Emphasis on workflows, decision support, and adoption — not just accuracy.
      </p>
    </div>
  </div>
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

function Metric(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{props.label}</div>
      <div className="mt-1 text-sm font-medium text-white/85">{props.value}</div>
    </div>
  );
}


