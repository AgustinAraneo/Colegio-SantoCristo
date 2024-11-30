import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const FiestasPatronales = () => {
  const media = [
    { type: "image", src: "/images/fiestas-patronales/1.jpeg" },
    { type: "image", src: "/images/fiestas-patronales/2.jpeg" },
    { type: "image", src: "/images/fiestas-patronales/3.jpeg" },
    { type: "image", src: "/images/fiestas-patronales/4.jpeg" },
  ];

  const title = "Fiestas Patronales";
  const subtitle = "Celebrando nuestra tradición y comunidad";
  const text =
    "Las Fiestas Patronales representan un momento único de unión y celebración en nuestra comunidad educativa. Este evento nos invita a reflexionar sobre nuestros valores y tradiciones mientras compartimos actividades y momentos especiales que fortalecen nuestros lazos como comunidad.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default FiestasPatronales;
