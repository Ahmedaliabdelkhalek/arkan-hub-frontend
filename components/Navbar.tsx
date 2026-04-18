'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

type Props = { locale: Locale };

export default function Navbar({ locale }: Props) {
  const t = getTranslations(locale);
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === href;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-ink-100 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo locale={locale} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive(l.href)
                      ? 'text-ink-800'
                      : 'text-ink-400 hover:text-ink-800'
                  )}
                >
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-ink-800/[0.06]"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <Link
            href={`/${locale}/contact`}
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5"
          >
            {t.nav.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-ink-100 bg-white/95 backdrop-blur"
          >
            <div className="container-wide py-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium',
                        isActive(l.href)
                          ? 'bg-ink-800/[0.06] text-ink-800'
                          : 'text-ink-500 hover:bg-ink-800/[0.04]'
                      )}
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary mt-3 w-full"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
