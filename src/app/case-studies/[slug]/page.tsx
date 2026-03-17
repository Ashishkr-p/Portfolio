import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/container';
import { getProjectBySlug, projects } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Case Study' };

  return {
    title: project.title,
    description: project.summary
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <Container className="py-16">
      <article className="space-y-10">
        <header>
          <p className="text-sm uppercase tracking-wide text-muted">Case Study</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-muted">{project.summary}</p>
        </header>

        <section className="card-base">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-3 text-muted">{project.problem}</p>
        </section>

        <section className="card-base">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-3 text-muted">{project.solution}</p>
        </section>

        <section className="card-base">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <p className="mt-3 text-muted">{project.architecture}</p>
        </section>

        <section className="card-base">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="card-base">
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
}
