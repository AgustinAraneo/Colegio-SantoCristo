import React from "react";
import NovedadesLayout from "./NovedadesLayout";

const NovedadPage = ({ novedad }) => {
  if (!novedad) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#024430] mb-4">
            Novedad no encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            La novedad que buscas no existe o ha sido eliminada.
          </p>
        </div>
      </div>
    );
  }

  // Función para normalizar rutas de imágenes
  const normalizeImagePath = (path) => {
    if (!path) return "";
    // Si la ruta no empieza con /, agregarla
    return path.startsWith("/") ? path : `/${path}`;
  };

  // Preparar los datos para NovedadesLayout
  const media = novedad.contenido?.media || [
    { type: "image", src: normalizeImagePath(novedad.imagen) },
  ];

  // Normalizar las rutas de las imágenes en el media
  const normalizedMedia = media.map((item) => ({
    ...item,
    src: normalizeImagePath(item.src),
  }));

  const title = novedad.titulo;
  const subtitle = novedad.descripcion;
  const text = novedad.contenido?.text || novedad.descripcion;

  return (
    <NovedadesLayout
      media={normalizedMedia}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default NovedadPage;
