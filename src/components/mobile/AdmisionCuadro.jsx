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
          "REINSCRIPCIÓN SEGUNDA SECCION 2026",
          "REINSCRIPCION TERCERA SECCION 2026",
        ]}
        buttonLinks={[
          "https://forms.gle/RoeLtfwJZ16apjFo6",
          "https://forms.gle/PVXWjYCB29GqNdWo8",
          "https://forms.gle/vjUe4BJDbE6DjYbY7",
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
          "https://docs.google.com/forms/d/e/1FAIpQLSc3epEFKSzOEgI4qqgQ4wkPMkb5BtuRht8UQ1NV-xdGsHuMYQ/viewform?usp=header",
          "https://docs.google.com/forms/d/e/1FAIpQLSfEQOvqcTOr8fgTalqOs0Xti3wzKkRhpzyzgWBEtIHtnWsyzQ/viewform?usp=header",
          "https://docs.google.com/forms/d/e/1FAIpQLScc-MiRFPH-kQjSeVkLcHh2ihyQFlJggEmA19FWKhZqbjUzuw/viewform?usp=header",
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
          "https://docs.google.com/forms/d/e/1FAIpQLSc8bj52hCsXqWYWowmiiS4hRRTd3pZf9JRMjIPlWPLnCGMJqQ/viewform?usp=header",
          "https://docs.google.com/forms/d/e/1FAIpQLSfAYH6k4BjQ-UmVwnzurzIJqCpe-njcet_VjhXrdVTbemFcMQ/viewform?usp=dialog",
          "https://docs.google.com/forms/d/e/1FAIpQLSeV7XEDF37PGFA0vlu_68oM1iubKbQ1PAZJ5tUhAnC10SjiWw/viewform?usp=dialog",
        ]}
      />
    </div>
  );
};

export default AdmisionCuadro;
