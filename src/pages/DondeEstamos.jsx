import React from 'react'
import Header from '@/components/desktop/Header'
import MapColegio from '@/components/desktop/MapColegio'
import MapJardin from '@/components/desktop/MapJardin'
import Footer from '@/components/desktop/Footer'
import { BsTelephoneFill, BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

const DondeEstamos = () => {
    return (
        <div className='bg-center bg-no-repeat bg-cover bg-fondo '>
            <div><Header /></div>
            <div className='pt-6 -mb-10 text-center'>
                <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Inicial:</h1>
            </div>
            <div className='flex flex-auto font-Roboto-Regular justify-center m-[4rem]'>
                <div className='flex flex-col mt-[1rem]'>
                    <div className='flex flex-auto mb-[2rem] gap-4 ml-[2rem]'>
                <div className='text-4xl text-green-800'><BsFacebook /></div>
                <div className='text-4xl text-green-800'><BsInstagram /></div>
                    </div>
                    <div className='mb-[16rem]'>
                    <div>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>4247-7941</span></p>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>4249-1442</span></p>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>6079-5515</span></p>
                    </div>
                    <div>
                        <p className='flex flex-auto font-semibold'><FaMapMarkerAlt className='mr-2 text-xl text-green-800'/>Sitio de Montevideo 2453,<br/> Lanús Este</p>
                    </div>
                    <div className='mt-[2rem]'>
                    <p className='font-bold'>Horarios Administrativos:</p>
                    <p>Lunes a Viernes de 9:00 a 14:00 Hs</p>
                    <p className='mt-4 font-bold'>Turnos Nivel Inicial:</p>
                    <p>Turno Mañana y Tarde</p>
                    </div>
                    </div>
                </div>
                <div className='ml-[4rem]'><MapJardin /></div>
            </div>
            <div className='pt-6 -mb-10 text-center '>
                <h1 className='text-4xl font-bold text-green-700 font-Montserrat'>Nivel Primario y Secundario:</h1>
            </div>
            <div className='flex flex-auto font-Roboto-Regular justify-center m-[4rem]'>
                <div className='flex flex-col mt-[1rem]'>
                    <div className='flex flex-auto mb-[2rem] gap-4 ml-[2rem]'>
                <div className='text-4xl text-green-800'><BsFacebook /></div>
                <div className='text-4xl text-green-800'><BsInstagram /></div>
                    </div>
                    <div className='mb-56'>
                    <div>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>4247-7941</span></p>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>4249-1442</span></p>
                        <p className='flex flex-auto mb-[2rem]'><BsTelephoneFill className='mt-1 text-xl font-bold text-green-800' /><span className='ml-2 text-lg font-semibold'>6079-5515</span></p>
                    </div>
                    <div>
                        <p className='flex flex-auto font-semibold'><FaMapMarkerAlt className='mr-2 text-xl text-green-800'/>Pergamino 1749,<br/> Lanús Este </p>
                    </div>
                    <div className='mt-[2rem]'>
                    <p className='font-bold'>Horarios Administrativos:</p>
                    <p>Lunes a Viernes de 9:00 a 14:00 Hs</p>
                    <p className='mt-4 font-bold'>Turnos Nivel Primario:</p>
                    <p>Turno Mañana</p>
                    <p className='mt-4 font-bold'>Turnos Nivel Secundario:</p>
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