import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://arkan-hub.com';

export const contactInfo = {
  address: {
    en: '11 AlReqabah AlEdarya Building, Nasr City, Cairo, Egypt',
    ar: '١١ مبنى الرقابة الإدارية، مدينة نصر، القاهرة، مصر',
  },
  addressRaw: '11 AlReqabah AlEdarya Building, Nasr City, Cairo, Egypt',
  phone: '01061120223',
  phoneE164: '+201061120223',
  email: 'info@arkan-hub.com',
  mapsQuery: '11 AlReqabah AlEdarya Building, Nasr City, Cairo, Egypt',
};
