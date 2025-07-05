import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const FeriaUniversidades = () => {
  const media = [
    { type: "image", src: "/images/feria-universidades-2025/1.jpg" },
  ];

  const title = "Visita a la Feria de Universidades";
  const subtitle =
    "Los alumnos de 6to año de secundaria visitaron la Feria de Universidades en el Colegio Eccleston de Lanús.";
  const text =
    "Los estudiantes de 6to año de nivel secundario participaron de una jornada especial en la Feria de Universidades, realizada en el Colegio Eccleston de Lanús. Durante la visita, pudieron informarse sobre distintas propuestas académicas, dialogar con representantes de diversas instituciones y explorar opciones para su futuro educativo.";
  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default FeriaUniversidades;
