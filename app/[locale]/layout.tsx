import type { Metadata } from 'next';
import { Inter, Sora, Cairo } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { isLocale, locales, localeDir, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { contactInfo, siteUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = getTranslations(params.locale);
  const title = `${t.meta.siteName} — ${t.meta.tagline}`;
  const alternatesLanguages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}`])
  );

  return {
    title: {
      default: title,
      template: `%s · ${t.meta.siteName}`,
    },
    description: t.meta.description,
    keywords: [...t.meta.keywords],
    alternates: {
      canonical: `${siteUrl}/${params.locale}`,
      languages: alternatesLanguages,
    },
    openGraph: {
      type: 'website',
      locale: params.locale === 'ar' ? 'ar_EG' : 'en_US',
      url: `${siteUrl}/${params.locale}`,
      siteName: t.meta.siteName,
      title,
      description: t.meta.description,
      images: [
        {
          url: '/logo.svg',
          width: 1200,
          height: 630,
          alt: t.meta.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t.meta.description,
      images: ['/logo.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    category: 'business',
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dir = localeDir[locale];
  const t = getTranslations(locale);

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t.meta.siteName,
    alternateName: 'Arkan Hub One',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: t.meta.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 AlReqabah AlEdarya Building',
      addressLocality: 'Nasr City',
      addressRegion: 'Cairo',
      addressCountry: 'EG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.phoneE164,
      contactType: 'customer service',
      email: contactInfo.email,
      availableLanguage: ['en', 'ar'],
    },
    sameAs: [],
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t.meta.siteName,
    url: siteUrl,
    inLanguage: locale === 'ar' ? 'ar-EG' : 'en-US',
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(inter.variable, sora.variable, cairo.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          {t.nav.skip}
        </a>
        <Navbar locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script
          id="ld-site"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
