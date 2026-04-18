export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  ar: 'AR',
};

export const localeDir: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
