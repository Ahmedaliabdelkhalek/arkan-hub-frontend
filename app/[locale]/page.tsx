import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Values from '@/components/sections/Values';
import ProductCategories from '@/components/sections/ProductCategories';
import Services from '@/components/sections/Services';
import WhyPartner from '@/components/sections/WhyPartner';
import CTA from '@/components/sections/CTA';
import ContactPreview from '@/components/sections/ContactPreview';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <Hero locale={locale} />
      <TrustBar locale={locale} />
      <Values locale={locale} />
      <ProductCategories locale={locale} />
      <Services locale={locale} />
      <WhyPartner locale={locale} />
      <CTA locale={locale} />
      <ContactPreview locale={locale} />
    </>
  );
}
