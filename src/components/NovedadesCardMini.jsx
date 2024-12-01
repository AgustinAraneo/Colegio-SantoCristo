import Link from "next/link";
import React from "react";

const NovedadesCardMini = ({ imagen, titulo, categoria, link }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden md:my-10
      w-[320px] h-full lg:w-[300px] xl:w-[320px] 2xl:w-[360px] flex flex-col my-4"
    >
      {/* Imagen */}
      <div className="w-full h-[150px] lg:h-[200px] 2xl:h-[240px] bg-gray-200">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow justify-between h-full md:h-[100px]">
        {/* Título y Categoría */}
        <div>
          <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-bold mb-2 leading-snug">
            {titulo}
          </h3>
          <span className="bg-[#024430] text-white text-[12px] lg:text-[14px] 2xl:text-[16px] px-3 py-1 lg:px-4 lg:py-1 rounded">
            {categoria}
          </span>
        </div>
        {/* Botón */}
        <div className="mt-4">
          <Link
            href={`/novedades/${link}`}
            className="text-[#84A17D] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium hover:underline"
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NovedadesCardMini;
