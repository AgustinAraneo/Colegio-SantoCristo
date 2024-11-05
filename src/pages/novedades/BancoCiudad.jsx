import React from "react";
import Header from "../../components/desktop/Header";
import HeaderMobile from "../../components/mobile/Header";
import Footer from "../../components/desktop/Footer";
import FooterMobile from "../../components/mobile/Footer";

const BancoCiudad = () => {
  return (
    <div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo hidden md:block">
        <Header />
        <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Visita del Banco Ciudad al Colegio Santo Cristo
        </h1>
        <p className="text-justify w-[55%] mx-auto mt-4 text-base font-medium">
          Los alumnos de nivel secundario del Colegio Santo Cristo recibieron la
          visita del Banco Ciudad, una oportunidad enriquecedora para aprender
          sobre educación financiera y conocer más sobre los servicios y valores
          del banco. La actividad permitió a los estudiantes interactuar con
          profesionales, resolver dudas y entender cómo el mundo financiero
          puede impactar sus futuros proyectos.
        </p>
        <div className="w-full flex justify-center my-4  max-w-screen-lg mx-auto">
          <div className="w-full flex justify-center my-4">
            <img src="/images/bco-ciudad/1.jpeg" />
          </div>
        </div>
        <Footer />
      </div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo block md:hidden">
        <HeaderMobile />
        <h1 className="text-3xl px-4 font-bold text-green-700 font-Montserrat text-center mt-4">
          Visita del Banco Ciudad al Colegio Santo Cristo
        </h1>
        <p className="px-4 mx-auto mt-4 text-base font-medium">
          Los alumnos de nivel secundario del Colegio Santo Cristo recibieron la
          visita del Banco Ciudad, una oportunidad enriquecedora para aprender
          sobre educación financiera y conocer más sobre los servicios y valores
          del banco. La actividad permitió a los estudiantes interactuar con
          profesionales, resolver dudas y entender cómo el mundo financiero
          puede impactar sus futuros proyectos.
        </p>
        <div className="my-4 mx-4">
          <img src="/images/bco-ciudad/1.jpeg" />
        </div>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BancoCiudad;
