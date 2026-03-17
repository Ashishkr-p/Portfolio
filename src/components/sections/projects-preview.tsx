'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionHeading } from './section-heading';

export function ProjectsPreviewSection() {
  return (
    <section className="py-12" id="projects">
      <SectionHeading title="Featured Projects" subtitle="Case studies from production e-commerce systems." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="card-base overflow-hidden p-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="h-44 w-full border-b border-border object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <div className="mt-4 flex gap-3">
                <Link href={`/case-studies/${project.slug}`} className="text-sm font-semibold text-primary hover:underline">
                  Read Case Study
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
