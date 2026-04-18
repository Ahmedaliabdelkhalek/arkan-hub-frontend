'use client';

import { motion } from 'motion/react';
import { Rocket, BadgeDollarSign, Zap, HeartHandshake, UserCheck } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

const ICONS = [Rocket, BadgeDollarSign, Zap, HeartHandshake, UserCheck];

export default function WhyPartner({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section className="section relative overflow-hidden bg-ink-800 text-white">
      <div className="absolute inset-0 grid-bg-dark opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute top-0 right-1/3 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            <span className="inline-block h-px w-8 bg-brand-300" />
            {t.whyPartner.eyebrow}
          </span>
          <h2 className="mt-4 text-display-md text-white">{t.whyPartner.title}</h2>
          <p className="mt-4 text-white/70">{t.whyPartner.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.whyPartner.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-dark"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
