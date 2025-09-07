import React from "react";
import { useRouter } from "next/router";
import NovedadPage from "../../components/NovedadPage";
import { novedadesData } from "../../data/novedades-data";

const NovedadPageWrapper = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Buscar la novedad por slug
  const novedad = novedadesData.find((n) => n.link === slug);

  return <NovedadPage novedad={novedad} />;
};

export default NovedadPageWrapper;
