import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const DomingoRamos = () => {
  const media = [
    { type: "video", src: "/images/Slider/bendicion-ramos/1.mp4" },
  ];

  const title = "Bendición de Ramos";
  const subtitle =
    "Una celebración importante para nuestra comunidad educativa";
  const text =
    "En nuestro colegio, esta celebración es muy importante, ya que nos recuerda la importancia de seguir los valores cristianos y de estar siempre unidos en nuestra comunidad educativa. Durante la bendición de ramos, recordaremos las palabras de Jesús y nos comprometeremos a seguir su ejemplo de amor, compasión y servicio a los demás.\n\n¡Que Dios los bendiga a todos!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default DomingoRamos;
