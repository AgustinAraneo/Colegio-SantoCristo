import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const VirgenMaria = () => {
  const media = [
    { type: "video", src: "/images/jardin/virgen-maria-jardin/1.mp4" },
    { type: "video", src: "/images/jardin/virgen-maria-jardin/2.mp4" },
  ];

  const title = "Cumple Virgen María 🌟";
  const subtitle = "Celebrando con alegría y fe en el jardín";
  const text =
    "Así celebramos el cumple de la VIRGEN MARÍA en el jardín. 🎂🎉🎊";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default VirgenMaria;
