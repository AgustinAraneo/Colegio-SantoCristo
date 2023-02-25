import React from 'react'
import Carousel from './Carousel'
import Niveles from './Niveles'
import Animacion from './Animacion'
import Slider from './Slider'

const Home = () => {
    return (
        <div>
            <div className=''>
                <Carousel />
            </div>
            <div className='pt-[40rem] mb-10'>
                <p className='text-center font-Montserrat font-bold text-xl text-green-900 pb-[15rem] -mt-[12rem]'><span className=''>CONOCE NUESTROS NIVELES <br />DE EDUCACION:</span></p>
                <Niveles />
            </div>
            <div className='mb-24'>
                <Animacion />
            </div>
            <div className='mb-10'>
            <h1 className="text-center font-Montserrat font-bold text-xl text-green-900">ULTIMAS NOTICIAS:</h1>
                <Slider />
            </div>
        </div>
    )
}

export default Home