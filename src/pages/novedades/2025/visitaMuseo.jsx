import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const VisitaMuseo = () => {
  const media = [{ type: "image", src: "/images/visita-museo/1.jpg" }];
  const title = 'Visita Educativa al Museo "Prohibido no tocar"';
  const subtitle =
    "Los estudiantes de 3° grado vivieron una experiencia interactiva y divertida explorando ciencia y tecnología en el museo.";
  const text =
    'Los estudiantes de 3° grado participaron en una enriquecedora visita al Museo "Prohibido no tocar", donde tuvieron la oportunidad de explorar y aprender de manera interactiva y lúdica diversos conceptos científicos y tecnológicos. Durante la visita, los alumnos desarrollaron habilidades fundamentales como la observación, el análisis y la resolución de problemas, mientras disfrutaban de una experiencia educativa innovadora y divertida en compañía de sus compañeros y docentes.';

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default VisitaMuseo;
