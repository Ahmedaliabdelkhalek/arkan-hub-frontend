import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { siteUrl } from '@/lib/utils';

const pages = ['', '/about', '/products', '/services', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: now,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
