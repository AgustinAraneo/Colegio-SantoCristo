import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Home from "./Home";
import Footer from "./Footer";
import Slider from "./Slider";
import Niveles from "./Niveles";


const Desktop = () => {
  return (
    <div className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo ">
      <Header />
      <Carousel />
      <div className="mt-[30rem]">
        <Home />
      </div>
      <div>
        <Niveles />
      </div>
      <div className="">
        <h1 className="mr-[60rem] font-Roboto-Regular font-bold text-3xl text-green-900 text-center">ULTIMAS NOTICIAS</h1>
        <Slider />
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
