import React from "react";
import Header from "../../components/desktop/Header";
import Footer from "../../components/desktop/Footer";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const feriaCiencias5to = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Feria de Ciencias Naturales 5to Grado
            </h1>
            <p className="text-justify w-[55%] mx-auto mt-4 text-base">Este año, segundo grado A, B, C y D realizaron una muestra de lo trabajado presentando en la Feria Anual de Ciencias Naturales &ldquo;Los seres vivos y su importancia en el medio ambiente&ldquo;.
                La Feria de Ciencias 2023 coordinada por las  docentes de 5to grado resaltó el trabajo aúlico sobre EL CUERPO HUMANO
                Hermosa experiencia acompañada con el entusiasmo de alumnos - alumnas junto a sus familias con la guía de cada docente.

                Felicitaciones a cada explicación por parte de los chicos y chicas en la muestra.
            </p>
            <div className="w-full flex justify-center my-8">
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    useKeyboardArrows={true}
                    className="presentation-mode w-full max-w-screen-lg"
                >
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[700px] w-full bg-black">
                            <source src="/images/feriaCiencias5to/video1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/1.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/2.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/3.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/4.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/5.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/6.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/7.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/8.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/9.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/10.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/11.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/12.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/13.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/14.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/16.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/17.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/19.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    <div>
                        <img src="/images/feriaCiencias5to/20.jpeg" alt="Imagen 2" className="h-[700px] w-[80%]" />
                    </div>
                    {/* Agregar más elementos según sea necesario */}
                </Carousel>
            </div>
            <Footer />
        </div >
    );
};

export default feriaCiencias5to;