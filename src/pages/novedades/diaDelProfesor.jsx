import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const DiaDelProfesor = () => {
  const media = [{ type: "video", src: "/images/dia-profesor/1.mp4" }];

  const title = "Festejo del Día del Profesor en Nivel Secundario";
  const subtitle = "Un homenaje especial para nuestros educadores";
  const text =
    "El Festejo del Día del Profesor en Nivel Secundario fue un evento especial donde los alumnos rindieron homenaje a sus profesores con palabras de agradecimiento, actividades recreativas y momentos de celebración en reconocimiento a su dedicación y enseñanza.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default DiaDelProfesor;
