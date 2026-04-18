'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeShort, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

type Props = {
  current: Locale;
  variant?: 'light' | 'dark';
};

export default function LanguageSwitcher({ current, variant = 'light' }: Props) {
  const pathname = usePathname() || '/';
  // Replace the locale segment at the start of the path.
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.slice(1).join('/');

  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full p-1 text-xs font-semibold',
        isDark ? 'border border-white/10 bg-white/5' : 'border border-ink-200 bg-white'
      )}
      role="group"
      aria-label="Language"
    >
      <Globe className={cn('h-3.5 w-3.5 ms-2', isDark ? 'text-white/60' : 'text-ink-400')} />
      {locales.map((l) => {
        const href = `/${l}${rest ? `/${rest}` : ''}`;
        const active = l === current;
        return (
          <Link
            key={l}
            href={href}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded-full px-3 py-1.5 transition-colors',
              active
                ? 'bg-brand text-white shadow'
                : isDark
                  ? 'text-white/70 hover:text-white'
                  : 'text-ink-500 hover:text-ink-800'
            )}
          >
            {localeShort[l]}
          </Link>
        );
      })}
    </div>
  );
}
