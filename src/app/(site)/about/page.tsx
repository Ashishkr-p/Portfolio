import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/sections/section-heading';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ashish Kumar Pal, frontend engineer focused on scalable e-commerce product experiences.'
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <SectionHeading title="About" subtitle="Frontend engineer with 3+ years building high-impact e-commerce interfaces." />
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <Image src="/avatar.svg" alt="Ashish Kumar Pal" width={220} height={220} className="rounded-2xl border border-border" priority />
        <article className="card-base leading-relaxed text-muted">
          <p>
            I specialize in React and Next.js applications where conversion, reliability, and developer velocity are critical.
            My work at Ferns N Petals focused on checkout optimization, payment integrations, and maintainable frontend architecture.
          </p>
          <p className="mt-4">
            I enjoy turning complex business requirements into scalable component systems, predictable state flows, and measurable
            performance improvements.
          </p>
        </article>
      </div>
    </Container>
  );
}
