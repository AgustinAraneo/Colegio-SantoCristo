import React from 'react'

const Home = () => {
  return (
    <div className='font-Roboto-Regular'>
      <p className='mr-[65rem] font-Roboto-Regular font-bold text-3xl text-green-900 text-center pt-10'><span className='border-b-4 border-black/60'>NIVELES</span></p>
    <div class="flex min-h-screen items-center justify-center pb-[20rem]">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-[30rem] w-[23rem]">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/nivel-inicial.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <a href='/Inicial'>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white mb-3">Inicial</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">El nivel inicial o jardín es el comienzo de una etapa educativa fundamental en el desarrollo de los niños. Durante estos primeros<br /> años, los estudiantes adquieren habilidades y conocimientos básicos que les permiten desarrollarse en el futuro.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Más info.</button>
      </div>
      </a>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-[30rem] w-[23rem]">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/nivel-primario.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <a href='/Primario'>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white mb-3">Primario</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">El nivel primario es una etapa clave en la educación de los niños y niñas, ya que es en estos años donde se forman las bases<br /> para su futuro desarrollo intelectual y personal.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Más info.</button>
      </div>
      </a>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-[30rem] w-[23rem]">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/nivel-secundario.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white mb-3">Secundario</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Más info.</button>
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