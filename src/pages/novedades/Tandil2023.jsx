import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const Tandil2023 = () => {
  const media = [];

  const title = "Viaje a Tandil 2023";
  const subtitle = "Una experiencia inolvidable llena de aprendizaje y cultura";
  const text =
    "Durante este viaje, los estudiantes tuvieron la oportunidad de explorar la hermosa ciudad de Tandil y aprender sobre su historia y cultura.\n\nSi deseas ver más sobre su aventura en Tandil, ¡aquí debajo puedes descargar la presentación que hemos preparado!";

  const downloadButton = (
    <div className="flex justify-center mt-6">
      <a href="/pdfs/TANDIL.pptx" download>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300">
          Descargar Presentación
        </button>
      </a>
    </div>
  );

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    >
      {downloadButton}
    </NovedadesLayout>
  );
};

export default Tandil2023;
