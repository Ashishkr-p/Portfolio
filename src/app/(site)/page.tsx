import dynamic from 'next/dynamic';
import Script from 'next/script';
import { Container } from '@/components/common/container';
import { Hero } from '@/components/home/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsPreviewSection } from '@/components/sections/projects-preview';
import { BlogPreviewSection } from '@/components/sections/blog-preview';
import { SITE_URL } from '@/lib/constants';

const TaskManagerDemo = dynamic(
  () => import('@/components/home/task-manager-demo').then((mod) => mod.TaskManagerDemo),
  {
    ssr: false,
    loading: () => <div className="card-base">Loading Redux demo...</div>
  }
);

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashish Kumar Pal',
  jobTitle: 'Frontend Engineer',
  url: SITE_URL,
  sameAs: [],
  worksFor: {
    '@type': 'Organization',
    name: 'Ferns N Petals'
  },
  knowsAbout: ['React', 'Next.js', 'Redux Toolkit', 'E-commerce Architecture']
};

export default function HomePage() {
  return (
    <>
      <Script id="person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Container>
        <Hero />
        <ProjectsPreviewSection />
        <SkillsSection />
        <ExperienceSection />
        <section className="py-12">
          <TaskManagerDemo />
        </section>
        <BlogPreviewSection />
      </Container>
    </>
  );
}
