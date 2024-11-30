import React from "react";
import Header from "../../components/mobile/Header";
import Footer from "../../components/mobile/Footer";
import "animate.css";
import GmailButton from "../../components/ButtonAdmisionPrimario";
import MapColegioVisual from "../../components/mobile/MapColegioVisual";

const Primaria = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <Header />
      </div>
      <div>
        <div className="shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-inicial bg-no-repeat bg-center"></div>
      </div>
      <div className="flex flex-col content-center pt-8">
        <h1 className="pb-5 text-5xl font-bold text-center text-fuchsia-600 font-Josefin">
          ¡Propuesta Nivel Primario!
        </h1>
        <div className="flex flex-col content-center pt-4">
          <div className="flex flex-col font-Roboto-Regular w-[90%] text-sm text-justify mx-auto">
            <p className="mb-[0.3rem]">
              El nivel primario es una etapa clave en la educación de los niños
              y niñas, ya que es en estos años donde se forman las bases para su
              futuro desarrollo intelectual y personal. Durante este periodo,
              los estudiantes adquieren habilidades importantes en áreas como la
              lectura, escritura y matemáticas, así como también aprenden sobre
              el mundo que les rodea a través de diferentes materias, como
              historia, geografía, ciencias y arte.
            </p>
            <p className="mb-[0.3rem]">
              Además, en el nivel primario se fomenta el desarrollo social y
              emocional de los niños y niñas, alentándolos a trabajar en equipo,
              resolver conflictos de manera pacífica y a desarrollar habilidades
              de liderazgo y autocontrol. Los estudiantes también aprenden a
              apreciar la diversidad y a respetar a sus compañeros y maestros.
            </p>
            <p className="mb-[0.3rem]">
              En este nivel, los profesores están altamente capacitados para
              enseñar de una manera lúdica y divertida, haciendo que el
              aprendizaje sea una experiencia enriquecedora y motivadora para
              los estudiantes. Además, utilizan diversas metodologías y
              materiales didácticos para adaptarse a las necesidades
              individuales de cada niño o niña.
            </p>
            <p className="">
              En resumen, el nivel primario es una etapa fundamental en la
              formación de los niños y niñas, ya que les proporciona las
              herramientas necesarias para continuar su educación y les enseña
              valores y habilidades que les serán útiles en su vida diaria. En
              nuestro colegio, nos <br />
              enorgullece ofrecer un ambiente seguro, acogedor y estimulante
              para que los estudiantes puedan crecer y desarrollarse de manera
              <br /> saludable.
            </p>
          </div>
          <div>
            <img
              className="h-full w-[90%] rounded-xl shadow-custom mx-auto pt-10"
              src="/images/primaria/3.jpeg"
            />
          </div>
        </div>
      </div>
      <div>
        <p
          className="mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
          style={{ width: "70%" }}
        >
          Turnos:
        </p>
        <div className="flex flex-col justify-center gap-8 mb-[2rem]">
          <img
            src="/images/tarjeta-primaria-izquierda.png"
            className="w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto"
          ></img>
          <img
            src="/images/tarjeta-horarios-primaria.png"
            className="w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto"
          ></img>
          <img
            src="/images/tarjeta-primaria-derecha.png"
            className="w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto"
          ></img>
        </div>
      </div>
      <p
        className="mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
        style={{ width: "70%" }}
      >
        Inscripción:
      </p>
      <div className="flex justify-center">
        <div
          className=" bg-green-600 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105"
          style={{ width: "70%" }}
        >
          <p className="pt-2 ml-4 text-2xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Primario
          </p>
          <div className="flex items-end justify-end h-[90px] mr-10">
            <GmailButton />
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
          Nivel Primario:
        </h1>
      </div>
      <div>
        <MapColegioVisual />
      </div>
      <div className="flex flex-col gap-8 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 font-Montserrat">
            Normativa:
          </h1>
        </div>
        <div className="flex justify-center">
          <a
            href="/pdfs/normativa-2025-primaria.pdf"
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

export default Primaria;
