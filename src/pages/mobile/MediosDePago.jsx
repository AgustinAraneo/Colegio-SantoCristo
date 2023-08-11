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
        <div className='mx-auto w-[90%] mt-5'>
          <p className='font-bold text-center'>Tambien disponemos con los siguientes medios de pago:</p>
          <ul className='list-disc list-inside mt-5'>
            <li>Pago mis cuentas (Cargar nuevamente el codigo de Pago Electronico Banelco - 7 Digitos)</li>
            <li>Pago Facil</li>
            <li>Mercado Pago</li>
          </ul>
        </div>
        <p className='mt-[2rem] ml-[1rem] mb-10'>
          Por favor enviar el comprobante de pago y datos del alumno al siguiente mail: <span className='text-lg font-semibold'>santocristoadmi@gmail.com</span>
        </p>
        <div className='text-center'>
          <h3 className='text-4xl text-green-800 font-bold pb-5 mx-auto'>Facturación Electrónica:</h3>
          <p className='w-[95%] mx-auto mb-10'>Para realizar la solicitud de facturación electrónica, por favor, complete el siguiente formulario. <span className='text-blue-500 font-bold' ><a href='https://docs.google.com/forms/d/e/1FAIpQLSf_uBgZvGoKL9oKQm9mQVxXXFe8ntsixsIbecgx0_djpykJXQ/viewform' rel='noreferrer' target='_blank'>Haga click aquí.</a></span></p>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MediosDePago