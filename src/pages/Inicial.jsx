import React from 'react'
import Header from '../components/desktop/Header'
import Footer from '@/components/desktop/Footer'

const Inicial = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div className='shadow-custom2 w-full h-[30rem] -pt-40 flex bg-banner-inicial bg-no-repeat bg-cover bg-center'></div>
            </div>
            <div className='flex flex-col content-center pt-8'>
                <h1 className='ml-[16rem] text-5xl text-green-800 font-Josefin font-bold pb-5'>¡Propuesta Nivel Inicial!</h1>
                <div className='flex content-center pt-8'>
                    <div className='flex flex-col font-Roboto-Regular'>
                        <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br /> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br /> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br />  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                        <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br /> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br /> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                        <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br /> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br /> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                    </div>
                    <div>
                        <img className='h-full w-[90%] ml-[1rem] mr-[1rem] rounded-2xl shadow-custom' src='images/nivel-inicial-costado.jpg' />
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-[16rem] text-2xl text-black/80 font-Abel font-semibold mt-[4rem] mb-[2rem] border-b-2 border-green-800' style={{ width: '70%' }}>Cosas a tener en cuenta:</p>
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

export default Inicial

{/* <div className='flex flex-col font-Roboto-Regular'>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br/> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>En el jardín, los niños aprenden a través del juego y la exploración, lo que les permite adquirir habilidades sociales, emocionales<br/> y cognitivas. Además, en este nivel se les brinda una educación integral, en la que se desarrollan habilidades artísticas,<br/>  motrices y lingüísticas, todo ello en un ambiente seguro y acogedor.</p>
                <p className='ml-[16rem] mb-[0.3rem]'>El nivel inicial es una etapa en la que los niños se divierten mientras aprenden, por lo que esta experiencia educativa resulta<br/> en una motivación positiva para el aprendizaje futuro. Además, los profesores están altamente capacitados para guiar y<br/> apoyar a los estudiantes en su proceso de aprendizaje.</p>
                <p className='ml-[16rem]'>En resumen, el nivel inicial es una etapa clave en el desarrollo de los niños, en la que se les brinda una educación integral, segura<br/> y divertida que les permite adquirir habilidades y conocimientos básicos que les serán de gran utilidad en el futuro. En este nivel,<br/> los estudiantes se desarrollan de manera integral, mientras disfrutan del aprendizaje.</p>
                </div> */}