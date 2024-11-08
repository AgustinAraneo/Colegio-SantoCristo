import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const fiestasPatronales = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Fiestas Patronales
      </h1>
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
            <img
              src="/images/fiestas-patronales/1.jpeg"
              alt="Imagen 2"
              className="h-[500px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/fiestas-patronales/2.jpeg"
              alt="Imagen 2"
              className="h-[500px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/fiestas-patronales/3.jpeg"
              alt="Imagen 2"
              className="h-[500px] w-[80%]"
            />
          </div>
          <div>
            <img
              src="/images/fiestas-patronales/4.jpeg"
              alt="Imagen 2"
              className="h-[500px] w-[80%]"
            />
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default fiestasPatronales;
