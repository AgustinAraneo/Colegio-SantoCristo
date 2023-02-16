import React from 'react'

const Niveles = () => {
  return (
    <div className='flex flex-auto justify-center gap-6'>
        <div>
        <div className='bg-blue-500 h-[15rem] mb-[1rem]'>
            <p className='text-2xl text-white'>Nivel primario</p>
        </div>
            <img className='w-[25rem] h-[20rem]' src='http://comunidadeducativasagradocorazon.com.ar/wp-content/uploads/2022/01/WhatsApp-Image-2021-12-22-at-11.28.01-AM-3-768x576.jpeg' />
            </div>
            <div>
            <img className='w-[25rem] h-[20rem] mb-[1rem]' src='http://comunidadeducativasagradocorazon.com.ar/wp-content/uploads/2022/01/WhatsApp-Image-2021-12-22-at-11.28.01-AM-3-768x576.jpeg' />
        <div className='bg-red-500 h-[15rem]'>
            <p>Nivel primario</p>
        </div>
            </div>
            <div>
        <div className='bg-green-500 h-[15rem] mb-[1rem]'>
            <p>Nivel primario</p>
        </div>
            <img className='w-[25rem] h-[20rem]' src='http://comunidadeducativasagradocorazon.com.ar/wp-content/uploads/2022/01/WhatsApp-Image-2021-12-22-at-11.28.01-AM-3-768x576.jpeg' />
            </div>
    </div>
  )
}

export default Niveles