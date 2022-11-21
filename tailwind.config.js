/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'content': '272px 1fr'
      }
    },
  },
  plugins: [],
}
