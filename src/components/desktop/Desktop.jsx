import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Home from "./Home";
import Footer from "./Footer";
import Slider from "./Slider";


const Desktop = () => {
  return (
    <div className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo ">
      <Header />
      <Carousel />
      <div className="mt-[30rem]">
      <Home />
      </div>
      <Slider />
      <Footer />
      
    </div>
  );
};

export default Desktop;
