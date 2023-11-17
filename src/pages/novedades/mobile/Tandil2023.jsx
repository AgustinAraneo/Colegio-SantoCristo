import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";


const Tandil2023 = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Viaje a Tandil 2023
            </h1>
            <p className="text-justify w-[85%] mx-auto mt-4 text-base">Durante este viaje, los estudiantes tuvieron la oportunidad de explorar la hermosa ciudad de Tandil y aprender sobre su historia y cultura.<br /><span className="font-bold">Si deseas ver más sobre su aventura en Tandil, ¡aquí debajo puedes descargar la presentación que hemos preparado!</span></p>
            <div className="flex justify-center mt-[6%] mb-10">
                <a href="/pdfs/TANDIL.pptx" download>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Descargar Presentación
                    </button>
                </a>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    );
};

export default Tandil2023;