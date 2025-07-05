import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const ExamenIngles = () => {
  const media = [{ type: "image", src: "/images/examenes-ingles-2025/1.jpg" }];

  const title = "Entrega de Certificados de Inglés";
  const subtitle =
    "Alumnos recibieron certificados internacionales de inglés en los niveles A2 y B1.";
  const text =
    "Felicitamos a los estudiantes que han alcanzado un nuevo logro académico al recibir sus certificados internacionales de inglés en los niveles A2 y B1. Este reconocimiento refleja su dedicación y esfuerzo en el aprendizaje del idioma, y los motiva a seguir avanzando en su formación. La entrega de certificados fue un momento especial para alumnos, familias y docentes.";
  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default ExamenIngles;
