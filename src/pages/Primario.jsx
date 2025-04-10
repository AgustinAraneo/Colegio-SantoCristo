import React from "react";
import Header from "../components/desktop/Header";
import Footer from "../components/desktop/Footer";
import GmailButton from "../components/ButtonAdmisionPrimario";
import MapColegioVisual from "../components/desktop/MapColegioVisual";

const Primario = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <Header />
      </div>
      <div>
        <div className="shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-primario bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="flex flex-col content-center pt-8 ">
        <h1 className="2xl:ml-[16rem] xl:mx-[10rem] mx-[4rem] text-5xl text-fuchsia-600 font-Josefin font-bold pb-5">
          ¡Propuesta Nivel Primario!
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row pt-8 lg:mx-[4rem] lg:gap-4 xl:mx-[10rem] xl:gap-6 2xl:mx-[16rem] 2xl:gap-10">
          <div className="flex flex-col text-center lg:text-justify font-Roboto-Regular px-[4rem] lg:px-0 w-full lg:w-1/2">
            <p className=" mb-[0.3rem]">
              El nivel primario es una etapa clave en la educación de los niños
              y niñas, ya que es en estos años donde se forman las bases para su
              futuro desarrollo intelectual y personal. Durante este periodo,
              los estudiantes adquieren habilidades importantes en áreas como la
              lectura, escritura y matemáticas, así como también aprenden sobre
              el mundo que les rodea a través de diferentes materias, como
              historia, geografía, ciencias y arte.
            </p>
            <p className=" mb-[0.3rem]">
              Además, en el nivel primario se fomenta el desarrollo social y
              emocional de los niños y niñas, alentándolos a trabajar en equipo,
              resolver conflictos de manera pacífica y a desarrollar habilidades
              de liderazgo y autocontrol. Los estudiantes también aprenden a
              apreciar la diversidad y a respetar a sus compañeros y maestros.
            </p>
            <p className=" mb-[0.3rem]">
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
          <div className="lg:w-1/2 w-full px-[4rem] lg:px-0">
            <img
              className="w-full mx-auto h-[30rem]  rounded-2xl shadow-custom"
              src="/images/primaria/3.jpeg"
            />
          </div>
        </div>
      </div>
      <div>
        <p
          className="ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
          style={{ width: "70%" }}
        >
          Turnos:
        </p>
        <div className="flex flex-auto justify-center gap-8 mb-[2rem]">
          <img
            src="images/tarjeta-primaria-izquierda.png"
            className="w-[20%] h-[20%] transition duration-500 hover:scale-105"
          ></img>
          <img
            src="images/tarjeta-horarios-primaria.png"
            className="w-[20%] h-[20%] transition duration-500 hover:scale-105"
          ></img>
          <img
            src="images/tarjeta-primaria-derecha.png"
            className="w-[20%] h-[20%] transition duration-500 hover:scale-105"
          ></img>
        </div>
      </div>
      <p
        className="ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800"
        style={{ width: "70%" }}
      >
        Inscripción:
      </p>
      <div className="flex justify-center">
        <div
          className=" bg-[#42ab49] h-[15rem] mb-[1rem] transition duration-500 hover:scale-105"
          style={{ width: "33%" }}
        >
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Primario
          </p>
          <div className="flex items-end justify-end h-[90px] mr-10">
            <GmailButton />
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
          Nivel Primario y Secundario:
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

export default Primario;

{
  /* <div className='flex flex-col font-Roboto-Regular'>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br/> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br/> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br/>  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br/> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br/> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br/> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br/> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                </div> */
}
