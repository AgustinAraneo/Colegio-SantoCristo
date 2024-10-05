import React from "react";
import Header from "../../components/desktop/Header";
import HeaderMobile from "../../components/mobile/Header";
import Footer from "../../components/desktop/Footer";
import FooterMobile from "../../components/mobile/Footer";

const DiaDelProfesor = () => {
  return (
    <div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo hidden md:block">
        <Header />
        <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Festejo del Día del Profesor en Nivel Secundario
        </h1>
        <p className="text-justify w-[55%] mx-auto mt-4 text-base font-medium">
          El Festejo del Día del Profesor en Nivel Secundario fue un evento
          especial donde los alumnos rindieron homenaje a sus profesores con
          palabras de agradecimiento, actividades recreativas y momentos de
          celebración en reconocimiento a su dedicación y enseñanza.
        </p>
        <div className="w-full flex justify-center my-4  max-w-screen-lg mx-auto">
          <video controls className="h-[700px] w-full bg-black">
            <source src="/images/dia-profesor/1.mp4" type="video/mp4" />
          </video>
        </div>
        <Footer />
      </div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo block md:hidden">
        <HeaderMobile />
        <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Festejo del Día del Profesor en Nivel Secundario
        </h1>
        <p className="text-justify w-[85%] mx-auto mt-4 text-base font-medium">
          El Festejo del Día del Profesor en Nivel Secundario fue un evento
          especial donde los alumnos rindieron homenaje a sus profesores con
          palabras de agradecimiento, actividades recreativas y momentos de
          celebración en reconocimiento a su dedicación y enseñanza.
        </p>
        <div className="my-4 mx-4">
          <video controls className="h-[500px] w-full bg-black">
            <source src="/images/dia-profesor/1.mp4" type="video/mp4" />
          </video>
        </div>
        <FooterMobile />
      </div>
    </div>
  );
};

export default DiaDelProfesor;
