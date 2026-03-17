import { Reveal } from '@/components/animations/reveal';
import { SectionHeading } from './section-heading';

export function ExperienceSection() {
  return (
    <section className="py-12" id="experience">
      <SectionHeading title="Experience" />
      <Reveal>
        <article className="card-base">
          <p className="text-sm text-muted">Ferns N Petals</p>
          <h3 className="mt-1 text-xl font-semibold">Software Engineer</h3>
          <p className="mt-4 leading-relaxed text-muted">
            Focused on checkout optimization, payment integrations, and frontend architecture. Delivered scalable React and
            Next.js solutions for high-volume e-commerce user journeys.
          </p>
        </article>
      </Reveal>
    </section>
  );
}
