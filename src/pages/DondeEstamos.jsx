import React from 'react'
import Header from '../components/desktop/Header'
import MapColegioVisual from '../components/desktop/MapColegioVisual'
import MapJardinVisual from '../components/desktop/MapJardinVisual'
import Footer from '../components/desktop/Footer'

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