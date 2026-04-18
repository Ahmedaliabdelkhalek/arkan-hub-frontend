import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Target, Compass, Users, Calendar, Building2, MapPin } from 'lucide-react';
import { isLocale, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import PageHeader from '@/components/PageHeader';
import Values from '@/components/sections/Values';
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
    title: t.about.title,
    description: t.about.lead,
    alternates: {
      canonical: `${siteUrl}/${params.locale}/about`,
    },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.lead} />

      {/* About body + vision/mission */}
      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none space-y-5 text-ink-500">
              {t.about.body.map((p, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{t.about.visionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{t.about.vision}</p>
              </div>
              <div className="card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{t.about.missionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{t.about.mission}</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-ink-100 bg-ink-50 p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink-400">
                {t.common.industry}
              </h3>
              <p className="mt-2 font-display text-xl font-bold">{t.common.industryValue}</p>

              <div className="mt-6 h-px w-full bg-ink-200" />

              <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-ink-400">
                {t.common.based}
              </h3>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-xl font-bold">
                <MapPin className="h-5 w-5 text-brand" />
                {t.common.basedValue}
              </p>

              <div className="mt-6 h-px w-full bg-ink-200" />

              <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-ink-400">
                {t.about.segmentsTitle}
              </h3>
              <ul className="mt-3 grid grid-cols-1 gap-2">
                {t.about.segments.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-ink-500">
                    <Building2 className="h-4 w-4 text-brand" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Values locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
