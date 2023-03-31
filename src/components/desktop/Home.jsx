/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'; 

const Home = () => {
  return (
    <div className='font-Montserrat 2xl:mt-[40rem] md:mt-[50rem]'>
      <p className='container font-Montserrat font-bold text-3xl text-green-900 2xl:pt-20 md:mb-44 md:-mt-[5rem] 2xl:mb-0 2xl:-mt-0'><span className=''>CONOCE NUESTROS NIVELES:</span></p>
    <div className="flex min-h-screen items-center justify-center -mt-[12rem]">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
    <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
      <div className="h-[30rem] w-[23rem]">
        <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/inicial/4.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <Link href='/Inicial'>
      <div className=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="mt-16 text-3xl font-bold text-white font-dmserif">Inicial</h1>
        <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br /> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
      </div>
      </Link>
    </div>
    <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/50 rounded-t-xl">
      <div className="h-[30rem] w-[23rem]">
        <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/primaria/9.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <Link href='/Primario'>
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
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="mt-8 text-3xl font-bold text-white font-Roboto-Regular">Secundario</h1>
        <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">El nivel secundario es una etapa crucial en la formación de los jóvenes. En estos años, los estudiantes comienzan a desarrollar<br /> una mayor independencia y a pensar en sus intereses y metas a largo plazo.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-green-800">Más info.</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
  }

  export default Home



  // <div className='py-2 text-center'>
  //   <p className='mt-[1rem] mr-[65rem] font-Roboto-Regular font-bold text-3xl text-blue-900'><span className='border-b-4 border-black/60'>Niveles</span></p>
  // <div className="flex justify-center flex-auto gap-x-10 mt-[2.5rem] ">
  //     <div className='w-[22rem] h-[22rem] flex flex-col shadow-2xl'>
  //       <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/8363124/pexels-photo-8363124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Jardin'/>
  //       <div className='-mt-[30%] w-[8rem] h-[3rem] bg-red-600 -ml-[1rem] rounded-md '><span className='flex justify-center mt-[0.5rem] font-Roboto-Medium text-white text-xl font-medium'>Inicial</span></div>
  //     </div>
  //     <div className='w-[22rem] h-[22rem] flex flex-col rounded-xl shadow-2xl'>  
  //     <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/8363015/pexels-photo-8363015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Jardin'/>
  //       <div className='-mt-[30%] w-[8rem] h-[3rem] bg-blue-600 -ml-[1rem] rounded-md '><span className='flex justify-center mt-[0.5rem] font-Roboto-Medium text-white text-xl font-medium'>Primario</span></div>        
  //     </div>
  //     <div className='w-[22rem] h-[22rem] flex flex-col rounded-xl shadow-2xl'>
  //     <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/8535183/pexels-photo-8535183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Jardin'/>
  //       <div className='-mt-[30%] w-[8rem] h-[3rem] bg-green-600 -ml-[1rem] rounded-md '><span className='flex justify-center mt-[0.5rem] font-Roboto-Medium text-white text-xl font-medium'>Secundario</span></div> 
  //     </div>
  // </div>
  // </div>