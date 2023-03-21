import React from 'react'
import {FaInstagram, FaFacebookSquare, FaMapMarkerAlt} from 'react-icons/fa'
import {BsCheck2Circle} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-green-800 w-full h-full pb-10 '>
        <div className='flex flex-col gap-[2.5rem] justify-center pt-[3rem] text-white font-Roboto-Light text-lg font-bold ml-[1rem]'>
            <div><span className='rounded-r-full shadow-2xl bg-green-footer'>Comunidad Santo Cristo</span>
                <div className='flex flex-auto mt-2 text-[1.2rem]'><span className='mt-[0.1rem]'><BsCheck2Circle /></span><span className='ml-2 text-base font-normal'>Mas de 60 años brindando educacion de primera...</span></div>
                <div className='flex flex-auto text-[1.2rem] mt-2'><FaMapMarkerAlt /><span className='ml-2 text-base font-normal'>Pergamino 1749, Lanús, Provincia de Buenos Aires</span></div>
                <div className='flex flex-auto text-[1.2rem] mt-2'><FaMapMarkerAlt /><span className='ml-2 text-base font-normal'>Sitio de Montevideo 2453, Lanús, Provincia de Buenos Aires</span></div>
            </div>
            <div className='mr-[4rem]'><span className='rounded-r-full shadow-2xl bg-green-footer'>Horarios Admistrativos:</span>
            <div className='flex flex-auto mt-2 text-[1.2rem]'><AiOutlineClockCircle /><span className='font-normal text-base ml-2 -mt-[0.1rem]'>Lunes a Viernes de 8 a 14 Hs</span></div>
            </div>
            <div><span className='rounded-r-full shadow-2xl bg-green-footer'>¡Redes Sociales!</span>
                <div className='flex flex-auto mt-2 text-[2rem] hover:text-gray-200'><FaInstagram /><span className='font-normal text-base ml-[1rem] mt-1'>cesc_lanus</span></div>
                <div className='flex flex-auto mt-2 text-[2rem] hover:text-gray-200'><FaFacebookSquare /><span className='font-normal text-base ml-[1rem] mt-1'>Instituto Santo Cristo</span></div>
            </div>
        </div>
    </div>
  )
}

export default Footer