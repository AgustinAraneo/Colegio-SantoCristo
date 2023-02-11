/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				'Roboto-Regular': ['Roboto Regular'],
        'Roboto-Light': ['Roboto Light'],
        'Roboto-Light-Italic': ['Roboto Light Italic'],
      },
      backgroundImage: {
        'fondo': "url('/images/fondo2.jpg')",
      }
    },
  },
  plugins: [],
}
