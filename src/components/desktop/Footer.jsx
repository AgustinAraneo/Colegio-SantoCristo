import React from 'react'
import {FaInstagram, FaFacebookSquare, FaMapMarkerAlt} from 'react-icons/fa'
import {BsCheck2Circle} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-green-800 w-full h-[13rem]'>
        <div className='flex flex-auto gap-[5rem] justify-center pt-[3rem] text-white font-Roboto-Light text-lg font-bold'>
            <div>Comunidad Santo Cristo
                <div className='flex flex-auto mt-3 text-[1.2rem]'><BsCheck2Circle /><span className='font-normal text-base ml-2'>Mas de 60 años brindando educacion de primera...</span></div>
                <div className='flex flex-auto text-[1.2rem] mt-2'><FaMapMarkerAlt /><span className='font-normal text-base ml-2'>Pergamino 1749, B1826 Lanús, Provincia de Buenos Aires</span></div>
            </div>
            <div className='mr-[4rem]'>Horarios Admistrativos:
            <div className='flex flex-auto mt-3 text-[1.2rem]'><AiOutlineClockCircle /><span className='font-normal text-base ml-2 -mt-[0.1rem]'>Lunes a Viernes de 8 a 14 Hs</span></div>
            </div>
            <div>¡Redes Sociales!
                <div className='flex flex-auto mt-3 text-[2rem]'><FaInstagram /><span className='font-normal text-base ml-[1rem] mt-1'>cesc_lanus</span></div>
                <div className='flex flex-auto mt-3 text-[2rem]'><FaFacebookSquare /><span className='font-normal text-base ml-[1rem] mt-1'>Instituto Santo Cristo</span></div>
            </div>
        </div>
    </div>
  )
}

export default Footer