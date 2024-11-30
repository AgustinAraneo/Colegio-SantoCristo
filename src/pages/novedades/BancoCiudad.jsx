import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const BancoCiudad = () => {
  const media = [{ type: "image", src: "/images/bco-ciudad/1.jpeg" }];

  const title = "Visita del Banco Ciudad al Colegio Santo Cristo";
  const subtitle = "Una experiencia enriquecedora para los estudiantes.";
  const text =
    "Los alumnos de nivel secundario del Colegio Santo Cristo recibieron la visita del Banco Ciudad, una oportunidad enriquecedora para aprender sobre educación financiera y conocer más sobre los servicios y valores del banco. La actividad permitió a los estudiantes interactuar con profesionales, resolver dudas y entender cómo el mundo financiero puede impactar sus futuros proyectos.";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default BancoCiudad;
