import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const feriaCiencias = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Feria de Ciencias Naturales 2do Grado
            </h1>
            <p className="text-justify w-[85%] mx-auto mt-4 text-base">Este año, segundo grado A, B, C y D realizaron una muestra de lo trabajado presentando en la Feria Anual de Ciencias Naturales &ldquo;Los seres vivos y su importancia en el medio ambiente&ldquo;.
                <br />
                Esta experiencia sumada a la visita de Temaiken, no solo nos han permitido conocer la importancia de cada ser vivo en el planeta, la relación con el desarrollo y el crecimiento de cada uno, sino que también nos han hecho valorar la necesidad y el compromiso con el reciclado.
                <br />
                Cada uno sembró con esa pequeña semilla,  la fe de que junto a ella, crecería un árbol, purificábamos el aire, recibíamos oxígeno, protegíamos la tierra del sol, regulábamos la temperatura, protegíamos animales y esperábamos una nueva  fuente de alimento y materia prima.... en fin, cada uno de los chicos, se comprometió con el medio ambiente, colaboró con el cuidado de la tierra y reflexionó sobre qué... &ldquo;cada granito de arena propio en conjunto y trabajando en equipo muestra grandes logros&ldquo;.
                <br />
                Asi fue, que para esta hermosa feria, cada uno con ayuda de su familia, creó el Guardián de la la Naturalwza, mostrándole al mundo que reciclar es un gran compromiso para vivir mejor.
            </p>
            <div className="w-full flex justify-center p-4">
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
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video5.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video6.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video3.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video autoPlay muted controlsList="nodownload nodrag nodisplay" className="h-[500px] w-full bg-black">
                            <source src="/images/feriaCiencias/video4.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
};

export default feriaCiencias;