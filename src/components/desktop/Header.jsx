import {React, useState } from 'react'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenContacto, setIsDropdownOpenContacto] = useState(false);
  
    return (
      <header className="bg-gradient-to-tr from-green-500 to-green-900 p-8 flex justify-between items-center">
        <div className="text-white font-bold">Comunidad Santo Cristo</div>
        <nav className='flex flex-auto justify-end mr-[5rem] font-Roboto-Medium text-[0.95rem]'>
          <a className="text-white hover:text-gray-400 mr-4" href="#">INICIO</a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-white hover:text-gray-400 mr-4">SOBRE NOSOTROS</button>
            {isDropdownOpen && (
              <ul className="absolute bg-white rounded shadow-lg text-sm">
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">HISTORIA</a></li>
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">MISION Y VISION</a></li>
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">EQUIPO</a></li>
              </ul>
            )}
          </div>
          <a className="text-white hover:text-gray-400 mr-4" href="#">JARDIN</a>
          <a className="text-white hover:text-gray-400 mr-4" href="#">PRIMARIA</a>
          <a className="text-white hover:text-gray-400 mr-4" href="#">SECUNDARIA</a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenContacto(true)}
            onMouseLeave={() => setIsDropdownOpenContacto(false)}
          >
            <button className="text-white hover:text-gray-400 mr-4">CONTACTO</button>
            {isDropdownOpenContacto && (
              <ul className="absolute bg-white rounded shadow-lg text-sm">
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">ADMISION</a></li>
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">¿DONDE NOS ENCONTRAMOS?</a></li>
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">MEDIOS DE PAGO</a></li>
                <li><a className="p-2 block hover:bg-gray-400 hover:text-white text-center rounded transition duration-500" href="#">DEJA TU CV</a></li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    );
  };

export default Header