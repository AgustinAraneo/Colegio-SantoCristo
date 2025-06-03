import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const PromoEnAccion = () => {
  const media = [{ type: "image", src: "/images/promo-en-accion/promo.png" }];

  const title = "La Promo En Acción";
  const subtitle = "Los 6tos años organizaron una Feria del Plato";
  const text =
    "Los estudiantes de 6to año demostraron su espíritu solidario y emprendedor organizando una colorida Feria del Plato. Con creatividad y entusiasmo, prepararon deliciosas comidas caseras para compartir con toda la comunidad educativa. El evento no solo permitió recaudar fondos para sus proyectos de fin de curso, sino que también fortaleció los lazos entre alumnos, docentes y familias, celebrando el trabajo en equipo y la participación activa.";

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
