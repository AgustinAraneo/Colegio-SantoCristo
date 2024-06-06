import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";

const DomingoRamos = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Mes del Sagrado Corazon de Jesus
      </h1>
      <p className="text-justify w-[85%] mx-auto mt-4 text-base">
        <span className="font-bold text-center">
          ¡Que Dios los bendiga a todos!
        </span>
      </p>
      <div>
        <video
          src="/images/sagradoJesus/sagrado-corazon-de-jesus.mp4"
          className="mx-auto w-[95%] rounded m-10"
          controls
        />
      </div>
      <Footer />
    </div>
  );
};

export default DomingoRamos;
