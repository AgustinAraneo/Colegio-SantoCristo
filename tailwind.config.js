/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Roboto-Regular": ["Roboto Regular"],
        "Roboto-Light": ["Roboto Light"],
        "Roboto-Light-Italic": ["Roboto Light Italic"],
        Oswald: ["Oswald"],
        Josefin: ["Josefin"],
        Abel: ["Abel"],
        Montserrat: ["Montserrat"],
      },
      backgroundImage: {
        fondo: "url('/images/fondo.png')",
        "fondo-puntitos": "url('/images/fondo-2.png')",
        "fondo-piebald": "url('/images/fondo-3.jpg')",
        "fondo-dibujitos": "url('/images/fondo-4.png')",
        "fondo-equipo": "url('/images/fondo-profes.png')",
        "banner-inicial": "url('/images/banner-inicial.png')",
        "banner-inicial-mobile": "url('/images/inicial/3.jpg')",
        "banner-ingles": "url('/images/Ingles/banner-ingles.png')",
        "banner-primario": "url('/images/banner-primaria.png')",
        "banner-secundario": "url('/images/Banner-secundario.jpg')",
        "banner-secundario-mobile": "url('/images/foto-secundario.jpg')",
        "banner-verde": "url('/images/Ingles/fondo-verde-og.png')",
        "banner-verde-rotado": "url('/images/Ingles/fondo-verde.png')",
        "banner-rect-1": "url('/images/Ingles/rect-1.png')",
        "banner-rect-2": "url('/images/Ingles/rect-2.png')",
        "banner-rect-3": "url('/images/Ingles/rect-1.png')",
        "banner-past-1": "url('/images/Pastoral/stock-2.jpeg')",
        "banner-past-2": "url('/images/Pastoral/stock-1.jpeg')",
        prueba: "url('/images/prueba.jpg')",
      },
      boxShadow: {
        custom: "0 40px 30px -25px rgb(0 0 0 / 0.3)",
        custom2: "0 30px 25px -25px rgb(0 0 0 / 0.3)",
        custom3: "0 50px 50px -20px rgb(0 0 0 / 0.4)",
        "neon-orange":
          "0 0 0 0.1rem #FBD38D, 0 0.35rem 3rem 1.2rem rgba(255, 140, 0, 0.3)",
        "redcoach-lg": "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
        "redcoach-sm": "0px 3px 15px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
