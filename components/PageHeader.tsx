'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-800 text-white">
      <div className="absolute inset-0 grid-bg-dark opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="container-wide relative py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-display-lg text-white">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
