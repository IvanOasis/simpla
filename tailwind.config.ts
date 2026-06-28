import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Derived from Simpla logo gradient (#9E70CE → #5390FF)
        brand: '#7B5EFF',      // violet accent
        purple: '#9E70CE',     // purple accent (logo start color)
        snow: '#F7F8FC',       // subtle section backgrounds
        smoke: '#E4E7F0',      // card borders, dividers
        ash: '#8990AB',        // muted text
        slate: '#4A5270',      // secondary text
        ink: '#0F1523',        // headings, primary text
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.625rem',
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config
