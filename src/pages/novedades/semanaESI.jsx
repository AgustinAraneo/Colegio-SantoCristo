import React from "react";
import Header from "../../components/desktop/Header";
import Footer from "../../components/desktop/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const semanaESI = () => {
  return (
    <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo">
      <Header />
      <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
        Semana de ESI
      </h1>
      <p className="text-justify w-[55%] mx-auto mt-4 text-base">
        Este año, 2°grado ha tenido la oportunidad de realizar un paseo por
        TEMAIKEN.
        <br />
        💛SALA AMARILLA T.T.💛 En la semana de la ESI, abordamos el tema de la
        EMPATÍA y el RESPETO, surgiendo grandes ideas y pensamientos. De lo que
        se desprendió el trabajo de las FORTALEZAS tanto individuales como
        grupales. Y decidimos plasmarlas en esta obra de arte efímero, dónde,
        durante su producción, quedaron reflejadas cada una de ellas...
        ACOMPAÑAR, AYUDAR, ALGRARSE, DIVERTIRSE, SONREIR, ESCUCHAR, GUIAR,
        CUIDAR... Y por sobre todo quedó plasmado el AMOR Y LA FELICIDAD DE
        HABERLO LOGRADO JUNTOS!!! Les compartimos un pedacito de todo lo
        trabajado, esperamos que lo disfruten tanto como nosotros! 💛Hasta la
        próxima!!!
      </p>
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
            <video controls className="h-[700px] w-full bg-black">
              <source src="/images/sala-de-5/sala-5.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls className="h-[700px] w-full bg-black">
              <source src="/images/sala-de-5/sala-5-1.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Agregar más elementos según sea necesario */}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default semanaESI;
