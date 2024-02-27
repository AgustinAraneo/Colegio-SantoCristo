import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";


const InicioClases = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Comienzo de Clases el 1 de Marzo
            </h1>
            <p className="text-justify w-[85%] mx-auto mt-4 text-base font-medium">El 1 de marzo marca el inicio de un nuevo ciclo escolar en nuestro colegio. Esta fecha es muy importante para todos nosotros, ya que representa el comienzo de nuevas oportunidades de aprendizaje, crecimiento personal y desarrollo académico. Estamos emocionados de dar la bienvenida a todos nuestros estudiantes y comenzar juntos este emocionante viaje educativo.</p>
            <div className="my-4 mx-4">
                <img src="/images/Slider/Comienzo-clases.jpeg" />
            </div>
            <Footer />
        </div>
    );
};

export default InicioClases;