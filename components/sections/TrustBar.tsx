'use client';

import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

type Props = { locale: Locale };

export default function TrustBar({ locale }: Props) {
  const t = getTranslations(locale);
  const items = [...t.trustBar.items, ...t.trustBar.items]; // duplicate for seamless loop

  return (
    <section className="border-y border-ink-100 bg-white py-8">
      <div className="container-wide flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-ink-400">
          {t.trustBar.label}
        </p>
        <div className="relative w-full overflow-hidden mask-fade-right">
          <div
            className="flex min-w-max gap-10 animate-marquee rtl:animate-marquee-rtl"
            style={{ animationDuration: '35s' }}
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-medium text-ink-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
