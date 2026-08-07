import WrapperPage from "@/app/components/share/WrapperPage";
import { getProjectBySlug, mockProjects } from "@/app/data/project";
import { notFound } from "next/navigation";
import FullVideo from "@/app/components/share/FullVideo";
import { BreadcrumbNav } from "@/app/components/share/BreadcrumbNav";

export function generateStaticParams() {
  return mockProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <WrapperPage className="gap-8">
        <BreadcrumbNav />
        <header className="flex flex-col gap-4">
          <h1 className="font-mono text-main text-text-primary tracking-tight">
            {project.title}
          </h1>
          {/* p вместо h3 */}
          <p className="text-main text-text-primary leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="grid w-full grid-cols-1 md:grid-cols-1">
            <FullVideo
              videoMp4={project.videoMp4}
              posterUrl={project.posterUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        </header>

        <section aria-labelledby="stack-title" className="flex flex-col gap-2">
          <h2
            id="stack-title"
            className="font-medium text-main text-text-primary tracking-tight"
          >
            Tech Stack
          </h2>
          <ul className="flex  flex-col gap-5">
            {project.stack.map((item) => (
              // key по имени — не по индексу, не по объекту
              <li key={item.name} className="flex flex-col gap-1">
                <h3 className="text-[13px]  font-mono font-medium text-blue-secondary">
                  {item.name}
                </h3>
                <p className="text-main text-text-primary leading-relaxed">
                  {item.reason}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FEATURES ── */}
        <section
          aria-labelledby="features-title"
          className="flex flex-col gap-2"
        >
          <h2
            id="features-title"
            className="font-medium text-main text-text-primary tracking-tight"
          >
            Features
          </h2>
          {/* project.features — было project.metrics, это был баг */}
          <ul className="flex flex-col gap-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-main text-text-primary leading-relaxed"
              >
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── METRICS ── */}
        <section
          aria-labelledby="metrics-title"
          className="flex flex-col gap-2"
        >
          <h2
            id="metrics-title"
            className="font-medium text-main text-text-primary tracking-tight"
          >
            Results
          </h2>
          <ul className="flex flex-col gap-2">
            {project.metrics.map((metric) => (
              <li
                key={metric}
                className="flex gap-3 text-main text-text-primary leading-relaxed"
              >
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CHALLENGES & SOLUTIONS ── */}
        <section
          aria-labelledby="challenges-title"
          className="flex flex-col gap-4"
        >
          <h2
            id="challenges-title"
            className="font-medium text-main text-text-primary tracking-tight"
          >
            Challenges & Solutions
          </h2>
          <div className="flex flex-col gap-6">
            {project.challenges.map((item, i) => (
              // левая линия — визуально группирует пару challenge/solution
              <dl
                key={i}
                className="flex flex-col gap-3 pl-4"
                style={{
                  borderLeft: "1px solid var(--color-text-quaternary)",
                  opacity: 1,
                }}
              >
                <div className="flex flex-col gap-1">
                  <dt className="text-[11px] uppercase tracking-widest text-red-primary">
                    Challenge
                  </dt>
                  <dd className="text-main text-text-primary leading-relaxed ml-0">
                    {item.challenge}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[11px] uppercase tracking-widest text-green-secondary">
                    Solution
                  </dt>
                  <dd className="text-main text-text-primary leading-relaxed ml-0">
                    {item.solution}
                  </dd>
                </div>
              </dl>
            ))}
          </div>
        </section>

        {/* ── LEARNINGS ── */}
        <section
          aria-labelledby="learnings-title"
          className="flex flex-col gap-4"
        >
          <h2
            id="learnings-title"
            className="font-medium text-main text-text-primary tracking-tight"
          >
            What I Learned
          </h2>
          <ul className="flex flex-col gap-2">
            {project.learnings.map((learning) => (
              <li
                key={learning}
                className="flex gap-3 text-main text-text-primary leading-relaxed"
              >
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>
      </WrapperPage>
    </>
  );
}
