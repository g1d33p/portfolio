// src/app/projects/bank-telemarketing/page.tsx
// This file creates the case study page at /projects/bank-telemarketing

export default function BankTelemarketingCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Top navigation */}
        <a
          href="/projects"
          className="text-sm text-white/70 hover:text-white"
        >
          ← Back to Projects
        </a>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-semibold leading-tight">
          Bank Telemarketing Propensity
        </h1>

        <p className="mt-4 text-white/70">
          A capstone case study showcasing end-to-end analytics delivery: problem framing,
          model validation, risk thinking, and a what-if dashboard for rollout.
        </p>

        {/* Quick facts */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoCard label="Role" value="Project lead (analytics delivery)" />
          <InfoCard label="Methods" value="CRISP-DM • Agile-style milestones" />
          <InfoCard label="Outputs" value="Models • Tableau dashboard • Rollout plan" />
        </div>

        {/* TL;DR */}
        <Section title="TL;DR">
          <ul className="list-disc space-y-2 pl-5 text-white/80">
            <li>
              Built and compared logistic regression and XGBoost models to prioritize high-response customers.
            </li>
            <li>
              Optimized PR-AUC, lift, and decile capture to support efficient agent capacity allocation.
            </li>
            <li>
              Produced a what-if re-ranking dashboard plus assumptions, risks, and an A/B testing plan for deployment.
            </li>
          </ul>
        </Section>

        {/* Context */}
        <Section title="Problem & Context">
          <p className="text-white/80 leading-relaxed">
            Telemarketing campaigns often waste agent time on low-likelihood leads. The goal was to
            prioritize customers with higher probability of subscription, while documenting assumptions
            and creating a practical path to production rollout.
          </p>
        </Section>

        {/* Approach */}
        <Section title="Approach">
          <ol className="list-decimal space-y-2 pl-5 text-white/80">
            <li>Defined success metrics and evaluation approach (PR-AUC, lift, deciles).</li>
            <li>Built baseline model, then iterated to stronger models (logistic → XGBoost).</li>
            <li>Validated performance and captured tradeoffs (precision/recall, threshold choices).</li>
            <li>Translated results into a prioritization workflow and dashboard for stakeholders.</li>
            <li>Documented rollout risks and an A/B testing plan to validate in production.</li>
          </ol>
        </Section>

        {/* Decisions */}
        <Section title="Key Decisions & Tradeoffs">
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              <span className="font-semibold text-white">Metric choice:</span>{" "}
              Optimized for PR-AUC and lift to match the business reality of class imbalance
              and the need to capture high-response segments early.
            </p>
            <p>
              <span className="font-semibold text-white">Model choice:</span>{" "}
              Compared interpretable baselines (logistic regression) against higher-performing
              models (XGBoost) and documented why performance gains were worth the complexity.
            </p>
            <p>
              <span className="font-semibold text-white">Rollout:</span>{" "}
              Proposed an A/B test plan and guardrails to reduce risk and validate impact before scaling.
            </p>
          </div>
        </Section>

        {/* Outcomes */}
        <Section title="Outcome">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 leading-relaxed">
              Delivered a prioritization approach and a stakeholder-friendly dashboard to support campaign execution,
              including documented assumptions, risks, and a measurable deployment plan.
            </p>
            <div className="mt-4 text-sm text-white/60">
              (You can later add links here: Tableau Public / GitHub / PDF write-up)
            </div>
          </div>
        </Section>

        {/* What’s next */}
        <Section title="What I’d do next">
          <ul className="list-disc space-y-2 pl-5 text-white/80">
            <li>Model monitoring plan (data drift, performance drift).</li>
            <li>Calibrated thresholds per campaign goals (cost vs response tradeoff).</li>
            <li>Deeper segmentation strategies for different customer cohorts.</li>
          </ul>
        </Section>

        {/* Footer navigation */}
        <div className="mt-14 flex gap-3">
          <a
            href="/projects"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Back to Projects
          </a>
          <a
            href="/"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            Home
          </a>
        </div>
      </section>
    </main>
  );
}

// Reusable small UI box for quick facts.
// "label" is the heading, "value" is the content.
function InfoCard(props: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-medium tracking-wide text-white/60">
        {props.label}
      </div>
      <div className="mt-2 text-sm text-white/80">{props.value}</div>
    </div>
  );
}

// Reusable section wrapper so every section looks consistent.
function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <div className="mt-4">{props.children}</div>
    </section>
  );
}
