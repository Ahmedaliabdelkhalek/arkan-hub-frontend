import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ArkanHub One — Electromechanical Supplies & Solutions',
    short_name: 'ArkanHub One',
    description:
      'A trusted partner in comprehensive electromechanical supplies and solutions for projects across Egypt.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#0E0E10',
    theme_color: '#F26B1F',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
