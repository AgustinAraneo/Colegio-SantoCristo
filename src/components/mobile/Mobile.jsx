import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const Mobile = () => {
  return (
    <div className='w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default Mobile