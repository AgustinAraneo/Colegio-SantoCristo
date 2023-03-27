import React from 'react'
import Header from '@/components/mobile/Header'
import Footer from '@/components/mobile/Footer'
import 'animate.css';
import GmailButton from '@/components/ButtonAdmisionSecundario';
import MapColegioVisual from '@/components/mobile/MapColegioVisual';

const Secundario = () => {
  return (
    <div className='bg-slate-100'>
      <div>
        <Header />
      </div>
      <div>
        <div className='shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-inicial bg-no-repeat bg-center'></div>
      </div>
      <div className='flex flex-col content-center pt-8'>
        <h1 className='pb-5 text-5xl font-bold text-center text-sky-400 font-Josefin'>¡Propuesta Nivel Secundario!</h1>
        <div className='flex flex-col content-center pt-4'>
          <div className='flex flex-col font-Roboto-Regular w-[90%] text-sm text-justify mx-auto'>
            <p className='mb-[0.3rem]'>El nivel secundario es una etapa crucial en la formación de los jóvenes. En estos años, los estudiantes comienzan a desarrollar una mayor independencia y a pensar en sus intereses y metas a largo plazo. El nivel secundario es fundamental para la construcción de un futuro exitoso, ya que permite a los estudiantes adquirir conocimientos y habilidades esenciales para su vida y carrera profesional.</p>
            <p className='mb-[0.3rem]'>En el nivel secundario, los estudiantes continúan desarrollando habilidades cognitivas, como el pensamiento crítico y la resolución de problemas. También aprenden habilidades sociales y emocionales, como la empatía, la cooperación y la resolución pacífica de conflictos. Estos valores son fundamentales para una vida plena y satisfactoria y para tener relaciones saludables con los demás.</p>
            <p className='mb-[0.3rem]'>Además, en el nivel secundario se abre una amplia variedad de opciones académicas y profesionales, lo que permite a los estudiantes descubrir sus verdaderas pasiones e intereses. En este nivel, se les brinda la oportunidad de profundizar en materias que les interesen y de prepararse adecuadamente para su futuro académico o profesional.</p>
            <p className=''>En resumen, el nivel secundario es una etapa importante en la formación de los jóvenes y es fundamental para su desarrollo personal y profesional. En este nivel, los estudiantes adquieren habilidades cognitivas, sociales y emocionales, mientras descubren sus verdaderas pasiones e intereses. Por eso, es importante elegir un colegio que brinde una formación integral y de calidad para asegurar un futuro exitoso<br /> para nuestros jóvenes.</p>
          </div>
          <div>
            <img className='h-full w-[90%] rounded-xl shadow-custom mx-auto pt-10' src='/images/primaria/1.jpeg' />
          </div>
        </div>
      </div>
      <div>
        <p className='mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Turnos:</p>
        <div className='flex flex-col justify-center gap-8 mb-[2rem]'>
          <img src='/images/tarjeta-secu-izquierda.png' className='w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto'></img>
          <img src='/images/horario-secundaria.png' className='w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto'></img>
          <img src='/images/tarjeta-secu-derecha.png' className='w-[70%] h-[20%] transition duration-500 hover:scale-105 mx-auto'></img>
        </div>
      </div>
      <p className='mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Admisión:</p>
      <div className='flex justify-center'>
        <div className=' bg-green-600 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105' style={{ width: '70%' }}>
          <p className='pt-2 ml-4 text-2xl font-bold text-white font-Montserrat'>Admision Colegio <br /> Santo Cristo<br /> Nivel Secundario
          </p>
          <div className='flex items-end justify-end h-[90px] mr-10'>
            <GmailButton />
          </div>
        </div>
      </div>
      <p className='mx-auto text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Encontranos:</p>
      <div className='pt-6 -mb-10 text-center'>
        <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Inicial:</h1>
      </div>
      <div>
        <MapColegioVisual />
      </div>
      <Footer />
    </div>
  )
}

export default Secundario

