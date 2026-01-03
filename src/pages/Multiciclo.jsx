import React from "react";
import Header from "../components/desktop/Header";
import Footer from "../components/desktop/Footer";
import "animate.css";
import MapJardinVisual from "../components/desktop/MapJardinVisual";

const Multiciclo = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <Header />
      </div>
      <div>
        <div className="shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-inicial bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="flex flex-col content-center pt-8">
        <h1 className="2xl:ml-[16rem] xl:mx-[10rem] mx-[4rem] text-5xl text-orange-500 font-Josefin font-bold pb-5">
          ¡Propuesta Sala Multiciclo!
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row pt-8 lg:mx-[4rem] lg:gap-4 xl:mx-[10rem] xl:gap-6 2xl:mx-[16rem] 2xl:gap-10">
          <div className="flex flex-col text-center lg:text-justify font-Roboto-Regular px-[4rem] lg:px-0 w-full lg:w-1/2">
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
          <div className="lg:w-1/2 w-full px-[4rem] lg:px-0">
            <img
              className="w-full mx-auto h-[30rem]  rounded-2xl shadow-custom"
              src="/images/inicial/2.jpg"
            />
          </div>
        </div>
      </div>
      <p
        className="ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
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

