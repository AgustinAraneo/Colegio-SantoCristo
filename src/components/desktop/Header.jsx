/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenContacto, setIsDropdownOpenContacto] = useState(false);
    const [isDropdownOpenNiveles, setIsDropdownOpenNiveles] = useState(false);
  
    return (
      <header className="flex items-center justify-between p-2 bg-green-800 border-b-2 border-red-900 font-Josefin ">
        <div className="flex flex-auto font-bold text-white "><img className='w-[4.5rem] h-[5.5rem] ml-[2rem] pt-2' src='https://i.ibb.co/k2ckb7p/Logo-escuela.png' alt='Logo'/><span className='ml-[2rem] mt-[1.75rem] font-Josefin font-semibold text-2xl'>Comunidad Santo Cristo</span></div>
        <nav className='flex flex-auto justify-end mr-[5rem] font-Roboto-Medium text-[0.95rem]'>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="/">INICIO</a>
        <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenNiveles(true)}
            onMouseLeave={() => setIsDropdownOpenNiveles(false)}
          >
            <button className="flex flex-auto mr-2 text-white c hover:text-gray-400">NIVELES<span className='text-2xl'><RiArrowDownSLine/></span></button>
            {isDropdownOpenNiveles && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Inicial">NIVEL INICIAL</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Primario">NIVEL PRIMARIO</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Secundario">NIVEL SECUNDARIO</a></li> 
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex flex-auto mr-2 text-white c hover:text-gray-400">SOBRE NOSOTROS<span className='text-2xl'><RiArrowDownSLine/></span></button>
            {isDropdownOpen && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Historia">HISTORIA</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="#">MISION Y VISION</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/NuestrosDocentes">EQUIPO</a></li> 
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenContacto(true)}
            onMouseLeave={() => setIsDropdownOpenContacto(false)}
          >
            <button className="flex flex-auto mr-2 text-white transition duration-500 hover:text-gray-400">CONTACTO<span className='text-2xl'><RiArrowDownSLine/></span></button>
            {isDropdownOpenContacto && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Admision">ADMISION</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/DondeEstamos">¿DONDE NOS ENCONTRAMOS?</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/MediosDePago">DATOS BANCARIOS</a></li>
                <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Cv">DEJA TU CV</a></li>
              </ul>
            )}
          </div>
          <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="/Noticias">NOTICIAS</a>
        </nav>
      </header>
    );
  };

export default Header