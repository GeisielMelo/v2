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
    },
  },
  plugins: [],
}
