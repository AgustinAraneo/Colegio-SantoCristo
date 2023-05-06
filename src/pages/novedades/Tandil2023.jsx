import React from "react";
import Header from "@/components/desktop/Header";
import Footer from "@/components/desktop/Footer";


const Tandil2023 = () => {
    return (
        <div className='h-screen bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Viaje a Tandil 2023
            </h1>
            <p className="text-justify w-[55%] mx-auto mt-8 text-base">Durante este viaje, los estudiantes tuvieron la oportunidad de explorar la hermosa ciudad de Tandil y aprender sobre su historia y cultura.</p>
            <p className="text-center"><span className="font-bold">Si deseas ver más sobre su aventura en Tandil, ¡aquí debajo puedes descargar la presentación que hemos preparado!</span></p>
            <div className="flex justify-center mt-[2%]">
                <a href="/pdfs/TANDIL.pptx" download>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Descargar Presentación
                    </button>
                </a>
            </div>
            <div className="absolute bottom-0 right-0 left-0">
                <Footer />
            </div>
        </div >
    );
};

export default Tandil2023;