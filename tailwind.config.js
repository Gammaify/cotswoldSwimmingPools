/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          925: '#2f336c',
          250: '#46baeb'
        }
      },
      keyframes: {
        fading: {
          '0%': {
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': {
            opacity: '1',
            visibility: 'visible'
          }
        }
      },
      animation: {
        fading: 'fading 1s forwards',
      }
    },
  },
  plugins: [addDynamicIconSelectors(), require('tailwindcss-animated')],
}

