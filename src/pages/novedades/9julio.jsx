import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const NueveJulio = () => {
  const media = [
    { type: "image", src: "/images/9julio/1.jpeg" },
    { type: "image", src: "/images/9julio/2.jpeg" },
    { type: "image", src: "/images/9julio/3.jpeg" },
    { type: "image", src: "/images/9julio/4.jpeg" },
    { type: "image", src: "/images/9julio/5.jpeg" },
    { type: "image", src: "/images/9julio/6.jpeg" },
    { type: "image", src: "/images/9julio/7.jpeg" },
    { type: "image", src: "/images/9julio/8.jpeg" },
  ];

  const title = "Acto 9 de Julio";
  const subtitle = "Celebrando la independencia con orgullo y tradición";
  const text =
    "El acto del 9 de julio nos invita a reflexionar sobre nuestra historia y celebrar la independencia de nuestra nación. Este evento especial contó con la participación de alumnos y docentes en actividades que destacaron el valor de nuestra identidad nacional y el espíritu patriótico.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default NueveJulio;
