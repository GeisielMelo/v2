/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        fira: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: '320px',
        ...defaultTheme.screens,
      },
      boxShadow: {
        'custom-black': 'rgba(2, 12, 27, 0.7) 1px 2px 10px',
      }
    },
  },
  plugins: [],
}
