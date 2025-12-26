/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        dark: '#0f172a',                                           
    },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}

