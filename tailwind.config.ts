import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B5714A',
          light: '#CC9070',
          dark: '#8A5030',
        },
        dark: {
          DEFAULT: '#1C1C1C',
          100: '#242424',
          200: '#2E2E2E',
          300: '#3C3C3C',
          400: '#505050',
          500: '#787068',
        },
        'off-white': '#F0EBE5',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B5714A 0%, #CC9070 50%, #8A5030 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #B5714A 0%, #CC9070 50%, #8A5030 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce-y 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
