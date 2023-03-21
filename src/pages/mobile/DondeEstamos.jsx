import React from 'react'
import Header from '@/components/mobile/Header'
import MapColegioVisual from '@/components/mobile/MapColegioVisual'
import MapJardinVisual from '@/components/mobile/MapJardinVisual'
import Footer from '@/components/mobile/Footer'

const DondeEstamos = () => {
  return (
    <div className='bg-fixed bg-center bg-no-repeat bg-cover bg-fondo-dibujitos'>
      <div><Header /></div>
      <div className='pt-6 -mb-10 text-center'>
        <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Inicial:</h1>
      </div>
      <div>
        <MapJardinVisual />
      </div>
      <div className='pt-6 -mb-10 text-center '>
        <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Primario y Secundario:</h1>
      </div>
      <div>
        <MapColegioVisual />
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default DondeEstamos