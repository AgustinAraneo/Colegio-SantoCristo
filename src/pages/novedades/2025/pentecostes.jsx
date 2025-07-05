import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const Pentecostes = () => {
  const media = [
    { type: "image", src: "/images/pentecostes-2025/1.jpg" },
    { type: "image", src: "/images/pentecostes-2025/2.jpg" },
  ];

  const title = "Obra de Pentecostés y Jubileo";
  const subtitle =
    "Los alumnos de primaria representaron la obra de Pentecostés y celebraron el Jubileo con alegría y creatividad.";
  const text =
    "Los chicos de primaria realizaron una emotiva obra de teatro sobre Pentecostés, mostrando su entusiasmo y compromiso en cada escena. Además, participaron activamente en las actividades del Jubileo, compartiendo valores de unidad y esperanza junto a toda la comunidad educativa.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default Pentecostes;
