import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
  variant?: 'light' | 'dark';
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ locale, variant = 'light', className, showWordmark = true }: Props) {
  const t = getTranslations(locale);
  const isDark = variant === 'dark';

  return (
    <Link
      href={`/${locale}`}
      aria-label={t.meta.siteName}
      className={cn('group inline-flex items-center gap-2', className)}
    >
      <span
        className={cn(
          'relative grid h-10 w-10 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105',
          isDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-ink-800'
        )}
      >
        <svg
          viewBox="0 0 200 200"
          className="h-7 w-7 text-brand"
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(120,60)">
            <circle cx="0" cy="0" r="34" fill="none" stroke="currentColor" strokeWidth="10" />
            <circle cx="0" cy="0" r="12" />
            <rect x="-5" y="-48" width="10" height="12" rx="2" />
            <rect x="-5" y="36" width="10" height="12" rx="2" />
            <rect x="36" y="-5" width="12" height="10" rx="2" />
            <rect x="-48" y="-5" width="12" height="10" rx="2" />
            <rect x="24" y="-38" width="10" height="12" rx="2" transform="rotate(45 29 -32)" />
            <rect x="24" y="26" width="10" height="12" rx="2" transform="rotate(-45 29 32)" />
            <rect x="-34" y="-38" width="10" height="12" rx="2" transform="rotate(-45 -29 -32)" />
            <rect x="-34" y="26" width="10" height="12" rx="2" transform="rotate(45 -29 32)" />
          </g>
          <path d="M30 40 L70 40 L58 95 L90 95 L70 160 L50 160 L62 115 L38 115 Z" />
          <rect x="90" y="40" width="16" height="120" />
          <rect x="58" y="92" width="50" height="14" />
        </svg>
      </span>
      {showWordmark && (
        <span className={cn('flex flex-col leading-none', locale === 'ar' && 'font-arabic')}>
          <span
            className={cn(
              'font-display text-lg font-extrabold tracking-tight',
              isDark ? 'text-white' : 'text-ink-800'
            )}
          >
            {locale === 'ar' ? 'أركان هب' : 'ArkanHub'}
            <span className="ml-1 rounded-md bg-brand px-1.5 py-0.5 text-xs text-ink-800 align-middle">
              {locale === 'ar' ? 'ون' : 'One'}
            </span>
          </span>
        </span>
      )}
    </Link>
  );
}
