/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../images"

const Slider = () => {
const [width, setWidth] = useState(0)
const carousel = useRef()

useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="prueba">
      <motion.div className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left: -1800}} className="inner-carousel">
            {images.map((image) => {
                return (
                    <motion.div className="text-center item" key={image.id}>
                        <img className="shadow-lg" src={image.src} alt={image.alt} />
                        <button className="text-white bg-green-700 hover:bg-[#264133] rounded-l-full rounded-r-full w-[5.5rem] mt-1 font-Roboto-Regular">Más Info.</button>
                    </motion.div>
                )
            })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;