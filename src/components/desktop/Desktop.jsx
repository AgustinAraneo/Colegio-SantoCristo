import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Home from "./Home";
import Footer from "./Footer";
import Lottie from "react-lottie";
import animation from "../../education.json";
import SliderUltNov from "./SliderUltNov";
import ResumenNovedades from "../ResumenNovedades";
import BecasButton from "../BecasButton";

const educationCv = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: ``,
  },
};

const Desktop = () => {
  return (
    <div className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo ">
      <div>
        <Header />
        <Carousel />
      </div>
      <div className="">
        <Home />
      </div>
      <div className="mb-[10rem] -mt-10">
        <h1 className="mr-[60rem] font-Montserrat font-bold text-3xl text-green-900 text-center">
          ULTIMAS NOVEDADES
        </h1>
        <ResumenNovedades />
      </div>
      <div>
        <h1 className="container font-Montserrat font-bold text-4xl text-green-900 uppercase text-center">
          Más de 60 años brindando educación de primera...
        </h1>
        <div style={{ width: "40%", margin: "0 auto", marginTop: "-100px" }}>
          <Lottie options={educationCv} isClickToPauseDisabled ariaRole="img" />
        </div>
      </div>
      <div className="fixed right-2 bottom-2">
        <BecasButton />
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
