import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F26B1F',
          50: '#FFF4EC',
          100: '#FFE3CE',
          200: '#FFC79C',
          300: '#FFA566',
          400: '#FA8A3B',
          500: '#F26B1F',
          600: '#D45410',
          700: '#A53F0B',
          800: '#732A06',
          900: '#4A1A03',
        },
        ink: {
          DEFAULT: '#0E0E10',
          50: '#F7F7F8',
          100: '#EBEBEE',
          200: '#C9C9CF',
          300: '#8E8E96',
          400: '#54545C',
          500: '#2A2A30',
          600: '#1A1A1E',
          700: '#111114',
          800: '#0E0E10',
          900: '#07070A',
        },
        steel: {
          DEFAULT: '#3A3F45',
          light: '#5A6068',
          dark: '#22262B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Tahoma', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      backgroundImage: {
        'grid-light': "linear-gradient(to right, rgba(15,15,18,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,18,0.06) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'radial-brand': 'radial-gradient(circle at 30% 30%, rgba(242,107,31,0.35), transparent 60%)',
        'hero-glow': 'radial-gradient(1200px 600px at 50% 0%, rgba(242,107,31,0.25), transparent 70%)',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 15, 18, 0.18)',
        glow: '0 0 40px -8px rgba(242, 107, 31, 0.45)',
        'inner-ring': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'spark': 'spark 2.2s ease-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spark: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '0', transform: 'scale(0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
