import React, { useState } from "react";
import AdmisionModal from "./AdmisionModal";

const Niveles = () => {
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
    <div className="flex justify-center flex-auto gap-6">
      <div>
        <div className="bg-green-600 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Jardin <br />
            Virgen Niña
            <br /> Nivel Inicial
          </p>
          <div className="flex items-end justify-end h-[90px] mr-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
              onClick={handleModalOpenJardin}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
        <img
          className="w-[25rem] h-[20rem] transition duration-500 hover:scale-105"
          src="/images/inicial/1.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="bg-green-500 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Sala Multiciclo <br />
            Jardín Virgen Niña
            <br /> Niños de 2 y 3 años
          </p>
        </div>
        <img
          className="w-[25rem] h-[20rem] transition duration-500 hover:scale-105"
          src="/images/inicial/1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[25rem] h-[20rem] mb-[1rem] transition duration-500 hover:scale-105"
          src="/images/5.jpeg"
          alt=""
        />
        <div className="bg-green-700 h-[15rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Primario
          </p>
          <div className="flex items-end justify-end h-[90px] mr-10">
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
        <div className="bg-green-800 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105">
          <p className="pt-2 ml-4 text-4xl font-bold text-white font-Montserrat">
            Inscripción Colegio <br /> Santo Cristo
            <br /> Nivel Secundario
          </p>
          <div className="flex items-end justify-end h-[90px] mr-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
              onClick={handleModalOpenSecundaria}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
        <img
          className="w-[25rem] h-[20rem] transition duration-500 hover:scale-105"
          src="/images/secundaria/3.jpeg"
          alt=""
        />
      </div>
      <AdmisionModal
        isOpen={isJardin}
        onClose={handleModalCloseJardin}
        buttonName={[
          "NUEVOS POSTULANTES JARDIN",
          "REINSCRIPCIÓN SEGUNDA SECCION 2027",
          "REINSCRIPCION TERCERA SECCION 2027",
        ]}
        buttonLinks={[
          "https://forms.gle/bwjxKHLZ3EzMmZfD6",
          "https://forms.gle/nP7qaMjVe8zJjkD87",
          "https://forms.gle/TJ18FPFAcfhv32tu6",
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
          "https://forms.gle/yVQedEpkV9LAWSyA6",
          "https://forms.gle/J66rEE5kdMegVjUT6",
          "https://forms.gle/orcVLiRV4Te4HQX76",
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
          "https://docs.google.com/forms/d/e/1FAIpQLSdB5llgSxg7pM7iDTLG6uxgRtA-jNbemDcDP6SKq5tHpLPKUQ/viewform?usp=publish-editor",
          "https://docs.google.com/forms/d/e/1FAIpQLSeAtu_1qqSYPH9suZDoHEOoQgp5d61Px7u_ziTGyuNdw1neWw/viewform?usp=publish-editor",
          "https://docs.google.com/forms/d/e/1FAIpQLSfkcXZCy917D8lsYhzYcE03dH52rcf6CQ8zs1rGLB8cmsGPxw/viewform?usp=publish-editor",
        ]}
      />
    </div>
  );
};

export default Niveles;
