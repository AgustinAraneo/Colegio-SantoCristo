import React from "react";
import Header from "../../components/desktop/Header";
import Footer from "../../components/desktop/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderMobile from "../../components/mobile/Header";
import FooterMobile from "../../components/mobile/Footer";

const VirgenMaria = () => {
  return (
    <div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo hidden md:block">
        <Header />
        <h1 className="text-5xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Cumple Virgen Maria 🌟
        </h1>
        <p className="text-justify w-[55%] mx-auto mt-4 text-base">
          Así celebramos el cumple de la VIRGEN MARIA en el jardín.🎂🎉🎊
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
                <source
                  src="/images/jardin/virgen-maria-jardin/1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div>
              <video controls className="h-[700px] w-full bg-black">
                <source
                  src="/images/jardin/virgen-maria-jardin/2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Carousel>
        </div>
        <Footer />
      </div>
      <div className="h-full bg-slate-100 bg-fixed bg-center bg-no-repeat bg-cover bg-fondo block md:hidden">
        <HeaderMobile />
        <h1 className="text-3xl font-bold text-green-700 font-Montserrat text-center mt-4">
          Cumple Virgen Maria 🌟
        </h1>
        <p className="text-justify w-[85%] mx-auto mt-4 text-base">
          Así celebramos el cumple de la VIRGEN MARIA en el jardín.🎂🎉🎊
        </p>
        <div className="w-full flex justify-center p-4">
          <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            className="presentation-mode w-full max-w-screen-lg"
          >
            {/* Aquí puedes agregar tus imágenes */}
            <div>
              <video controls className="h-[500px] w-full bg-black">
                <source
                  src="/images/jardin/virgen-maria-jardin/1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div>
              <video controls className="h-[500px] w-full bg-black">
                <source
                  src="/images/jardin/virgen-maria-jardin/2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Carousel>
        </div>
        <FooterMobile />
      </div>
    </div>
  );
};

export default VirgenMaria;
