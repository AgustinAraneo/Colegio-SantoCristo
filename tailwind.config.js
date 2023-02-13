/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				'Roboto-Regular': ['Roboto Regular'],
        'Roboto-Light': ['Roboto Light'],
        'Roboto-Light-Italic': ['Roboto Light Italic'],
        'Oswald': ['Oswald'],
        'Josefin': ['Josefin'],
        'Abel': ['Abel'],
      },
      backgroundImage: {
        'fondo': "url('/images/fondo2.jpg')",
        'banner-inicial': "url('/images/banner-inicial.jpg')",
        'banner-primario': "url('/images/banner-primario.jpg')",
      },
      boxShadow: {
        "custom": '0 40px 30px -25px rgb(0 0 0 / 0.3)',
        "custom2": '0 30px 25px -25px rgb(0 0 0 / 0.3)',
        "custom3": '0 50px 50px -20px rgb(0 0 0 / 0.4)'
      }
    },
  },
  plugins: [],
}
