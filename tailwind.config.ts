import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/**/*.{js,jsx,mdx,ts,tsx}',
    './emails/**/*.{js,jsx,mdx,ts,tsx}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: [
          ['Inter', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        'primary': {
          '50': '#f9ffe4',
          '100': '#f0ffc4',
          '200': '#e0ff90',
          '300': '#c8ff50',
          '400': '#baff39',
          '500': '#90e600',
          '600': '#6fb800',
          '700': '#538b00',
          '800': '#436d07',
          '900': '#395c0b',
          '950': '#1c3400',
          DEFAULT: '#baff39',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
