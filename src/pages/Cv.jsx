import React from "react";
import Header from "../components/desktop/Header";
import Footer from "../components/desktop/Footer";
import Lottie from 'react-lottie'
import animation from "../cv.json"
import ButtonInicial from "../components/buttonCv/ButtonInicial";
import ButtonPrimaria from "../components/buttonCv/ButttonPrimaria";
import ButtonSecundaria from "../components/buttonCv/ButtonSecundaria";


const gifCv = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: ``
  }
}

const Cv = () => {
  return (
    <div className='h-full bg-slate-100'>
      <Header />
      <div className='container'>
        <h1 className='pt-4 text-5xl font-bold text-green-700 font-Montserrat'>Forma Parte de Nuestro Equipo:</h1>
        <div className='p-container font-Montserrat'>
          <p className='mt-3'>
            En la Comunidad Educativa Santo Cristo, estamos comprometidos en brindar una educación de calidad a nuestros estudiantes. Para lograrlo, contamos con un equipo de profesionales altamente capacitados y apasionados por la enseñanza.
          </p>
          <p className='mt-3'>
            Si eres un profesor dedicado y te interesa formar parte de nuestro equipo docente, te invitamos a enviarnos tu currículum vitae. Estamos en busca de profesionales con experiencia en su área de enseñanza, con habilidades de liderazgo y trabajo en equipo, y con una fuerte ética de trabajo. Además, buscamos profesores que compartan nuestros valores y nuestra misión de formar ciudadanos responsables y comprometidos con el mundo.
          </p>
          <p className='mt-3'>
            Los profesores seleccionados para unirse a nuestro equipo tendrán la oportunidad de trabajar en un entorno estimulante y colaborativo, donde se les proporcionará apoyo y capacitación continua para mejorar su desempeño y contribuir al éxito de nuestros estudiantes.
          </p>
          <p className="mt-3">Para enviar tu currículum vitae, por favor haz click en el botón <span className="font-bold">CONTÁCTANOS</span>, y escríbenos un mail. Agradecemos tu interés en formar parte de la comunidad educativa de Santo Cristo, y esperamos poder conocerte pronto.</p>
        </div>
      </div>
      <div style={{ width: '65%', margin: '0 auto' }}>
        <Lottie options={gifCv} isClickToPauseDisabled ariaRole="img" />
        <div className="pb-20 text-center">
          <ButtonInicial />
          <ButtonPrimaria />
          <ButtonSecundaria />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cv;