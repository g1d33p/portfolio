// app/projects/page.tsx
import Link from "next/link";
import { getAllProjects } from "../../lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-white/70">
          Case studies focused on impact, delivery, and practical decision-making.
        </p>
      </header>

      <section className="grid gap-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">
                {p.type} • {p.year}
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold group-hover:underline">
              {p.title}
            </h2>
            <p className="mt-2 text-white/70">{p.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 text-sm text-white/60">Open case study →</div>
          </Link>
        ))}
      </section>
    </main>
  );
}
