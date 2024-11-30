import React from "react";
import Header from "../../components/mobile/Header";
import Footer from "../../components/mobile/Footer";
import "animate.css";
import GmailButton from "../../components/ButtonAdmision";
import MapJardinVisual from "../../components/mobile/MapJardinVisual";

const Inicial = () => {
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
          ¡Propuesta Nivel Inicial!
        </h1>
        <div className="flex flex-col content-center pt-4">
          <div className="flex flex-col font-Roboto-Regular w-[90%] text-sm text-justify mx-auto">
            <p className=" mb-[0.3rem]">
              El nivel inicial o jardín es el comienzo de una etapa educativa
              fundamental en el desarrollo de los niños. Durante estos primeros
              años, los estudiantes adquieren habilidades y conocimientos
              básicos que les permiten desarrollarse en el futuro.
            </p>
            <p className=" mb-[0.3rem]">
              En el jardín, los niños aprenden a través del juego y la
              exploración, lo que les permite adquirir habilidades sociales,
              emocionales y cognitivas. Además, en este nivel se les brinda una
              educación integral, en la que se desarrollan habilidades
              artísticas, motrices y lingüísticas, todo ello en un ambiente
              seguro y acogedor.
            </p>
            <p className=" mb-[0.3rem]">
              El nivel inicial es una etapa en la que los niños se divierten
              mientras aprenden, por lo que esta experiencia educativa resulta
              en una motivación positiva para el aprendizaje futuro. Además, los
              profesores están altamente capacitados para guiar y apoyar a los
              estudiantes en su proceso de aprendizaje.
            </p>
            <p className="">
              En resumen, el nivel inicial es una etapa clave en el desarrollo
              de los niños, en la que se les brinda una educación integral,
              segura y divertida que les permite adquirir habilidades y
              conocimientos básicos que les serán de gran utilidad en el futuro.
              En este nivel, los estudiantes se desarrollan de manera integral,
              mientras disfrutan del aprendizaje.
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
      <div>
        <p
          className="mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
          style={{ width: "70%" }}
        >
          Turnos:
        </p>
        <div className="flex flex-col justify-center gap-8 mb-[2rem]">
          <img
            src="/images/horarios-sala-3.png"
            className="w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto"
          ></img>
          <img
            src="/images/horarios-sala-4.png"
            className="w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto"
          ></img>
          <img
            src="/images/horarios-sala-5.png"
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
            Inscripción Jardin <br />
            Virgen Niña
            <br /> Nivel Inicial
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
          Nivel Inicial:
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

export default Inicial;

{
  /* <div className='flex flex-col font-Roboto-Regular'>
                <p className='mx-auto mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br/> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <p className=' mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br/> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br/>  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br/> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br/> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br/> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br/> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                </div> */
}
