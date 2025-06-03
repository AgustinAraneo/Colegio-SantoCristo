import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const PromoEnAccion = () => {
  const media = [{ type: "video", src: "/images/25-de-mayo/1.mp4" }];

  const title = "Así Se Vivió el 25 de Mayo en el Colegio Santo Cristo";
  const subtitle =
    "5 to grado A y B ju to a sus familias organizaron un NOTICIERO COLONIAL";
  const text =
    "Los estudiantes de 5° grado A y B, junto a sus familias, prepararon un noticiero colonial para conmemorar el 25 de Mayo. A través de esta actividad, aprendieron sobre los hechos históricos y compartieron una experiencia educativa y divertida.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default PromoEnAccion;
