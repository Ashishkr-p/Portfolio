import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/sections/section-heading';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Detailed case studies of frontend architecture and e-commerce optimization projects.'
};

export default function CaseStudiesIndexPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        title="Case Studies"
        subtitle="Deep dives into architecture, implementation tradeoffs, and measurable outcomes."
      />

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.slug} className="card-base">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-muted">{project.summary}</p>
            <Link href={`/case-studies/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              Read full case study
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
