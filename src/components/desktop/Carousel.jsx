import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'images/carrusel-1.jpg',
    },
    {
      url: 'images/carrusel-4.jpg',
    },
    {
      url: 'images/carrusel-5.jpg',
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

  return (
    <div className='h-[30rem] w-full m-auto absolute group shadow-custom'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full duration-500 bg-center bg-cover'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center pagination">
        {slides.map((_, index) => (
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
}

export default Carousel;





















// import React, { useState } from 'react';
// import { BsArrowLeftCircle } from 'react-icons/bs' 
// import { BsArrowRightCircle } from 'react-icons/bs'

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'https://picsum.photos/id/100/1200/800',
//     'https://picsum.photos/id/101/1200/800',
//     'https://picsum.photos/id/102/1200/800',
//     'https://picsum.photos/id/103/1200/800',
//     'https://picsum.photos/id/104/1200/800'
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? images.length - 1 : currentIndex - 1
//     );
//   };

//   const goToSlide = index => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel-container">
//       <button className='absolute left-10 top-[50%] transform -translate-y-1/2 text-black text-[2rem]' onClick={prevSlide}><BsArrowLeftCircle /></button>
//       <img className='w-full h-[35rem]' src={images[currentIndex]} alt="imagen de carrusel" />
//       <button className='absolute right-10 top-[50%] transform -translate-y-1/2 text-black text-[2rem]' onClick={nextSlide}><BsArrowRightCircle /></button>
      // <div className="absolute bottom-0 left-0 right-0 w-full text-center pagination">
      //   {images.map((_, index) => (
      //     <span
      //       key={index}
      //       className={`pagination-item ${
      //         currentIndex === index ? 'active' : ''
      //       }`}
      //       onClick={() => goToSlide(index)}
      //     />
      //   ))}
      // </div>
//     </div>
//   );
// };

// export default Carousel;