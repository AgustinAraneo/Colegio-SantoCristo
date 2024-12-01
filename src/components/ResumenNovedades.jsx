import { novedadesData } from "../data/novedades-data";
import NovedadesCardMini from "./NovedadesCardMini";

const ResumenNovedades = () => {
  const ultimasNovedades = novedadesData.slice(0, 3);

  return (
    <div className="font-Montserrat w-full mx-auto px-4 flex flex-col items-center">
      <div className="flex md:flex-row flex-col justify-center md:gap-4 gap-0 ">
        {ultimasNovedades.map((novedad, index) => (
          <div key={index} className="flex ">
            <NovedadesCardMini
              imagen={novedad.imagen}
              fecha={novedad.fecha}
              titulo={novedad.titulo}
              descripcion={novedad.descripcion}
              categoria={novedad.categoria}
              link={novedad.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumenNovedades;
