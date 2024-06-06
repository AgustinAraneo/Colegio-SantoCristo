import React from "react";
import Header from "../../components/desktop/Header";
import Footer from "../../components/desktop/Footer";

const sagradoJesus = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Mes del Sagrado Corazon de Jesus
      </h1>
      <p className="text-center">
        <span className="font-bold">¡Que Dios los bendiga a todos!</span>
      </p>
      <div>
        <video
          src="/images/sagradoJesus/sagrado-corazon-de-jesus.mp4"
          className="mx-auto w-auto h-[600px] rounded m-10"
          controls
        />
      </div>
      <Footer />
    </div>
  );
};

export default sagradoJesus;
