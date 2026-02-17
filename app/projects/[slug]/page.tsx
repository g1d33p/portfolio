import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "../../../lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Jeevan Deep`,
    description: project.subtitle,
  };
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; // ✅ unwrap Promise
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <Link href="/projects" className="text-sm text-white/70 hover:text-white">
        ← Back to Projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
          <span className="rounded-full bg-white/10 px-3 py-1">
            {project.type} • {project.year}
          </span>
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 text-white/70">{project.subtitle}</p>
        {project.role ? (
  <p className="mt-2 text-sm text-white/60">
    <span className="font-medium text-white/80">Role:</span> {project.role}
  </p>
) : null}

        {project.metrics?.length ? (
  <div className="mt-6 grid gap-3 sm:grid-cols-2">
    {project.metrics.slice(0, 4).map((m) => (
      <div
        key={m.label}
        className="rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        <div className="text-xs text-white/60">{m.label}</div>
        <div className="mt-1 text-sm font-medium text-white/85">{m.value}</div>
      </div>
    ))}
  </div>
) : null}

      </header>

      <section className="mt-10 space-y-10">
        <Block title="Problem">
          <p className="text-white/75">{project.problem}</p>
        </Block>

        <Block title="Approach">
          <ul className="list-disc space-y-2 pl-5 text-white/75">
            {project.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        {project.ownership?.length ? (
  <Block title="What I Owned">
    <ul className="list-disc space-y-2 pl-5 text-white/75">
      {project.ownership.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  </Block>
) : null}


        <Block title="Impact">
          <ul className="list-disc space-y-2 pl-5 text-white/75">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        {project.deployment?.length ? (
  <Block title="Deployment & Monitoring">
    <ul className="list-disc space-y-2 pl-5 text-white/75">
      {project.deployment.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </Block>
) : null}

{project.risks?.length ? (
  <Block title="Risks & Tradeoffs">
    <ul className="list-disc space-y-2 pl-5 text-white/75">
      {project.risks.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </Block>
) : null}


        <Block title="Tools">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </Block>

        {project.links?.length ? (
  <Block title="Resources">
    <div className="flex flex-wrap gap-3">
      {project.links.map((l) => {
        const isExternal = l.href.startsWith("http");
        return (
          <a
            key={l.href}
            href={l.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            {l.label}
          </a>
        );
      })}
    </div>
  </Block>
) : null}

      </section>
      <ProjectNav currentSlug={slug} />
    </main>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        {children}
      </div>
    </section>
  );
}

function ProjectNav({ currentSlug }: { currentSlug: string }) {
  const all = getAllProjects();
  const index = all.findIndex((p) => p.slug === currentSlug);

  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          ← {prev.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          {next.title} →
        </Link>
      ) : <div />}
    </div>
  );
}
