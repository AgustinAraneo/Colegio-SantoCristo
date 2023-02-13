import React, { useState } from 'react'
import Header from '@/components/desktop/Header'
import Footer from '@/components/desktop/Footer'
import Table from '@/components/desktop/Table'

const MediosDePago = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex content-center pt-8 flex-col">
        <h1 className="ml-[6rem] text-5xl text-green-800 font-Roboto-Regular font-bold pb-5">
          Medios de pago:
        </h1>
        <Table />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MediosDePago