import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: 'hsl(var(--surface))',
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        primary: 'hsl(var(--primary))',
        border: 'hsl(var(--border))'
      },
      boxShadow: {
        glow: '0 12px 40px -20px rgba(14, 165, 233, 0.6)'
      }
    }
  },
  plugins: []
};

export default config;
