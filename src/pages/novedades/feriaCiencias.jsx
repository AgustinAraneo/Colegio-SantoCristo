import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const FeriaCiencias = () => {
  const media = [
    { type: "video", src: "/images/feriaCiencias/video5.mp4" },
    { type: "video", src: "/images/feriaCiencias/video6.mp4" },
    { type: "video", src: "/images/feriaCiencias/video1.mp4" },
    { type: "video", src: "/images/feriaCiencias/video2.mp4" },
    { type: "video", src: "/images/feriaCiencias/video3.mp4" },
    { type: "video", src: "/images/feriaCiencias/video4.mp4" },
    { type: "image", src: "/images/feriaCiencias/1.jpeg" },
    { type: "image", src: "/images/feriaCiencias/2.jpeg" },
    { type: "image", src: "/images/feriaCiencias/3.jpeg" },
    { type: "image", src: "/images/feriaCiencias/4.jpeg" },
    { type: "image", src: "/images/feriaCiencias/5.jpeg" },
  ];

  const title = "Feria de Ciencias Naturales 2do Grado";
  const subtitle = "Un evento lleno de aprendizaje y creatividad";
  const text =
    "Este año, segundo grado A, B, C y D realizaron una muestra de lo trabajado presentando en la Feria Anual de Ciencias Naturales 'Los seres vivos y su importancia en el medio ambiente'. La Feria de Ciencias 2023, coordinada por las docentes de 5to grado, resaltó el trabajo aúlico sobre el cuerpo humano.\n\nHermosa experiencia acompañada con el entusiasmo de alumnos y alumnas junto a sus familias con la guía de cada docente. ¡Felicitaciones a cada explicación por parte de los chicos y chicas en la muestra!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default FeriaCiencias;
