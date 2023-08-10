import { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine } from 'react-icons/ri'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpenNiveles, setIsDropdownOpenNiveles] = useState(false);
  const [isDropdownOpenContacto, setIsDropdownOpenContacto] = useState(false);
  const [isDropdownOpenSobreNosotros, setIsDropdownOpenSobreNosotros] = useState(false);

  return (
    <nav className="bg-green-800 font-Montserrat">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <p className="text-white text-xl font-bold">Comunidad Santo Cristo</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <p className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </p>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenNiveles(true)}
            onMouseLeave={() => setIsDropdownOpenNiveles(false)}
          >
            <button className="flex flex-auto px-3 py-2 text-base font-medium text-gray-300">Niveles<span className='text-2xl'><RiArrowDownSLine /></span></button>
            {isDropdownOpenNiveles && (
              <ul className="absolute z-50 text-sm bg-white rounded shadow-lg font-Montserrat">
                <Link href="/mobile/Inicial">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2  text-base font-medium" >Nivel Inicial</p></li>
                </Link>
                <Link href="/mobile/Primario">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Nivel Primario</p></li>
                </Link>
                <Link href="/mobile/Secundario">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2  text-base font-medium" >Nivel Secundario</p></li>
                </Link>
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenSobreNosotros(true)}
            onMouseLeave={() => setIsDropdownOpenSobreNosotros(false)}
          >
            <button className="flex flex-auto px-3 py-2 text-base font-medium text-gray-300">Sobre Nosotros<span className='text-2xl'><RiArrowDownSLine /></span></button>
            {isDropdownOpenSobreNosotros && (
              <ul className="absolute z-50 text-sm bg-white shadow-lg font-Montserrat">
                <Link href="/mobile/Historia">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Historia</p></li>
                </Link>
                <Link href="/mobile/NuestrosDocentes">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Equipo</p></li>
                </Link>
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpenContacto(true)}
            onMouseLeave={() => setIsDropdownOpenContacto(false)}
          >
            <button className="flex flex-auto px-3 py-2 text-base font-medium text-gray-300">Contacto<span className='text-2xl'><RiArrowDownSLine /></span></button>
            {isDropdownOpenContacto && (
              <ul className="absolute z-50 text-sm bg-white shadow-lg font-Montserrat">
                <Link href="/mobile/Admision">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Inscripción</p></li>
                </Link>
                <Link href="/mobile/DondeEstamos">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Donde Estamos</p></li>
                </Link>
                <Link href="/mobile/MediosDePago">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Datos Bancarios</p></li>
                </Link>
                <Link href="/mobile/DejaTuCv">
                  <li><p className="hover:bg-green-700 hover:text-white block px-3 py-2 text-base font-medium" >Deja tu CV</p></li>
                </Link>
              </ul>
            )}
          </div>
          <Link href="/mobile/Noticias">
            <p className="text-gray-300 bg-blue-700 hover:text-white block px-3 py-2 rounded-md font-bold text-center text-lg shadow-xl">
              Novedades
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
