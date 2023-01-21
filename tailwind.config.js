/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          50: () => 'var(--color-custom-50)',
          100: () => 'var(--color-custom-100)',
          200: () => 'var(--color-custom-200)',
          300: () => 'var(--color-custom-300)',
          400: () => 'var(--color-custom-400)',
          500: () => 'var(--color-custom-500)',
          600: () => 'var(--color-custom-600)',
          700: () => 'var(--color-custom-700)',
          800: () => 'var(--color-custom-800)',
          900: () => 'var(--color-custom-900)',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          background: colors.white,
          neutral: colors.white,
          'base-100': colors.zinc[50],
          'base-200': colors.zinc[100],
          'base-300': colors.zinc[200],
          'primary-content': colors.zinc[600],
          'secondary-content': colors.zinc[400],
        },
        dark: {
          background: colors.zinc[900],
          neutral: colors.zinc[900],
          'base-100': colors.zinc[800],
          'base-200': colors.zinc[700],
          'base-300': colors.zinc[600],
          'primary-content': colors.zinc[100],
          'secondary-content': colors.zinc[500],
        },
        black: {
          background: colors.black,
          neutral: colors.black,
          'base-100': colors.zinc[800],
          'base-200': colors.zinc[700],
          'base-300': colors.zinc[600],
          'primary-content': colors.zinc[100],
          'secondary-content': colors.zinc[500],
        },
      },
    ],
  },
};
