/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue-start': '#08274D',
        'custom-blue-end': '#07264C',
      },
    },
  },
  plugins: [],
}