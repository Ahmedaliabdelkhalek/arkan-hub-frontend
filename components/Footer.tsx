import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { contactInfo } from '@/lib/utils';
import Logo from './Logo';

type Props = { locale: Locale };

export default function Footer({ locale }: Props) {
  const t = getTranslations(locale);
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const productLinks = t.products.items.map((item) => ({
    href: `/${locale}/products#${item.key}`,
    label: item.title,
  }));

  return (
    <footer className="relative mt-20 overflow-hidden bg-ink-800 text-white">
      <div className="absolute inset-0 grid-bg-dark opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo locale={locale} variant="dark" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {t.common.industryValue}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {t.common.basedValue}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              {t.footer.exploreTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              {t.footer.productsTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{t.contact.address.value}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`tel:${contactInfo.phoneE164}`} className="hover:text-brand transition-colors" dir="ltr">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand transition-colors" dir="ltr">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{t.contact.hours.value}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {t.meta.siteName}. {t.footer.rights}
          </p>
          <p>{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
