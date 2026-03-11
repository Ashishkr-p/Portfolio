'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const lines = [
  'Ashish Kumar Pal',
  'Frontend Engineer',
  'Building scalable web applications with React, Next.js and modern frontend architecture'
];

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
        >
          3+ years experience
        </motion.p>

        {lines.map((line, index) => (
          <motion.h1
            key={line}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.45 }}
            className={index === 0 ? 'text-4xl font-black tracking-tight sm:text-6xl' : index === 1 ? 'mt-3 text-2xl font-semibold text-primary sm:text-3xl' : 'mt-5 text-lg leading-relaxed text-muted'}
          >
            {line}
          </motion.h1>
        ))}

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          <Link
            href="/projects"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <Link href="/contact" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-white/50 dark:hover:bg-slate-900/60">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
