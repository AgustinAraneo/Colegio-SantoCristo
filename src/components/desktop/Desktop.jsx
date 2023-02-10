import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Home from './Home'

const Desktop = () => {
  return (
    <div className="bg-[url('../public/images/fondo.jpg')] w-full h-[2000px] bg-no-repeat bg-cover bg-center bg-fixed ">
      <Header />
      <div className=''>
      <Carousel />
      </div>
      <Home />
      Hola chicos
      </div>
  )
}

export default Desktop