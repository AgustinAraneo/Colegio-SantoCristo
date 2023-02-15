import React from 'react'
import Header from '../components/desktop/Header'
import Footer from '@/components/desktop/Footer'

const Primario = () => {
    return (
        <div className='bg-slate-100'>
            <div>
                <Header />
            </div>
            <div>
                <div className='shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-primario bg-no-repeat bg-cover bg-center'></div>
            </div>
            <div className='flex content-center pt-8 flex-col '>
                <h1 className='ml-[16rem] text-5xl text-fuchsia-600 font-Josefin font-bold pb-5'>¡Propuesta Nivel Primario!</h1>
                <div className='flex content-center pt-8'>
                    <div className='flex flex-col font-Roboto-Regular w-[60rem]'>
                        <p className='ml-[16rem] mb-[0.3rem]'>El nivel primario es una etapa clave en la educación de los niños y niñas, ya que es en estos años donde se forman las bases para su futuro desarrollo intelectual y personal. Durante este periodo, los estudiantes adquieren habilidades importantes en áreas como la lectura, escritura y matemáticas, así como también aprenden sobre el mundo que les rodea a través de diferentes materias, como historia, geografía, ciencias y arte.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>Además, en el nivel primario se fomenta el desarrollo social y emocional de los niños y niñas, alentándolos a trabajar en equipo, resolver conflictos de manera pacífica y a desarrollar habilidades de liderazgo y autocontrol. Los estudiantes también aprenden a apreciar la diversidad y a respetar a sus compañeros y maestros.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>En este nivel, los profesores están altamente capacitados para enseñar de una manera lúdica y divertida, haciendo que el aprendizaje sea una experiencia enriquecedora y motivadora para los estudiantes. Además, utilizan diversas metodologías y materiales didácticos para adaptarse a las necesidades individuales de cada niño o niña.</p>
                        <p className='ml-[16rem]'>En resumen, el nivel primario es una etapa fundamental en la formación de los niños y niñas, ya que les proporciona las herramientas necesarias para continuar su educación y les enseña valores y habilidades que les serán útiles en su vida diaria. En nuestro colegio, nos <br />enorgullece ofrecer un ambiente seguro, acogedor y estimulante para que los estudiantes puedan crecer y desarrollarse de manera<br /> saludable.</p>
                    </div>
                    <div>
                        <img className='h-[90%] w-[40rem] ml-[6rem] mr-[1rem] rounded-2xl shadow-custom' src='images/foto-primaria.jpg' />
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-[16rem] text-2xl text-black/80 font-Roboto-Regular font-bold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Cosas a tener en cuenta:</p>
                <div className='ml-[16rem] text-black/80 font-Roboto-Regular'>
                    <p>Los turnos disponibles son:</p>
                    <p>Mañana de 07:35 a 12:00hs</p>
                    <p>Tarde de 12:50 a 18:30hs</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Primario

{/* <div className='flex flex-col font-Roboto-Regular'>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br/> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br/> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br/>  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br/> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br/> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br/> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br/> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                </div> */}