/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Niveles = () => {
  return (
    <div className='font-Montserrat w-[90%] mx-auto'>
      <div className="flex min-h-screen items-center justify-center -mt-[12rem]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
            <div className="h-[30rem] w-[23rem]">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/inicial/4.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <Link href='/mobile/Inicial'>
              <div className=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mt-16 text-3xl font-bold text-white font-dmserif">Inicial</h1>
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br /> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
              </div>
            </Link>
          </div>
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
            <div className="h-[30rem] w-[23rem]">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/inicial/4.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <Link href='/mobile/Multiciclo'>
              <div className=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mt-16 text-3xl font-bold text-white font-dmserif">Sala Multiciclo</h1>
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">La Sala Multiciclo es un espacio educativo previo al jardín maternal, diseñado especialmente para niños de 2 y 3 años que comparten un mismo<br /> ambiente de aprendizaje. Funciona en conjunto con el Jardín Virgen Niña.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
              </div>
            </Link>
          </div>
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
            <div className="h-[30rem] w-[23rem]">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/primaria/9.jpeg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <Link href='/mobile/Primario'>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mb-5 text-3xl font-bold text-white font-dmserif">Primario</h1>
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">El nivel primario es una etapa clave en la educación de los niños y niñas, ya que es en estos años donde se forman las bases<br /> para su futuro desarrollo intelectual y personal.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
              </div>
            </Link>
          </div>
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
            <div className="h-[30rem] w-[23rem]">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/secundaria/14.jpeg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <Link href='/mobile/Secundario'>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mt-8 text-3xl font-bold text-white font-Roboto-Regular">Secundario</h1>
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">El nivel secundario es una etapa crucial en la formación de los jóvenes. En estos años, los estudiantes comienzan a desarrollar<br /> una mayor independencia y a pensar en sus intereses y metas a largo plazo.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Niveles
