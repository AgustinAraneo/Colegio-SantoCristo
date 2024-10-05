import React from "react";
import Header from "../../components/desktop/Header";
import HeaderMobile from "../../components/mobile/Header";
import Footer from "../../components/desktop/Footer";
import FooterMobile from "../../components/mobile/Footer";

const CharlaNeurologica = () => {
  return (
    <div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo hidden md:block">
        <Header />
        <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Charla a cargo de alumnos de 6 año Nivel Secundario
        </h1>
        <p className="text-justify w-[55%] mx-auto mt-4 text-base font-medium">
          El 1 de marzo marca el inicio de un nuevo ciclo escolar en nuestro
          colegio. Esta fecha es muy importante para todos nosotros, ya que
          representa el comienzo de nuevas oportunidades de aprendizaje,
          crecimiento personal y desarrollo académico. Estamos emocionados de
          dar la bienvenida a todos nuestros estudiantes y comenzar juntos este
          emocionante viaje educativo.
        </p>
        <div className="w-full flex justify-center my-4">
          <img src="/images/charla-tdh/1.jpeg" />
        </div>
        <Footer />
      </div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo block md:hidden">
        <HeaderMobile />
        <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Charla a cargo de alumnos de 6 año Nivel Secundario
        </h1>
        <p className="text-justify w-[85%] mx-auto mt-4 text-base font-medium">
          El 1 de marzo marca el inicio de un nuevo ciclo escolar en nuestro
          colegio. Esta fecha es muy importante para todos nosotros, ya que
          representa el comienzo de nuevas oportunidades de aprendizaje,
          crecimiento personal y desarrollo académico. Estamos emocionados de
          dar la bienvenida a todos nuestros estudiantes y comenzar juntos este
          emocionante viaje educativo.
        </p>
        <div className="my-4 mx-4">
          <img src="/images/charla-tdh/1.jpeg" />
        </div>
        <FooterMobile />
      </div>
    </div>
  );
};

export default CharlaNeurologica;
