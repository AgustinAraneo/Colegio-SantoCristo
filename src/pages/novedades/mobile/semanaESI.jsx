import React from "react";
import Header from "../../../components/mobile/Header";
import Footer from "../../../components/mobile/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const semanaESI = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Semana de la ESI
      </h1>
      <p className="text-justify w-[85%] mx-auto mt-4 text-base">
        <span className="font-bold text-center">
          💛SALA AMARILLA T.T.💛 En la semana de la ESI, abordamos el tema de la
          EMPATÍA y el RESPETO, surgiendo grandes ideas y pensamientos. De lo
          que se desprendió el trabajo de las FORTALEZAS tanto individuales como
          grupales. Y decidimos plasmarlas en esta obra de arte efímero, dónde,
          durante su producción, quedaron reflejadas cada una de ellas...
          ACOMPAÑAR, AYUDAR, ALGRARSE, DIVERTIRSE, SONREIR, ESCUCHAR, GUIAR,
          CUIDAR... Y por sobre todo quedó plasmado el AMOR Y LA FELICIDAD DE
          HABERLO LOGRADO JUNTOS!!! Les compartimos un pedacito de todo lo
          trabajado, esperamos que lo disfruten tanto como nosotros! 💛Hasta la
          próxima!!!
        </span>
      </p>
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
            <video
              autoPlay
              muted
              controlsList="nodownload nodrag nodisplay"
              className="h-[500px] w-full bg-black"
            >
              <source src="/images/sala-de-5/sala-5.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <video
              autoPlay
              muted
              controlsList="nodownload nodrag nodisplay"
              className="h-[500px] w-full bg-black"
            >
              <source src="/images/sala-de-5/sala-5-1.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default semanaESI;
