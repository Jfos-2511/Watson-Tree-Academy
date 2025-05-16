/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bce3c0',
          300: '#92ce97',
          400: '#63b36a',
          500: '#3a9442',
          600: '#2d7c34',
          700: '#2d5c34',
          800: '#203c26',
          900: '#1b2d1f',
        },
        brown: {
          50: '#faf6f3',
          100: '#f4ece4',
          200: '#e7d5c4',
          300: '#d7b89c',
          400: '#c39470',
          500: '#b17a52',
          600: '#9d6542',
          700: '#8b5a2b',
          800: '#704a2b',
          900: '#5c3e29',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};