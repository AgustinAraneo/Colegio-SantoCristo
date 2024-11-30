import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const FeriaCiencias5to = () => {
  const media = [
    { type: "video", src: "/images/feriaCiencias5to/video1.mp4" },
    { type: "image", src: "/images/feriaCiencias5to/1.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/2.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/3.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/4.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/5.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/6.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/7.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/8.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/9.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/10.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/11.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/12.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/13.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/14.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/16.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/17.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/19.jpeg" },
    { type: "image", src: "/images/feriaCiencias5to/20.jpeg" },
  ];

  const title = "Feria de Ciencias Naturales 5to Grado";
  const subtitle = "Explorando el cuerpo humano y los seres vivos";
  const text =
    "Este año, segundo grado A, B, C y D realizaron una muestra de lo trabajado presentando en la Feria Anual de Ciencias Naturales 'Los seres vivos y su importancia en el medio ambiente'. La Feria de Ciencias 2023, coordinada por las docentes de 5to grado, resaltó el trabajo áulico sobre el cuerpo humano.\n\nHermosa experiencia acompañada con el entusiasmo de alumnos y alumnas junto a sus familias con la guía de cada docente. ¡Felicitaciones a cada explicación por parte de los chicos y chicas en la muestra!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default FeriaCiencias5to;
