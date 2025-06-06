import React from "react";
import Carousel from "./Carousel";
import Niveles from "./Niveles";
import Animacion from "./Animacion";
import ResumenNovedades from "../ResumenNovedades";

const Home = () => {
  return (
    <div>
      <div className="">
        <Carousel />
      </div>
      <div className="pt-[40rem] mb-10">
        <p className="text-center font-Montserrat font-bold text-xl text-green-900 pb-[15rem] -mt-[12rem]">
          <span className="">
            CONOCE NUESTROS NIVELES <br />
            DE EDUCACION:
          </span>
        </p>
        <Niveles />
      </div>
      <div className="mb-10">
        <h1 className="text-center font-Montserrat font-bold text-xl text-green-900">
          ULTIMAS NOVEDADES:
        </h1>
        <ResumenNovedades />
      </div>
      <div className="mb-10">
        <Animacion />
      </div>
    </div>
  );
};

export default Home;
