import Link from "next/link";
import React from "react";

const NovedadesCard = ({
  imagen,
  fecha,
  titulo,
  descripcion,
  categoria,
  link,
}) => {
  const getLimitedDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return text;
  };

  return (
    <div className="w-full lg:w-[830px] mx-auto bg-white rounded-lg shadow-redcoach-lg overflow-hidden">
      {/* Imagen */}
      <div className="w-full lg:w-[830px] h-full lg:h-[540px] bg-gray-200">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover lg:object-contain object-center"
        />
      </div>
      {/* Contenido */}
      <div className="p-6">
        {/* Fecha */}
        <p className="text-[14px] font-medium leading-none md:leading-8 text-[#3F4E50]">
          {fecha}
        </p>
        {/* Título */}
        <h2 className="pt-4 text-[30px] leading-[35px] md:text-[45px] md:leading-[50px] font-bold ">
          {titulo}
        </h2>
        {/* Descripción */}
        <p className="hidden md:block pt-4 text-[14px] text-[#3F4E50]">
          {getLimitedDescription(descripcion, 40)}
        </p>
        <p className="block md:hidden pt-4 text-[14px] text-[#3F4E50]">
          {getLimitedDescription(descripcion, 20)}
        </p>
        {/* Botones */}
        <div className="pt-8 flex justify-between">
          <Link
            href={`/Novedades/${link}`}
            className="bg-[#84A17D] text-white px-6 py-3 rounded hover:bg-[#637a5e] transition-all"
          >
            Leer más
          </Link>
          <span className="bg-[#024430] text-white font-medium px-6 py-3 rounded">
            {categoria}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NovedadesCard;
