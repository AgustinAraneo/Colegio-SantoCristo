import React from 'react';
import Header from '../../components/mobile/Header';
import AdmisionCuadro from '../../components/mobile/AdmisionCuadro';
import Footer from '../../components/mobile/Footer';

const Admision = () => {
  return (
    <div className='h-full bg-slate-100'>
      <Header />
      <div className='container'>
        <h1 className='pt-4 text-5xl font-bold text-green-700 font-Montserrat mx-auto text-center'>Inscripciones:</h1>
        <div className='w-[80%] font-Montserrat mx-auto'>
          <p className='mt-3'>
            Bienvenidos al proceso de inscripción de la Comunidad Educativa Santo Cristo. En nuestro colegio, estamos comprometidos en brindar a nuestros estudiantes una educación de calidad que les permita desarrollar todo su potencial. Nuestro enfoque educativo se basa en una combinación de excelencia académica y formación en valores, fomentando el desarrollo integral de nuestros estudiantes.
          </p>
          <p className='mt-3'>
            Invitamos a los padres de familia y estudiantes interesados en formar parte de nuestra comunidad educativa a que exploren nuestro sitio web y se pongan en contácto con nosotros para obtener más información sobre nuestro proceso de inscripción. Estamos disponibles para responder cualquier pregunta y brindar asesoramiento personalizado para ayudarle a encontrar la mejor opción educativa para su hijo(a).
          </p>
          <p className='mt-3'>
            Gracias por su interés en nombre de la Comunidad Educativa Santo Cristo. Esperamos poder recibirlos pronto en nuestra comunidad educativa.
          </p>
        </div>
      </div>
      <div className='pt-10 pb-10'>
        <AdmisionCuadro />
      </div>
      <Footer />
    </div>
  );
};

export default Admision;