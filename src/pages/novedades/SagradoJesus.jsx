import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const SagradoJesus = () => {
  const media = [
    { type: "video", src: "/images/sagradoJesus/sagrado-corazon-de-jesus.mp4" },
  ];

  const title = "Mes del Sagrado Corazón de Jesús";
  const subtitle = "Un mes de reflexión y bendiciones";
  const text = "¡Que Dios los bendiga a todos!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default SagradoJesus;
