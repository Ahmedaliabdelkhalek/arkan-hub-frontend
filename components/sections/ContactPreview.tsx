'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { contactInfo } from '@/lib/utils';

type Props = { locale: Locale };

export default function ContactPreview({ locale }: Props) {
  const t = getTranslations(locale);

  const items = [
    { icon: MapPin, label: t.contact.address.label, value: t.contact.address.value },
    {
      icon: Phone,
      label: t.contact.phone.label,
      value: contactInfo.phone,
      href: `tel:${contactInfo.phoneE164}`,
      ltr: true,
    },
    {
      icon: Mail,
      label: t.contact.email.label,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      ltr: true,
    },
    { icon: Clock, label: t.contact.hours.label, value: t.contact.hours.value },
  ] as const;

  return (
    <section id="contact-preview" className="section bg-white">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2 className="mt-4 text-display-md">{t.contact.title}</h2>
            <p className="mt-4 text-ink-400">{t.contact.subtitle}</p>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary mt-8"
            >
              {t.common.getInTouch}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {item.label}
                  </p>
                  {'href' in item && item.href ? (
                    <a
                      href={item.href}
                      dir={'ltr' in item && item.ltr ? 'ltr' : undefined}
                      className="mt-1 block font-display text-base font-semibold text-ink-800 hover:text-brand transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-display text-base font-semibold text-ink-800">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
