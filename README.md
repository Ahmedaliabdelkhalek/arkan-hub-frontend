# ArkanHub One — Corporate Website

<div align="center">

![ArkanHub One](https://img.shields.io/badge/ArkanHub%20One-Electromechanical%20Solutions-FF6B35?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

**Production-ready, bilingual (English / Arabic) corporate marketing website for ArkanHub One** — a trusted partner in electromechanical supplies and solutions based in Cairo, Egypt.

[Live Site](https://arkan-hub.com) · [Report Bug](https://github.com/Ahmedaliabdelkhalek/arkan-hub-frontend/issues) · [Request Feature](https://github.com/Ahmedaliabdelkhalek/arkan-hub-frontend/issues)

</div>

---

## ✨ Highlights

| Feature | Details |
|---|---|
| 🌍 **Bilingual** | English (LTR) + Arabic (RTL) — locale in URL (`/en/...`, `/ar/...`). Fonts auto-swap: Sora + Inter for Latin, Cairo for Arabic |
| 🔍 **SEO-first** | Locale-aware canonicals + `hreflang` alternates, OpenGraph, Twitter cards, JSON-LD (`Organization` + `WebSite`), dynamic `sitemap.xml`, `robots.txt` |
| ⚡ **Performant** | Static rendering, image optimization (AVIF + WebP), compressed responses, no `X-Powered-By` header |
| ♿ **Accessible** | Skip-to-content link, focus rings, `aria-*` labels, scroll-triggered animations that respect `prefers-reduced-motion` |
| 🎨 **Design** | Dark hero with animated sparks, brand orange accents, subtle grid textures, card lift hovers, marquee trust bar |
| 🔒 **Secure** | Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) |
| 🚀 **Shippable** | `vercel.json`, `robots.ts`, `sitemap.ts`, `manifest.ts`, and Vercel Analytics + Speed Insights pre-wired |

---

## 🛠️ Tech Stack

| Purpose | Choice |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Language | **TypeScript** (strict mode) |
| Styling | **Tailwind CSS 3.4** + custom theme tokens |
| Animation | **Framer Motion** (via `motion` package) |
| Icons | **Lucide React** |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Fonts | `next/font` — Inter, Sora (Latin), Cairo (Arabic) |
| Hosting | **Vercel** |
| Node | `>=18.17.0` |

---

## 📁 Project Structure

```
website/
├── app/
│   ├── [locale]/                  ← Locale-scoped routes
│   │   ├── about/page.tsx         ← About page
│   │   ├── contact/page.tsx       ← Contact page
│   │   ├── products/page.tsx      ← Products catalogue
│   │   ├── services/page.tsx      ← Services page
│   │   ├── layout.tsx             ← Locale layout (fonts, RTL dir, SEO metadata)
│   │   └── page.tsx               ← Home page (composes all sections)
│   ├── globals.css                ← Tailwind base + custom theme tokens
│   ├── layout.tsx                 ← Root layout (metadata base URL)
│   ├── manifest.ts                ← PWA web app manifest
│   ├── not-found.tsx              ← Custom 404 page
│   ├── page.tsx                   ← '/' → redirects to '/en'
│   ├── robots.ts                  ← robots.txt generation
│   └── sitemap.ts                 ← Locale-aware sitemap generation
├── components/
│   ├── ContactForm.tsx            ← Accessible contact form
│   ├── Footer.tsx                 ← Site footer with links + social
│   ├── LanguageSwitcher.tsx       ← EN/AR toggle
│   ├── Logo.tsx                   ← Inline SVG logo component
│   ├── Navbar.tsx                 ← Responsive navigation bar
│   ├── PageHeader.tsx             ← Inner-page header banner
│   └── sections/                  ← Homepage & inner-page sections
│       ├── CTA.tsx                ← Call-to-action section
│       ├── ContactPreview.tsx     ← Contact info preview block
│       ├── Hero.tsx               ← Animated hero section
│       ├── ProductCategories.tsx  ← Product grid/categories
│       ├── Services.tsx           ← Services overview
│       ├── TrustBar.tsx           ← Scrolling marquee trust bar
│       ├── Values.tsx             ← Company values section
│       └── WhyPartner.tsx        ← Partnership benefits section
├── i18n/
│   ├── config.ts                  ← Locales, direction ('ltr'|'rtl'), labels
│   └── translations.ts            ← All EN + AR copy in one place
├── lib/
│   └── utils.ts                   ← cn(), siteUrl, contactInfo helpers
├── public/
│   ├── favicon.svg
│   ├── logo-mark.svg
│   └── logo.svg
├── .env.example                   ← Environment variable template
├── .eslintrc.json
├── .gitignore
├── next.config.js                 ← Next.js config (redirects, headers, images)
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json                    ← Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=18.17.0`
- **npm** (or `pnpm` / `yarn`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ahmedaliabdelkhalek/arkan-hub-frontend.git
cd arkan-hub-frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values (see Environment Variables section below)

# 4. Start the development server
npm run dev
# → Open http://localhost:3000 (auto-redirects to /en)
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run type-check` | Run TypeScript strict type checking |

---

## 🌐 Pages & Routes

| Route | Page |
|---|---|
| `/` | Redirects to `/en` |
| `/en` | Home (English) |
| `/ar` | Home (Arabic / RTL) |
| `/en/about` | About ArkanHub One |
| `/en/products` | Product Categories |
| `/en/services` | Services Overview |
| `/en/contact` | Contact Form + Info |
| `/ar/about` | About (Arabic) |
| `/ar/products` | Products (Arabic) |
| `/ar/services` | Services (Arabic) |
| `/ar/contact` | Contact (Arabic) |

---

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```env
# Public base URL — used for sitemap, canonical URLs, and OpenGraph tags
NEXT_PUBLIC_SITE_URL=https://arkan-hub.com

# Contact information
NEXT_PUBLIC_CONTACT_EMAIL=info@arkan-hub.com
NEXT_PUBLIC_CONTACT_PHONE=+201061120223
```

> **Note:** All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never store secrets in these variables.

---

## ☁️ Deploying to Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ahmedaliabdelkhalek/arkan-hub-frontend)

### Manual Deployment

1. Push to GitHub (this repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
3. Vercel auto-detects Next.js. Add the following **Environment Variables** in the Vercel dashboard:

   | Variable | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://arkan-hub.com` |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | `info@arkan-hub.com` |
   | `NEXT_PUBLIC_CONTACT_PHONE` | `+201061120223` |

4. Click **Deploy**.
5. Under **Project → Settings → Analytics**, enable **Web Analytics** and **Speed Insights** (the code is already integrated).
6. Under **Domains**, add your production domain and follow the DNS instructions.

### Post-Deployment SEO

- Submit `https://your-domain/sitemap.xml` to **Google Search Console** and **Bing Webmaster Tools**.
- Verify both `/en/` and `/ar/` variants are correctly indexed by search engines.

---

## 🌍 Internationalisation (i18n)

All content is managed in a single file: **`i18n/translations.ts`**

The file exports a typed `translations` object keyed by locale (`en` | `ar`). Every piece of copy — Navbar labels, Hero headline, Products, Services, Why Partner, CTA, Contact, About, Footer links, and meta tags — lives here.

**To add new text:**
1. Open `i18n/translations.ts`
2. Add your key under both the `en` and `ar` sections
3. Use it in any component via `const t = translations[locale]`

**Supported locales:**

| Code | Language | Direction |
|---|---|---|
| `en` | English | LTR |
| `ar` | Arabic (العربية) | RTL |

---

## 🎨 Customisation

### Logo
Drop your final SVG files into `public/`:
- `public/logo.svg` — full horizontal logo
- `public/logo-mark.svg` — icon/monogram only

The `Logo.tsx` component renders the mark as inline SVG for crisp scaling.

### Colour Palette
Brand tokens are defined in `tailwind.config.ts`. The primary accent is **brand orange** (`#FF6B35`) against a near-black dark background.

### Fonts
Configured in `app/[locale]/layout.tsx` using `next/font/google`:
- **Latin pages:** Inter (body) + Sora (headings)
- **Arabic pages:** Cairo (all text)

---

## 📞 Contact

| Channel | Details |
|---|---|
| 📍 Address | 11 AlReqabah AlEdarya Building, Nasr City, Cairo, Egypt |
| 📞 Phone | [01061120223](tel:+201061120223) |
| 📧 Email | [info@arkan-hub.com](mailto:info@arkan-hub.com) |

---

## 📄 License

This project is proprietary software owned by **ArkanHub One**. All rights reserved.

---

<div align="center">
Built with precision for <strong>ArkanHub One</strong> ⚡
</div>
