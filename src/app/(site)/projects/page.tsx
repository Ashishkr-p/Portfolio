import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/sections/section-heading';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio projects and case studies by Ashish Kumar Pal.'
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <SectionHeading title="Projects" subtitle="Production-grade frontend systems with measurable outcomes." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="card-base overflow-hidden p-0">
            <Image src={project.image} alt={project.title} width={640} height={360} className="h-48 w-full border-b border-border object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <Link href={`/case-studies/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Read Case Study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
