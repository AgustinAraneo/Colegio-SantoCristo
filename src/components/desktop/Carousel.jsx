import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="relative w-full h-[35rem]">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex overflow-hidden w-[100%]"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`
        }}
      >
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/7695247/pexels-photo-7695247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/7695254/pexels-photo-7695254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/8500290/pexels-photo-8500290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
      </div>
      <button
        className="absolute left-0 top-[50%] transform -translate-y-1/2"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-[50%] transform -translate-y-1/2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;