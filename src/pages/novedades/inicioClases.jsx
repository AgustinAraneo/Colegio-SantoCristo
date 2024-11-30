import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const ComienzoClases = () => {
  const media = [{ type: "image", src: "/images/Slider/Comienzo-clases.jpeg" }];

  const title = "Comienzo de Clases el 1 de Marzo";
  const subtitle = "Un nuevo ciclo escolar lleno de oportunidades";
  const text =
    "El 1 de marzo marca el inicio de un nuevo ciclo escolar en nuestro colegio. Esta fecha es muy importante para todos nosotros, ya que representa el comienzo de nuevas oportunidades de aprendizaje, crecimiento personal y desarrollo académico. Estamos emocionados de dar la bienvenida a todos nuestros estudiantes y comenzar juntos este emocionante viaje educativo.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default ComienzoClases;
