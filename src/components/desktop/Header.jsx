/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenContacto, setIsDropdownOpenContacto] = useState(false);
  const [isDropdownOpenNiveles, setIsDropdownOpenNiveles] = useState(false);

  return (
    <header className="flex items-center justify-between p-2 bg-green-800 border-b-2 border-red-900 font-Montserrat ">
      <div className="flex flex-auto font-bold text-white "><img className='2xl:w-[4.5rem] 2xl:h-[5.5rem] w-[4rem] h-[5rem] ml-[1rem] 2xl:ml-[2rem] pt-2' src='https://i.ibb.co/k2ckb7p/Logo-escuela.png' alt='Logo' /><span className='2xl:ml-[2rem] ml-2 mt-[1.25rem] font-Josefin font-semibold text-lg xl:text-xl 2xl:text-2xl text-center'>Comunidad Educativa <br />Santo Cristo</span></div>
      <nav className='flex flex-auto justify-end 2xl:mr-[1rem] font-Roboto-Medium 2xl:text-[0.95rem] xl:text-[0.8rem] text-[0.7rem]'>
        <a className="mr-4 text-white transition duration-500 hover:text-gray-400" href="/">INICIO</a>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpenNiveles(true)}
          onMouseLeave={() => setIsDropdownOpenNiveles(false)}
        >
          <button className="flex flex-auto mr-2 text-white c hover:text-gray-400">NIVELES<span className='text-2xl'><RiArrowDownSLine /></span></button>
          {isDropdownOpenNiveles && (
            <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Inicial">NIVEL INICIAL</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Primario">NIVEL PRIMARIO</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Secundario">NIVEL SECUNDARIO</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Normativa2024">NORMATIVA 2024</a></li>
            </ul>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex flex-auto mr-2 text-white c hover:text-gray-400">SOBRE NOSOTROS<span className='text-2xl'><RiArrowDownSLine /></span></button>
          {isDropdownOpen && (
            <ul className="absolute z-50 text-sm bg-white rounded shadow-lg">
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Historia">HISTORIA</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/NuestrosDocentes">EQUIPO</a></li>
            </ul>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpenContacto(true)}
          onMouseLeave={() => setIsDropdownOpenContacto(false)}
        >
          <button className="flex flex-auto text-white transition duration-500 hover:text-gray-400">CONTACTO<span className='text-2xl'><RiArrowDownSLine /></span></button>
          {isDropdownOpenContacto && (
            <ul className="absolute z-50 text-xs 2xl:text-sm bg-white rounded shadow-lg">
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/DondeEstamos">¿DONDE NOS ENCONTRAMOS?</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/MediosDePago">ADMINISTRACIÓN</a></li>
              <li><a className="block p-2 text-center transition duration-500 rounded hover:bg-gray-400 hover:text-white" href="/Cv">DEJA TU CV</a></li>
            </ul>
          )}
        </div>
      </nav>
      <a className="test3 font-Montserrat m-2 2xl:text-[15px] xl:text-md text-xs" href="/Noticias">NOVEDADES</a>
      <a className="test2 font-Montserrat m-2 2xl:text-[15px] xl:text-md text-xs" href="/Admision">INSCRIPCIÓN 2024</a>
    </header>
  );
};

export default Header