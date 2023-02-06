/** @type {import('tailwindcss').Config} */
const {typography, spacing} = require('./theme');

module.exports = {
  content: [],
  theme: {
    extend: {
      spacing,
      fontSize: typography,
      width: {
        1: '1px'
      },
      colors: {
        primary: {
          DEFAULT: '#fddb00',
          100: '#fddb0014',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
