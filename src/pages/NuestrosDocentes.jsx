import React from 'react';
import Header from '@/components/desktop/Header';
import Footer from '@/components/desktop/Footer';


const NuestrosDocentes = () => {
  const docentes = [
    {
      name: 'Docentes de Segundo Grado 2023: Micaela, Monica, Grisel y Cecilia',
      image: '/images/docentes/1.jpeg',
    },
    {
      name: 'Docentes de tercer grado: Romina, Natalia, Antonella y Analia',
      image: '/images/docentes/4.jpeg',
    },
    {
      name: 'Docentes de cuarto grado 2023: Yanina, Mariela, María del Carmen y Camila',
      image: '/images/docentes/5.jpeg',
    },
    {
      name: 'Docentes de quinto grado 2023: Marta, Vanesa, gabriela y Veronica',
      image: '/images/docentes/3.jpeg',
    },
    {
      name: 'Docentes de sexto año 2023: Marisa, Gabriela, Florencia y Yanel',
      image: '/images/docentes/2.jpeg',
    },
  ];

  return (
    <div className='bg-slate-100'>
      <Header />
      <div className='container font-Montserrat'>
        <h1 className='text-5xl text-green-800 font-bold pb-5 font-Montserrat mt-2'>
          Conoce a nuestro equipo de docentes:
        </h1>
        <p className='w-[90%]'>
          Estamos orgullosos de presentarles al increíble equipo de docentes que
          hacen posible la educación de calidad que ofrecemos en nuestro colegio.
          Nuestros profesionales están altamente capacitados y comprometidos con
          la formación integral de nuestros estudiantes. Son personas que, día a
          día, entregan lo mejor de sí para garantizar que cada uno de nuestros
          alumnos reciba una educación que les permita desarrollar sus habilidades
          y talentos.
        </p>
        <p className='border-b-2 border-green-800 mt-4 w-[95%]'></p>
        <div className='grid grid-cols-3 gap-4 mt-10 mb-10'>
          {docentes.map((docente) => (
            <div key={docente.name} className='relative'>
              <img src={docente.image} className="w-[500px] h-[500px] rounded shadow-2xl" />
              <p className='absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-1 px-2 text-center font-medium'>
                {docente.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NuestrosDocentes;
