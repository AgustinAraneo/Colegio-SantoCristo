import React from 'react'
import GmailButton from '../ButtonAdmision'
import GmailButtonPrimario from '../ButtonAdmisionPrimario'
import GmailButtonSecundario from '../ButtonAdmisionSecundario'

const AdmisionCuadro = () => {
    return (
        <div className='flex justify-center flex-auto gap-6 flex-col w-[90%] mx-auto'>
            <div>
                <img className='w-[25rem] h-full transition duration-500 hover:scale-105' src='/images/inicial/1.jpg' alt='' />
                <div className='bg-green-600 h-[15rem] mt-[1rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Inscripción Jardin <br />Virgen Niña<br /> Nivel Inicial
                    </p>
                    <div className='flex items-end justify-end h-[90px] mr-10 '>
                        <GmailButton />
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[25rem] h-full mb-[1rem] transition duration-500 hover:scale-105' src='/images/5.jpeg' alt='' />
                <div className='bg-green-700 h-[15rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Inscripción Colegio <br /> Santo Cristo<br /> Nivel Primario
                    </p>
                    <div className='flex items-end justify-end h-[50px] mr-10'>
                        <GmailButtonPrimario />
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[25rem] h-full transition duration-500 hover:scale-105' src='/images/secundaria/3.jpeg' alt='' />
                <div className='bg-green-800 h-[15rem] mt-[1rem] transition duration-500 hover:scale-105'>
                    <p className='pt-2 ml-4 text-4xl font-bold text-white font-Montserrat'>Inscripción Colegio <br /> Santo Cristo<br /> Nivel Secundario
                    </p>
                    <div className='flex items-end justify-end h-[50px] mr-10'>
                        <GmailButtonSecundario />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmisionCuadro