import React from "react";
import Header from "../../components/desktop/Header";
import Footer from "../../components/desktop/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const nueveJulio = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Acto 9 de Julio
      </h1>
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
            <img
              src="/images/9julio/1.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/2.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/3.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/4.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/5.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/6.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/7.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/9julio/8.jpeg"
              alt="Imagen 2"
              className="h-[700px] w-[80%]"
            />
          </div>
          {/* Agregar más elementos según sea necesario */}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default nueveJulio;
