/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('/images/fondo.jpg')",
      }
    },
  },
  plugins: [],
}
