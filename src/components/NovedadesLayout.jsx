import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";

const NovedadesLayout = ({ media, title, subtitle, text }) => {
  return (
    <div>
      <HeaderContainer />

      <div className="bg-[#024430] my-6 md:my-10">
        <h2 className="text-[36px] leading-[40px] md:text-[50px] font-bold md:leading-[49px] text-white text-center py-16 md:py-28">
          {title}
        </h2>
      </div>

      <div className="max-w-[1296px] mx-auto my-10 p-4">
        {/* Carousel */}
        <div className="w-full h-full md:h-[700px] mb-6 ">
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
        <div className="text-left flex flex-col gap-4">
          <h3 className="font-medium text-[26px] md:text-[60px] leading-[30px] md:leading-[64px] text-[#172426]">
            {subtitle}
          </h3>
          <p className="text-[15px] md:text-[18px] leading-[20px] md:leading-[30px] text-[#3F4E50]">
            {text}
          </p>
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
