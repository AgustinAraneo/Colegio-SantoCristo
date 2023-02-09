import React, { useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs' 
import { BsArrowRightCircle } from 'react-icons/bs'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://picsum.photos/id/100/1200/800',
    'https://picsum.photos/id/101/1200/800',
    'https://picsum.photos/id/102/1200/800',
    'https://picsum.photos/id/103/1200/800',
    'https://picsum.photos/id/104/1200/800'
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <button className='absolute left-10 top-[50%] transform -translate-y-1/2 text-black text-[2rem]' onClick={prevSlide}><BsArrowLeftCircle /></button>
      <img className='w-full h-[35rem]' src={images[currentIndex]} alt="imagen de carrusel" />
      <button className='absolute right-10 top-[50%] transform -translate-y-1/2 text-black text-[2rem]' onClick={nextSlide}><BsArrowRightCircle /></button>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`pagination-item ${
              currentIndex === index ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;