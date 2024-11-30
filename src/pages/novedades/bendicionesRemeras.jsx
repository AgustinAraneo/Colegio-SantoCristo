import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const BendicionesRemeras = () => {
  const media = [
    { type: "video", src: "/images/jardin/bendicion-remeras/1.mp4" },
  ];

  const title = "Bendiciones de Remeras";
  const subtitle = "Un momento especial para los egresaditos 💞";
  const text = "Bendición de las remeras de los egresaditos 💞";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default BendicionesRemeras;
