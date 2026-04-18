import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { cn } from '@/lib/utils';

type Props = {
  locale: Locale;
  variant?: 'light' | 'dark';
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ locale, className }: Props) {
  const t = getTranslations(locale);

  return (
    <Link
      href={`/${locale}`}
      aria-label={t.meta.siteName}
      className={cn('group inline-flex items-center', className)}
    >
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="ArkanHub One Logo"
          width={300}
          height={100}
          className="w-32 sm:w-48 lg:w-56 h-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
