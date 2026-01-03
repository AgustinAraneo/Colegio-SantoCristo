import React from "react";
import Header from "../../components/mobile/Header";
import Footer from "../../components/mobile/Footer";
import "animate.css";
import MapJardinVisual from "../../components/mobile/MapJardinVisual";

const Multiciclo = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <Header />
      </div>
      <div>
        <div className="shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-inicial-mobile bg-center bg-cover"></div>
      </div>
      <div className="flex flex-col content-center pt-8">
        <h1 className="pb-5 text-5xl font-bold text-center text-orange-500 font-Josefin">
          ¡Propuesta Sala Multiciclo!
        </h1>
        <div className="flex flex-col content-center pt-4">
          <div className="flex flex-col font-Roboto-Regular w-[90%] text-sm text-justify mx-auto">
            <p className=" mb-[0.3rem]">
              La Sala Multiciclo es un espacio educativo previo al jardín maternal,
              diseñado especialmente para niños de 2 y 3 años que comparten un mismo
              ambiente de aprendizaje. Este nuevo espacio representa el paso previo al
              jardín y funciona en conjunto con el Jardín Virgen Niña.
            </p>
            <p className=" mb-[0.3rem]">
              En la Sala Multiciclo, los niños aprenden a través del juego y la
              exploración, desarrollando habilidades sociales, emocionales y cognitivas
              fundamentales. Este espacio está pensado para responder a las necesidades
              de las familias que, por cuestiones laborales, requieren dejar a sus niños
              en la escuela antes de los 3 años.
            </p>
            <p className=" mb-[0.3rem]">
              Durante esta etapa, los niños se divierten mientras aprenden, adquiriendo
              habilidades básicas que les permitirán desarrollarse de manera integral.
              Los profesores están altamente capacitados para guiar y apoyar a los
              estudiantes en su proceso de aprendizaje, adaptándose a las necesidades
              individuales de cada niño.
            </p>
            <p className="">
              La Sala Multiciclo es una prueba piloto para el año 2026, que busca
              brindar una educación integral, segura y acogedora a los más pequeños,
              preparándolos para su futuro ingreso al jardín. En este espacio, los
              estudiantes se desarrollan de manera integral mientras disfrutan del
              aprendizaje en un ambiente especialmente diseñado para ellos.
            </p>
          </div>
          <div>
            <img
              className="h-full w-[90%] rounded-xl shadow-custom mx-auto pt-10"
              src="/images/inicial/2.jpg"
            />
          </div>
        </div>
      </div>
      <p
        className="mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
        style={{ width: "70%" }}
      >
        Encontranos:
      </p>
      <div className="pt-6 -mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 font-Montserrat">
          Sala Multiciclo:
        </h1>
      </div>
      <div>
        <MapJardinVisual />
      </div>
      <div className="flex flex-col gap-8 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 font-Montserrat">
            Normativa:
          </h1>
        </div>
        <div className="flex justify-center">
          <a
            href="/pdfs/normativa-2025-inicial.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg rounded-lg shadow-md active:scale-95 transition-transform duration-150"
          >
            Descargar normativa 2025
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Multiciclo;

