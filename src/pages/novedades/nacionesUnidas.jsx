import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const NacionesUnidas = () => {
  const media = [
    { type: "image", src: "/images/onu/portada.jpeg" },
    { type: "image", src: "/images/onu/1.jfif" },
    { type: "image", src: "/images/onu/2.jpg" },
    { type: "image", src: "/images/onu/3.jpg" },
    { type: "image", src: "/images/onu/4.jpeg" },
    { type: "image", src: "/images/onu/5.jpeg" },
    { type: "image", src: "/images/onu/6.jpeg" },
    { type: "image", src: "/images/onu/7.jpeg" },
    { type: "image", src: "/images/onu/8.jpeg" },
    { type: "image", src: "/images/onu/9.jpeg" },
    { type: "image", src: "/images/onu/10.jpeg" },
    { type: "image", src: "/images/onu/11.jpeg" },
    { type: "image", src: "/images/onu/12.jpeg" },
    { type: "image", src: "/images/onu/13.jpeg" },
  ];

  const title = "Acto Naciones Unidas";
  const subtitle = "Reflexionando y aprendiendo sobre cooperación global";
  const text =
    "El evento de Naciones Unidas es una oportunidad educativa que nos invita a reflexionar sobre la importancia de la cooperación global y el trabajo conjunto para construir un mundo mejor. Los alumnos participaron activamente en actividades que promueven valores como la solidaridad, el respeto y la responsabilidad compartida.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default NacionesUnidas;
