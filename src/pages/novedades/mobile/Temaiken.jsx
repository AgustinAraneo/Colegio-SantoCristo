import React from "react";
import Header from "@/components/mobile/Header";
import Footer from "@/components/mobile/Footer";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Temaiken = () => {
    return (
        <div className='h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
            <Header />
            <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
                Viaje a Temaiken 2023
            </h1>
            <p className="text-justify w-[85%] mx-auto mt-4 text-base">Este año, 2°grado ha tenido la oportunidad de realizar un paseo por TEMAIKEN.<br />
                Pudimos compartir esta hermosa experiencia que nos permitió conocer mucho sobre los animales que viven allí: suricatas, tigres de bengala, yaguaretés, murciélagos, cebras, tortugas, flamencos y muchos más.
                También pudimos recorrer el acuario. ¡Cuántas especies conocimos! ¡Vimos un tiburón!¡Qué emoción!<br />
                Aprendimos mucho: escuchando a las guías, a nuestros maestros y leyendo los carteles en el espacio de cada animal.<br />
                Almorzamos rico y disfrutamos con amigos y las seños de una nueva experiencia. Nos sacaron muchas fotos y al regreso pudimos plasmar en nuestros cuadernos lo que aprendimos y más nos gustó.</p>
            <p className="text-center"><span className="font-bold "><br />¡TEMAIKEN NOS ENCANTÓ!</span></p>
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
                    {/* Aquí puedes agregar tus imágenes */}
                    <div>
                        <img src="/images/temaiken/2a.jpeg" alt="Imagen 1" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/2b.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/2c.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/2d.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/2doo.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/ganzos.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/tortuga.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/medusa.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <img src="/images/temaiken/flamengos.jpeg" alt="Imagen 2" className="h-[500px]" />
                    </div>
                    <div>
                        <video controls className="h-[500px] w-full bg-black">
                            <source src="/images/temaiken/flamengos-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video controls className="h-[500px] w-full bg-black">
                            <source src="/images/temaiken/peces.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video controls className="h-[500px] w-full bg-black">
                            <source src="/images/temaiken/tiburon.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <video controls className="h-[500px] w-full bg-black">
                            <source src="/images/temaiken/tigre.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* Agregar más elementos según sea necesario */}
                </Carousel>
            </div>
            <Footer />
        </div>
    );
};

export default Temaiken;