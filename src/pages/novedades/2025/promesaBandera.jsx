import React from "react";
import NovedadesLayout from "../../../components/NovedadesLayout";

const PromesaBandera = () => {
  const media = [{ type: "image", src: "/images/promesa-bandera-2025/1.jpg" }];

  const title = "Renovación de la Promesa a la Bandera";
  const subtitle =
    "Los alumnos de 6to año de secundaria renovaron su compromiso con los valores patrios.";
  const text =
    "Los estudiantes de 6to año de nivel secundario participaron en una emotiva ceremonia de renovación de la Promesa a la Bandera, reafirmando su compromiso con los valores y símbolos nacionales. La jornada estuvo marcada por palabras alusivas, reflexiones y un profundo sentido de pertenencia y orgullo.";
  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default PromesaBandera;
