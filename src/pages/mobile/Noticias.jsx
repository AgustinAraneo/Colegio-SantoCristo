import React from 'react'
import Header from '@/components/mobile/Header'
import Footer from '@/components/mobile/Footer'
import Slider from '@/components/mobile/Slider'
import SliderInicial from '@/components/mobile/SliderInicial'
import SliderSecundaria from '@/components/mobile/SliderSecundaria'

const Noticias = () => {
  return (
    <div className='bg-slate-100'>
      <div><Header /></div>
      <div>
        <div className='mb-10'>
          <h1 className='flex items-center justify-start text-center text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Inicial:</h1>
          <SliderInicial />
        </div>
        <div className='mb-10'>
          <h1 className='flex items-center justify-start text-center text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Primario:</h1>
          <Slider />
        </div>
        <div className='mb-10'>
          <h1 className='flex items-center justify-start text-center text-3xl text-green-700 font-Roboto-Regular font-bold mb-2 mt-[2rem]'>Ultimas novedades del Nivel Secundario:</h1>
          <SliderSecundaria />
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Noticias