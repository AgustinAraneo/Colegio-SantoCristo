import React from 'react'
import Header from '@/components/desktop/Header'
import MapColegio from '@/components/desktop/MapColegio'
import Footer from '@/components/desktop/Footer'
import { BsTelephoneFill, BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

const DondeEstamos = () => {
    return (
        <div>
            <div><Header /></div>
            <div className='flex flex-auto font-Roboto-Regular justify-center m-[4rem]'>
                <div className='flex flex-col mt-[4rem]'>
                    <div className='flex flex-auto mb-[1rem] gap-4 '>
                <div className='text-4xl'><BsFacebook /></div>
                <div className='text-4xl'><BsInstagram /></div>
                    </div>
                    <div className='mb-56'>
                    <div>
                        <p className='flex flex-auto mb-[1rem]'><BsTelephoneFill className='text-green-800 font-bold text-xl' />4247-7941</p>
                        <p className='flex flex-auto mb-[1rem]'><BsTelephoneFill className='text-green-800 font-bold text-xl' />4249-1442</p>
                        <p className='flex flex-auto mb-[1rem]'><BsTelephoneFill className='text-green-800 font-bold text-xl' />6079-5515</p>
                    </div>
                    <div>
                        <p className='flex flex-auto'><FaMapMarkerAlt className='text-green-800 text-xl'/>Pergamino 1749, B1826 Lanús,<br/> Provincia de Buenos Aires</p>
                    </div>
                    <div className='mt-[2rem]'>
                    <p className='font-bold'>Horarios Administrativos:</p>
                    <p>Lunes a Viernes de 9:00 a 14:00 Hs</p>
                    <p className='font-bold mt-4'>Turnos Nivel Inicial:</p>
                    <p>Turno Mañana y Tarde</p>
                    <p className='font-bold mt-4'>Turnos Nivel Primario:</p>
                    <p>Turno Mañana</p>
                    <p className='font-bold mt-4'>Turnos Nivel Secundario:</p>
                    <p>Turno Tarde</p>
                    </div>
                    </div>
                </div>
                <div className='ml-[4rem]'><MapColegio /></div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default DondeEstamos