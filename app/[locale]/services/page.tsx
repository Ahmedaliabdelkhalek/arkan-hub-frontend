import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/sections/Services';
import WhyPartner from '@/components/sections/WhyPartner';
import CTA from '@/components/sections/CTA';
import { siteUrl } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = getTranslations(params.locale);
  return {
    title: t.services.title,
    description: t.services.items.map((i) => i.title).join(' · '),
    alternates: {
      canonical: `${siteUrl}/${params.locale}/services`,
    },
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} />
      <Services locale={locale} />
      <WhyPartner locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
