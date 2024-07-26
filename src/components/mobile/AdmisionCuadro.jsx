import React, { useState } from "react";
import AdmisionModal from "./AdmisionModal";

const AdmisionCuadro = () => {
  const [isJardin, setIsJardin] = useState(false);
  const [isPrimaria, setIsPrimaria] = useState(false);
  const [isSecundaria, setIsSecundaria] = useState(false);

  const handleModalOpenJardin = () => {
    setIsJardin(true);
  };

  const handleModalOpenPrimaria = () => {
    setIsPrimaria(true);
  };

  const handleModalOpenSecundaria = () => {
    setIsSecundaria(true);
  };

  const handleModalCloseJardin = () => {
    setIsJardin(false);
  };

  const handleModalClosePrimaria = () => {
    setIsPrimaria(false);
  };

  const handleModalCloseSecundaria = () => {
    setIsSecundaria(false);
  };

  return (
    <div className="flex justify-center flex-auto gap-6 flex-col w-[90%] mx-auto">
      <div>
        <img
          className="w-[25rem] h-full transition duration-500 hover:scale-105"
          src="/images/inicial/1.jpg"
          alt=""
        />
        <div className="bg-green-600 h-[15rem] mt-[1rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Jardin <br />
            Virgen Niña
            <br /> Nivel Inicial
          </p>
          <div className="flex items-end justify-end h-[55px] mr-10 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
              onClick={handleModalOpenJardin}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[25rem] h-full mb-[1rem] transition duration-500 hover:scale-105"
          src="/images/5.jpeg"
          alt=""
        />
        <div className="bg-green-700 h-[15rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Primario
          </p>
          <div className="flex items-end justify-end h-[50px] mr-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
              onClick={handleModalOpenPrimaria}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[25rem] h-full transition duration-500 hover:scale-105"
          src="/images/secundaria/3.jpeg"
          alt=""
        />
        <div className="bg-green-800 h-[15rem] mt-[1rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Secundario
          </p>
          <div className="flex items-end justify-end h-[50px] mr-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
              onClick={handleModalOpenSecundaria}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
      </div>
      <AdmisionModal
        isOpen={isJardin}
        onClose={handleModalCloseJardin}
        buttonName={[
          "NUEVOS POSTULANTES JARDIN",
          "REINSCRIPCIÓN SEGUNDA SECCION 2025",
          "REINSCRIPCION TERCERA SECCION 2025",
        ]}
        buttonLinks={[
          "https://forms.gle/iP1Y8PHHw4QNRUBB9",
          "https://forms.gle/PybaCCcX1CpatUyk8",
          "https://forms.gle/YHHjRrFSTiGCVUNp8",
        ]}
      />
      <AdmisionModal
        isOpen={isPrimaria}
        onClose={handleModalClosePrimaria}
        buttonName={[
          "NUEVOS EXTERNOS TODOS LOS GRADOS",
          "PASO DE VIRGEN NIÑA A 1ER GRADO",
          "REINSCRIPCION NIVEL PRIMARIO",
        ]}
        buttonLinks={[
          "https://docs.google.com/forms/d/e/1FAIpQLSfHgjcB3R7FaI39G882njAbgVSSgs36R_HNskH7RPnSFiNTbA/viewform",
          "https://docs.google.com/forms/d/e/1FAIpQLSezIbLemTtSpe1BjCq1VUcn221S36CswidvHK6f5fBaJOi7bw/viewform",
          "https://docs.google.com/forms/d/e/1FAIpQLSejaHP8nKeU8rCZ8fF0_aLpkduskSIEZFf5aWVzqa49FJ_yng/viewform",
        ]}
      />
      <AdmisionModal
        isOpen={isSecundaria}
        onClose={handleModalCloseSecundaria}
        buttonName={[
          "NUEVOS EXTERNOS NIVEL SECUNDARIO",
          "PASO DE 6° NIVEL PRIMARIO A 1° AÑO NIVEL SECUNDARIO",
          "REMATRICULACION NIVEL SECUNDARIO",
        ]}
        buttonLinks={[
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bc8ZWWVcru-FWrEgCh9-OWodwedeq5DCi-3pI8LmSpmGiQ/viewform ",
          "https://docs.google.com/forms/d/e/1FAIpQLSf5fygVy9xqBFBdoMA8SkfUXrPH_bP3Ykfdjsf_hbk2kLBQYQ/viewform ",
          "https://docs.google.com/forms/d/e/1FAIpQLSeMjDBNBxFjQMb5azJJHZkzS7hq0bG8eyBrPRWYMWnRFDPhhA/viewform",
        ]}
      />
    </div>
  );
};

export default AdmisionCuadro;
