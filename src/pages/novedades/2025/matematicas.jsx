import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const Matematicas = () => {
  const media = [{ type: "image", src: "/images/certamen-matematicas/1.jpg" }];

  const title = "Certamen de Matemáticas";
  const subtitle =
    "Los alumnos desafiaron obstáculos matemáticos en el certamen, guiados por docentes y capitanes.";
  const text =
    "En el certamen de matemáticas, los estudiantes enfrentaron distintos desafíos y obstáculos matemáticos, trabajando en equipo bajo la coordinación de docentes y capitanes. La jornada promovió el pensamiento lógico, la colaboración y el entusiasmo por resolver problemas.";
  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default Matematicas;
