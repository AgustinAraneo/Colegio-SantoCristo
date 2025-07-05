import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const Pascua = () => {
  const media = [{ type: "image", src: "/images/pascua-2025/1.jpg" }];

  const title = "Celebraciones de Pascua";
  const subtitle =
    "Compartimos momentos especiales durante las celebraciones de Pascua en el colegio.";
  const text =
    "Durante la Pascua, alumnos y docentes participaron en distintas actividades conmemorativas, reflexionando sobre el significado de esta fecha y celebrando juntos en un ambiente de alegría y unión.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default Pascua;
