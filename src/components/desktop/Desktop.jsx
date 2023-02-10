import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Home from "./Home";
// import '../../index.css'

const Desktop = () => {
  return (
    <div className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo ">
      <Header />
      <Carousel />
      <div className="mt-[30rem]">
      <Home />
      </div>
    </div>
  );
};

export default Desktop;
