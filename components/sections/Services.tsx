'use client';

import { motion } from 'motion/react';
import { Truck, PackageSearch, Route, Headset } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

const ICONS = [Truck, PackageSearch, Route, Headset];

export default function Services({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section id="services" className="section relative bg-ink-50">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-4 text-display-md">{t.services.title}</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card group"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
