import { getAllProjects } from "../lib/projects";
// app/page.tsx
// Home page

export default function HomePage() {
  const projects = getAllProjects();
  const flagship = projects.find((p) => p.flagship);
  const spotlight = projects.find(p => p.spotlight);
  const others = projects.filter(p => !p.flagship && !p.spotlight);
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
{/* HERO SECTION */}
<section className="mx-auto max-w-6xl px-6 py-20">
  <div className="grid gap-10 md:grid-cols-2 md:items-start">
    {/* LEFT: Copy */}
    <div>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          AI Product / Project Management
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          Systems Thinking
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
        PMP Delivery Rigor
        </span>
      </div>

      <h1 className="mt-8 text-5xl font-semibold leading-[1.10] tracking-tight md:text-6xl">
       I lead AI & analytics projects from problem to {" "}
        <span className="text-white/70">deployment</span>
      </h1>

      <p className="mt-8 max-w-xl text-[14px] leading-[1.65] text-white/70"><i>
  I align stakeholders, model strategy, and delivery plans so teams actually use the system — not just admire dashboards.</i>
</p>


      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/projects"
          className="rounded-2xl bg-white px-5 py-3 text-[15px] font-medium text-black hover:opacity-90"
        >
          View Work
        </a>
        <a
          href="/resume.pdf"
          className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
        >
          View Resume
        </a>
      </div>



    </div>

    {/* RIGHT: Floating Portrait */}
    <div className="relative">
      {/* Soft glow behind you (true circle, no panel edges) */}
<div
  className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40"
  style={{
    background:
      "radial-gradient(circle at 51% 60%, rgba(34,211,238,0.35), rgba(99,102,241,0.22), rgba(11,15,20,0) 40%)",
  }}
/>

      <div className="relative mx-auto max-w-[450px]">
        <div className="portrait-wrap">
          <img src="/headshot.png" aria-hidden="true" alt="Jeevan Deep" className="portrait-layer" />
<img src="/headshot.png" aria-hidden="true" className="portrait-layer portrait-layer--blur" />


          <div className="portrait-fade" />
        </div>


      </div>
    </div>
  </div>
</section>

              
      {/* FLAGSHIP PROJECT */}
<section className="mx-auto max-w-6xl px-6 pb-20 -mt-10 md:-mt-16">
  {flagship ? (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
      <div className="text-xs font-medium tracking-wide text-white/60">
        Flagship Delivery
      </div>

      <h2 className="mt-3 text-2xl font-semibold">{flagship.title}</h2>

      <p className="mt-4 max-w-2xl text-white/70">{flagship.subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {flagship.tags.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border border-white/20 px-3 py-1">
            {t}
          </span>
        ))}
      </div>

      <a
        href={`/projects/${flagship.slug}`}
        className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black hover:opacity-90"
      >
        View Case Study →
      </a>
    </div>
  ) : null}
</section>

{/* SPOTLIGHT PROJECT */}
<section className="mx-auto max-w-6xl px-6 pb-20">
  {spotlight ? (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-xs font-medium tracking-wide text-white/60">
        Spotlight Delivery
      </div>

      <h2 className="mt-3 text-2xl font-semibold">{spotlight.title}</h2>
      <p className="mt-4 max-w-2xl text-white/70">{spotlight.subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {spotlight.tags.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border border-white/20 px-3 py-1">
            {t}
          </span>
        ))}
      </div>

      <a
        href={`/projects/${spotlight.slug}`}
        className="mt-6 inline-block rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
      >
        View Case Study →
      </a>
    </div>
  ) : null}
</section>


      {/* WHAT I DO */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">
              Translate AI into business decisions
            </div>
            <p className="mt-2 text-white/70">
              Focus on delivery framing, prioritization logic, and measurable
              outcomes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">
              Bridge stakeholders and technical teams
            </div>
            <p className="mt-2 text-white/70">
              Align expectations, risks, and rollout strategy so projects
              actually land.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">Design systems, not just models</div>
            <p className="mt-2 text-white/70">
              Emphasis on workflows, decision support, and adoption — not just
              accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* OTHER WORK */}
<section className="mx-auto max-w-6xl px-6 pb-20">
  <div className="flex items-end justify-between gap-4">
    <div>
      <h2 className="text-2xl font-semibold">Other Work</h2>
      <p className="mt-2 text-white/70">
        Additional projects that show range across analytics, BI, and decision support.
      </p>
    </div>
    <a href="/projects" className="text-sm text-white/70 hover:text-white">
      View all →
    </a>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {others.slice(0, 3).map((p) => (
      <ProjectCard
        key={p.slug}
        title={p.title}
        tag={p.featuredTag ?? `${p.type} • ${p.year}`}
        outcome={p.featuredOutcome ?? p.subtitle}
        href={`/projects/${p.slug}`}
      />
    ))}
  </div>
</section>


      {/* CERTIFICATIONS & LEADERSHIP */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Certifications & Leadership</h2>
        <p className="mt-2 text-white/70">
          Beyond technical delivery, I apply structured project thinking across
          professional and real-world coordination work.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <LeadershipCard
            title="PMP Certified"
            description="Servant leadership minded, Business vision driven. Applies structured risk thinking, stakeholder mapping, and delivery planning principles across AI and analytics work."
          />
          <LeadershipCard
            title="Leading IT Teams"
            description="Lead and mentored teams of size 3-12 at Amazon, TCS and Wipro Ltd."
          />
          <LeadershipCard
            title="Events Planning & Coordination"
            description="Coordinated multiple vendors, logistics, timelines, and expectations for multiple high-stake multi-stakeholder events, managing more than ~300 people per event"
          />
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
    <h2 className="text-2xl font-semibold">Contact</h2>
    <p className="mt-2 text-white/60">
  Open to AI Project Manager, AI Product, and Analytics Delivery roles.
</p>

    {/* Contact details */}
    <div className="mt-6 flex flex-col text-white/70">
      <a
        href="mailto:deep.jeevan21@gmail.com"
        className="hover:text-white transition"
      >
        deep.jeevan21@gmail.com
      </a>

      <a
        href="tel:+19408438446"
        className="mt-1 hover:text-white transition"
      >
        +1 (940) 843-8446
      </a>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href="https://www.linkedin.com/in/jeevandeepb"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/g1d33p"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
      >
        GitHub
      </a>
    </div>
  </div>
</section>

    </main>
  );
}

// Cards
function ProjectCard(props: {
  title: string;
  tag: string;
  outcome: string;
  href: string;
}) {
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