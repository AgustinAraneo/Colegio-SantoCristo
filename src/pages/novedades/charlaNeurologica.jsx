import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const CharlaNeurologica = () => {
  const media = [{ type: "image", src: "/images/charla-tdh/1.jpeg" }];

  const title = "Charla a cargo de alumnos de 6 año Nivel Secundario";
  const subtitle = "Inicio de un nuevo ciclo escolar con grandes aprendizajes";
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

export default CharlaNeurologica;
