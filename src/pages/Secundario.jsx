import React from 'react'
import Header from '../components/desktop/Header'
import Footer from '@/components/desktop/Footer'
import GmailButton from '@/components/ButtonAdmisionPrimario'
import MapColegioVisual from '@/components/desktop/MapColegioVisual'

const Secundario = () => {
    return (
        <div className='bg-slate-100'>
            <div>
                <Header />
            </div>
            <div>
            <div className='shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-secundario bg-no-repeat bg-cover bg-center'></div>
            </div>
            <div className='flex content-center pt-8 flex-col'>
                <h1 className='ml-[16rem] text-5xl text-sky-400 font-Roboto-Regular font-bold pb-5'>¡Propuesta Nivel Secundario!</h1>
                <div className='flex content-center pt-8'>
                    <div className='flex flex-col font-Roboto-Regular w-[60rem]'>
                        <p className='ml-[16rem] mb-[0.3rem]'>El nivel secundario es una etapa crucial en la formación de los jóvenes. En estos años, los estudiantes comienzan a desarrollar una mayor independencia y a pensar en sus intereses y metas a largo plazo. El nivel secundario es fundamental para la construcción de un futuro exitoso, ya que permite a los estudiantes adquirir conocimientos y habilidades esenciales para su vida y carrera profesional.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>En el nivel secundario, los estudiantes continúan desarrollando habilidades cognitivas, como el pensamiento crítico y la resolución de problemas. También aprenden habilidades sociales y emocionales, como la empatía, la cooperación y la resolución pacífica de conflictos. Estos valores son fundamentales para una vida plena y satisfactoria y para tener relaciones saludables con los demás.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>Además, en el nivel secundario se abre una amplia variedad de opciones académicas y profesionales, lo que permite a los estudiantes descubrir sus verdaderas pasiones e intereses. En este nivel, se les brinda la oportunidad de profundizar en materias que les interesen y de prepararse adecuadamente para su futuro académico o profesional.</p>
                        <p className='ml-[16rem]'>En resumen, el nivel secundario es una etapa importante en la formación de los jóvenes y es fundamental para su desarrollo personal y profesional. En este nivel, los estudiantes adquieren habilidades cognitivas, sociales y emocionales, mientras descubren sus verdaderas pasiones e intereses. Por eso, es importante elegir un colegio que brinde una formación integral y de calidad para asegurar un futuro exitoso<br /> para nuestros jóvenes.</p>
                    </div>
                    <div>
                        <img className='h-[85%] w-[40rem] ml-[6rem] mr-[1rem] rounded-2xl shadow-custom' src='images/foto-secundario.jpg' />
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Turnos:</p>
                <div className='flex flex-auto justify-center gap-8 mb-[2rem]'>
                <img src='images/tarjeta-secu-izquierda.png' className='w-[20%] h-[20%] transition duration-500 hover:scale-105'></img>
                    <img src='images/horario-secundaria.png' className='w-[20%] h-[20%] transition duration-500 hover:scale-105'></img>
                    <img src='images/tarjeta-secu-derecha.png' className='w-[20%] h-[20%] transition duration-500 hover:scale-105'></img>
                </div>
            </div>
            <p className='ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Admisión:</p>
            <div className='flex justify-center'>
                <div className=' bg-[#42ab49] h-[15rem] mb-[1rem] transition duration-500 hover:scale-105' style={{ width: '33%' }}>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Admision Colegio <br/> Santo Cristo<br/> Nivel Primario
                    </p>
                    <div className='flex items-end justify-end h-[90px] mr-10'>
                        <GmailButton />
                    </div>
                </div>
            </div>
            <p className='ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Encontranos:</p>
            <div className='pt-6 -mb-10 text-center'>
                <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Primario y Secundario:</h1>
            </div>
            <div>
                <MapColegioVisual />
            </div>
            <Footer />
        </div>
    )
}

export default Secundario

{/* <div className='flex flex-col font-Roboto-Regular'>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br/> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br/> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br/>  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br/> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br/> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br/> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br/> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                </div> */}