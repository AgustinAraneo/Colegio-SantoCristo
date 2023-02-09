/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState } from 'react'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenContacto, setIsDropdownOpenContacto] = useState(false);
  
    return (
      <header className="flex items-center justify-between p-8 bg-gradient-to-tr from-green-500 to-green-900">
        <div className="font-bold text-white">Comunidad Santo Cristo</div>
        <nav className='flex flex-auto justify-end mr-[5rem] font-Roboto-Medium text-[0.95rem]'>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="#" transition duration-500>INICIO</a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="mr-4 text-white c hover:text-gray-400">SOBRE NOSOTROS</button>
            {isDropdownOpen && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">HISTORIA</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">MISION Y VISION</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">EQUIPO</a></li> 
              </ul>
            )}
          </div>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="#">JARDIN</a>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="#">PRIMARIA</a>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="#">SECUNDARIA</a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenContacto(true)}
            onMouseLeave={() => setIsDropdownOpenContacto(false)}
          >
            <button className="mr-4 text-white transition duration-500 hover:text-gray-400">CONTACTO</button>
            {isDropdownOpenContacto && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">ADMISION</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">¿DONDE NOS ENCONTRAMOS?</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">MEDIOS DE PAGO</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">DEJA TU CV</a></li>
              </ul>
            )}
          </div>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="#">NOTICIAS</a>
        </nav>
      </header>
    );
  };

export default Header