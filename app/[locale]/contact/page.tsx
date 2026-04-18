import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { isLocale, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { contactInfo, siteUrl } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = getTranslations(params.locale);
  return {
    title: t.contact.title,
    description: t.contact.subtitle,
    alternates: {
      canonical: `${siteUrl}/${params.locale}/contact`,
    },
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactInfo.mapsQuery
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <section className="section bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {t.contact.address.label}
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-ink-800">
                      {t.contact.address.value}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {t.contact.phone.label}
                    </p>
                    <a
                      href={`tel:${contactInfo.phoneE164}`}
                      dir="ltr"
                      className="mt-1 block font-display text-base font-semibold text-ink-800 hover:text-brand transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {t.contact.email.label}
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      dir="ltr"
                      className="mt-1 block font-display text-base font-semibold text-ink-800 hover:text-brand transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {t.contact.hours.label}
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-ink-800">
                      {t.contact.hours.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100">
              <iframe
                title="ArkanHub One Location"
                src={mapsSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8 shadow-soft">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
