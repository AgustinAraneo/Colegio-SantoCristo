import React from 'react'
import Header from '../components/desktop/Header'
import Footer from '../components/desktop/Footer'
import Slider from '../components/desktop/Slider'
import SliderInicial from '../components/desktop/SliderInicial'
import SliderSecundaria from '../components/desktop/SliderSecundaria'

const Noticias = () => {
    return (
        <div className='bg-gradient-to-b from-gray-300 to-white'>
            <div><Header /></div>
            <div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Inicial:</h1>
                    <SliderInicial />
                </div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Primario:</h1>
                    <Slider />
                </div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Secundario:</h1>
                    <SliderSecundaria />
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Noticias