import React from 'react'
import GmailButton from '../ButtonAdmision'
import GmailButtonPrimario from '../ButtonAdmisionPrimario'
import GmailButtonSecundario from '../ButtonAdmisionSecundario'

const Niveles = () => {
    return (
        <div className='flex justify-center flex-auto gap-6'>
            <div>
                <div className='bg-green-600 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Admision Jardin <br />Virgen Niña<br /> Nivel Inicial
                    </p>
                    <div className='flex items-end justify-end h-[90px] mr-10'>
                        <GmailButton />
                    </div>
                </div>
                <img className='w-[25rem] h-[20rem] transition duration-500 hover:scale-105' src='/images/inicial/1.jpg' alt='' />
            </div>
            <div>
                <img className='w-[25rem] h-[20rem] mb-[1rem] transition duration-500 hover:scale-105' src='/images/5.jpeg' alt='' />
                <div className='bg-green-700 h-[15rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Admision Colegio <br /> Santo Cristo<br /> Nivel Primario
                    </p>
                    <div className='flex items-end justify-end h-[90px] mr-10'>
                        <GmailButtonPrimario />
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-green-800 h-[15rem] mb-[1rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Admision Colegio <br /> Santo Cristo<br /> Nivel Secundario
                    </p>
                    <div className='flex items-end justify-end h-[90px] mr-10'>
                        <GmailButtonSecundario />
                    </div>
                </div>
                <img className='w-[25rem] h-[20rem] transition duration-500 hover:scale-105' src='/images/secundaria/3.jpeg' alt='' />
            </div>
        </div>
    )
}

export default Niveles