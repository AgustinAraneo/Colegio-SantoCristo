import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";

const NovedadesLayout = ({ media, title, text }) => {
  return (
    <div>
      <HeaderContainer />
      <div className="max-w-[1296px] mx-auto my-10 p-4">
        {/* Carousel */}
        <div className="w-full h-[700px] mb-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="h-full"
          >
            {media.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover object-center md:object-contain"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      </div>
      <div className="mt-10 w-full bg-[#84A17D] h-[40vh] flex flex-col  justify-center">
        <h5 className="text-white font-bold md:text-[64px] text-[35px] md:leading-[84px] leading-[45px] text-center">
          Sé parte de cada momento.
        </h5>
        <p className="hidden md:block text-white md:text-[18px] text-[16px] md:leading-[30px] leading-[20px] text-center">
          Mantenete atento a nuestra sección de novedades y descubrí todo lo que
          <br />
          pasa en el colegio.
        </p>
        <p className="block md:hidden pt-2 text-white md:text-[18px] text-[15px] md:leading-[30px] leading-[16px] text-center">
          Mantenete atento a nuestra sección de novedades y descubrí todo lo que
          pasa en el colegio.
        </p>
      </div>
      <FooterContainer />
    </div>
  );
};

export default NovedadesLayout;
