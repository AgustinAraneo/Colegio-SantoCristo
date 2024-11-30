import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const SemanaESI = () => {
  const media = [
    { type: "video", src: "/images/sala-de-5/sala-5.mp4" },
    { type: "video", src: "/images/sala-de-5/sala-5-1.mp4" },
  ];

  const title = "Semana de ESI";
  const subtitle = "Empatía, respeto y trabajo en equipo";
  const text =
    "Este año, 2°grado ha tenido la oportunidad de realizar un paseo por TEMAIKEN.\n\n💛SALA AMARILLA T.T.💛 En la semana de la ESI, abordamos el tema de la EMPATÍA y el RESPETO, surgiendo grandes ideas y pensamientos. De lo que se desprendió el trabajo de las FORTALEZAS tanto individuales como grupales. Y decidimos plasmarlas en esta obra de arte efímero, dónde, durante su producción, quedaron reflejadas cada una de ellas... ACOMPAÑAR, AYUDAR, ALGRARSE, DIVERTIRSE, SONREIR, ESCUCHAR, GUIAR, CUIDAR... Y por sobre todo quedó plasmado el AMOR Y LA FELICIDAD DE HABERLO LOGRADO JUNTOS!!!\n\nLes compartimos un pedacito de todo lo trabajado, esperamos que lo disfruten tanto como nosotros! 💛Hasta la próxima!!!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default SemanaESI;
