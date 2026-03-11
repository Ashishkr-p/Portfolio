import { Reveal } from '@/components/animations/reveal';
import { SectionHeading } from './section-heading';

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'Redux',
  'Node.js',
  'Tailwind',
  'Webpack',
  'Git',
  'Linux',
  'New Relic'
];

export function SkillsSection() {
  return (
    <section className="py-12" id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Tools and platforms used to ship reliable, scalable products for e-commerce teams."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, idx) => (
          <Reveal key={skill} delay={idx * 0.03}>
            <div className="card-base p-4 text-center text-sm font-medium">{skill}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
