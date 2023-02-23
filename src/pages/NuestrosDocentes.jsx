import React from 'react'
import Header from '@/components/desktop/Header'
import Footer from '@/components/desktop/Footer'
import Image from "next/image";

const teachers = [
    {
      name: "John Doe",
      title: "Computer Science",
      image: "/images/profesor2.jpg",
    },
    {
        name: "Agustin Araneo",
        title: "Computer Science",
        image: "/images/profesor3.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor4.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor1.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor5.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor2.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor3.jpg",
      },
      {
        name: "Agustin Guillermina",
        title: "Computer Science",
        image: "/images/profesor4.jpg",
      },
    ]

const NuestrosDocentes = () => {
  return (
    <div className='bg-slate-200'>
        <div>
            <Header />
        </div>
        <div className='container font-Montserrat'>
          <h1 className='text-5xl text-green-800 font-bold pb-5 font-Montserrat mt-2'>Conoce a nuestro equipo de docentes:</h1>
          <p className='w-[90%]'>Estamos orgullosos de presentarles al increíble equipo de docentes que hacen posible la educación de calidad que ofrecemos en nuestro colegio. Nuestros profesionales están altamente capacitados y comprometidos con la formación integral de nuestros estudiantes. Son personas que, día a día, entregan lo mejor de sí para garantizar que cada uno de nuestros alumnos reciba una educación que les permita desarrollar sus habilidades y talentos.</p>
          <p className='border-b-2 border-green-800 mt-4 w-[95%]'></p>
        </div>
        <div className='container pb-10 grid grid-cols-4 gap-4 font-Montserrat'>
          {teachers.map((image, index) => {
            return (
              <div
                className="w-[15rem] h-[15rem] mb-10 mt-10 transition duration-500 hover:scale-110  shadow-xl" 
                key={image.name}
              >
                <Image
                  className="rounded-lg h-full w-full"
                  src={image.image}
                  alt={image.title}
                  width={1000}
                  height={1000}
                />
                <p className='text-center mt-2 font-semibold'>{image.name}</p>
                <p className='text-center'>{image.title}</p>
              </div>
            );
          })}
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default NuestrosDocentes