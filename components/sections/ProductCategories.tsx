'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Cable,
  ToggleRight,
  Wrench,
  Lightbulb,
  Fan,
  Flame,
  ArrowUpRight,
} from 'lucide-react';

import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

const ICONS: Record<string, typeof Cable> = {
  cables: Cable,
  switches: ToggleRight,
  accessories: Wrench,
  general: Lightbulb,
  hvac: Fan,
  fire: Flame,
};

export default function ProductCategories({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <section id="products" className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2 className="mt-4 text-display-md">{t.products.title}</h2>
            <p className="mt-4 text-ink-400">{t.products.subtitle}</p>
          </div>
          <Link href={`/${locale}/products`} className="link-underline text-sm font-semibold">
            {t.products.exploreAll}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((item, i) => {
            const Icon = ICONS[item.key] ?? Cable;
            return (
              <motion.article
                key={item.key}
                id={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group card"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-radial-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink-800 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.body}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-ink-500">
                    {item.list.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
