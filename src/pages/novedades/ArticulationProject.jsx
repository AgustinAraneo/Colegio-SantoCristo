import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const ArticulationProject = () => {
  const media = [
    { type: "image", src: "/images/ingles/articulation-project.jpeg" },
  ];

  const title = "Articulation Project";
  const subtitle =
    "Los alumnos de nivel secundario realizaron el Articulation Project";
  const text = `
    El Articulation Project es una iniciativa que permite a los alumnos de nivel secundario explorar temas interdisciplinarios, desarrollando habilidades de comunicación y trabajo en equipo. 
    A lo largo del proyecto, los estudiantes aplicaron sus conocimientos en inglés para preparar presentaciones orales y escritas, fomentando el aprendizaje práctico y el intercambio de ideas. 
    Esta experiencia contribuye al desarrollo integral de los jóvenes, preparándolos para desafíos académicos y profesionales futuros.
    `;

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default ArticulationProject;
