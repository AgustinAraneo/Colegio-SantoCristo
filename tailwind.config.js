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
        'Montserrat': ['Montserrat']
      },
      backgroundImage: {
        'fondo': "url('/images/fondo.png')",
        'fondo-puntitos': "url('/images/fondo-2.png')",
        'fondo-piebald': "url('/images/fondo-3.jpg')",
        'fondo-dibujitos': "url('/images/fondo-4.png')",
        'fondo-equipo': "url('/images/fondo-profes.png')",
        'banner-inicial': "url('/images/banner-inicial.png')",
        'banner-inicial-mobile': "url('/images/inicial/3.jpg')",
        'banner-primario': "url('/images/banner-primario.jpg')",
        'banner-secundario': "url('/images/banner-secundario.jpg')",
        'banner-secundario-mobile': "url('/images/secundaria/2.jpeg')",
        'prueba': "url('/images/prueba.jpg')",
      },
      boxShadow: {
        "custom": '0 40px 30px -25px rgb(0 0 0 / 0.3)',
        "custom2": '0 30px 25px -25px rgb(0 0 0 / 0.3)',
        "custom3": '0 50px 50px -20px rgb(0 0 0 / 0.4)',
        'neon-orange': '0 0 0 0.1rem #FBD38D, 0 0.35rem 3rem 1.2rem rgba(255, 140, 0, 0.3)'
      },
    },
  },
  plugins: [],
}
