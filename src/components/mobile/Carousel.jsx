import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Carousel() {
  const slides = [
    {
      url: "/images/inicial/5.webp",
    },
    {
      url: "/images/secundaria/13.webp",
    },
    {
      url: "/images/primaria/1.webp",
    },
    {
      url: "/images/inicial/6.webp",
    },
    {
      url: "/images/secundaria/2.webp",
    },
    {
      url: "/images/primaria/3.jpeg",
    },
    {
      url: "/images/secundaria/16.webp",
    },
    {
      url: "/images/primaria/8.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="h-[25rem] w-full m-auto absolute group shadow-custom">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`pagination-item ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
