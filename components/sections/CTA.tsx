'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { contactInfo } from '@/lib/utils';

type Props = { locale: Locale };

export default function CTA({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand p-10 sm:p-14 lg:p-20"
        >
          <div className="absolute inset-0 grid-bg-dark opacity-20" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-ink-800/30 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-display-md text-white">{t.cta.title}</h2>
              <p className="mt-4 text-white/85">{t.cta.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="btn bg-ink-800 text-white hover:bg-ink-700"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <a
                href={`tel:${contactInfo.phoneE164}`}
                className="btn bg-white text-ink-800 hover:bg-ink-50"
              >
                <Phone className="h-4 w-4" />
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
