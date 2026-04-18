'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

export default function Hero({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden bg-ink-800 text-white">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-32 end-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 start-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

      {/* Animated spark dots */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -20, -40] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${60 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
              <Zap className="h-3.5 w-3.5" />
              {t.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-display-xl text-white"
          >
            {t.hero.title.split(' ').map((word, i, arr) => {
              // Highlight the accent words (middle third of title)
              const highlight =
                (locale === 'en' &&
                  (word.toLowerCase().includes('quality') ||
                    word.toLowerCase().includes('precision') ||
                    word.toLowerCase().includes('trust'))) ||
                (locale === 'ar' &&
                  (word.includes('الجودة') || word.includes('الدقة') || word.includes('الثقة')));
              return (
                <span
                  key={i}
                  className={highlight ? 'text-gradient-brand' : ''}
                >
                  {word}
                  {i < arr.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href={`/${locale}/products`} className="btn-primary">
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link href={`/${locale}/contact`} className="btn-dark">
              {t.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {t.hero.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-50/40" aria-hidden="true" />
    </section>
  );
}
