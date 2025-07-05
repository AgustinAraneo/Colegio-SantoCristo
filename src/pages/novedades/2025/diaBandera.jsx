import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const DiaBandera = () => {
  const media = [
    { type: "image", src: "/images/dia-de-la-bandera-2025/1.jpg" },
  ];

  const title = "Celebración del Día de la Bandera en el Colegio Santo Cristo";
  const subtitle =
    "Los estudiantes de secundaria conmemoraron una fecha patria especial.";
  const text =
    "Los alumnos de nivel secundario participaron en una emotiva jornada por el Día de la Bandera, reflexionando sobre el significado de nuestros símbolos nacionales. Hubo actividades, palabras alusivas y un ambiente de respeto y orgullo por nuestra historia.";
  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default DiaBandera;
