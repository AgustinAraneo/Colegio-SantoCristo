import React from 'react'
import Header from '@/components/desktop/Header'
import Footer from '@/components/desktop/Footer'
import Slider from '@/components/desktop/Slider'

const Noticias = () => {
    return (
        <div className='bg-prueba bg-center bg-no-repeat bg-cover'>
            <div><Header /></div>
            <div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas noticias del Nivel Inicial:</h1>
                    <Slider />
                </div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas noticias del Nivel Primario:</h1>
                    <Slider />
                </div>
                <div className='mb-10'>
                    <h1 className='flex items-center justify-start ml-[16rem] text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas noticias del Nivel Secundario:</h1>
                    <Slider />
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Noticias