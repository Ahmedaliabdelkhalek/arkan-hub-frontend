'use client';

import { motion } from 'motion/react';
import { Shield, Award, Handshake, Clock, Sparkles } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

const ICONS = [Shield, Award, Handshake, Clock, Sparkles];

export default function Values({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section className="section relative">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t.values.eyebrow}</span>
          <h2 className="mt-4 text-display-md">{t.values.title}</h2>
          <p className="mt-4 text-ink-400">{t.values.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.values.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
