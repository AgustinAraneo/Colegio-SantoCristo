import React from 'react'
import Header from '@/components/mobile/Header'
import Footer from '@/components/mobile/Footer'
import Table from '@/components/mobile/Table'

const MediosDePago = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col content-center pt-8 font-Roboto-Regular">
        <h1 className="text-4xl text-green-800 font-bold pb-5 mx-auto">
          Datos Bancarios:
        </h1>
        <p className='ml-[1rem]'>Realizar sus transferencias a la siguiente cuenta: <span className='text-red-600'>(¡Atencion! Verificar la correcta escritura de los datos).</span></p>
        <div className='mt-[1rem]'>
          <Table />
        </div>
        <p className='mt-[2rem] ml-[1rem] mb-10'>
          Enviar los comprobantes de transferencias al siguiente mail: <span className='ml-1 font-semibold'>santocristo@gmail.com</span>
        </p>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MediosDePago