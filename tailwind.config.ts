import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1200px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        meliBgPrimary: 'var(--meli-bg-primary)',
        meliBgDefault: 'var(--meli-bg-default)',
        meliBgDarkGrey: 'var(--meli-bg-darkGrey)',
        meliGreen: 'var(--meli-font-green)',
        meliBlue: 'var(--meli-font-blue)',
      },
    },
  },
  plugins: [],
} satisfies Config
