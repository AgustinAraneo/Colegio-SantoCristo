import React from "react";
import Header from "@/components/desktop/Header";
import Footer from "@/components/desktop/Footer";


const DomingoRamos = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Bendición de Ramos
            </h1>
            <p className="text-justify w-[55%] mx-auto mt-4 text-base">En nuestro colegio, esta celebración es muy importante, ya que nos recuerda la importancia de seguir los valores cristianos y de estar siempre unidos en nuestra comunidad educativa. Durante la bendición de ramos, recordaremos las palabras de Jesús y nos comprometeremos a seguir su ejemplo de amor, compasión y servicio a los demás.</p>
            <p className="text-center"><span className="font-bold">¡Que Dios los bendiga a todos!</span></p>
            <div>
                <video src="/images/Slider/bendicion-ramos/1.mp4" className="mx-auto w-[40%] rounded m-10" controls />
            </div>
            <Footer />
        </div >
    );
};

export default DomingoRamos;