import React from 'react'
import Header from '@/components/desktop/Header'
import Footer from '@/components/desktop/Footer'
import Table from '@/components/desktop/Table'

const MediosDePago = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col content-center pt-8 font-Roboto-Regular">
        <h1 className="ml-[6rem] text-5xl text-green-800 font-bold pb-5">
          Datos Bancarios:
        </h1>
        <p className='ml-[6rem]'>Realizar sus transferencias a la siguiente cuenta: <span className='text-red-600'>(¡Atencion! Verificar la correcta escritura de los datos).</span></p>
        <div className='mt-[1rem]'>
        <Table />
        </div>
        <p className='ml-[6rem] mt-[4rem]'>
          Enviar los comprobantes de transferencias al siguiente mail: <span className='ml-1 font-semibold'>santocristo@gmail.com</span>
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MediosDePago