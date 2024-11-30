import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const Temaiken = () => {
  const media = [
    { type: "image", src: "/images/temaiken/2a.jpeg" },
    { type: "image", src: "/images/temaiken/2b.jpeg" },
    { type: "image", src: "/images/temaiken/2c.jpeg" },
    { type: "image", src: "/images/temaiken/2d.jpeg" },
    { type: "image", src: "/images/temaiken/2doo.jpeg" },
    { type: "image", src: "/images/temaiken/ganzos.jpeg" },
    { type: "image", src: "/images/temaiken/tortuga.jpeg" },
    { type: "image", src: "/images/temaiken/medusa.jpeg" },
    { type: "image", src: "/images/temaiken/flamengos.jpeg" },
    { type: "video", src: "/images/temaiken/flamengos-video.mp4" },
    { type: "video", src: "/images/temaiken/peces.mp4" },
    { type: "video", src: "/images/temaiken/tiburon.mp4" },
    { type: "video", src: "/images/temaiken/tigre.mp4" },
  ];

  const title = "Viaje a Temaiken 2023";
  const subtitle = "Aprendiendo y explorando la vida animal";
  const text =
    "Este año, 2° grado ha tenido la oportunidad de realizar un paseo por TEMAIKEN.\n\nPudimos compartir esta hermosa experiencia que nos permitió conocer mucho sobre los animales que viven allí: suricatas, tigres de bengala, yaguaretés, murciélagos, cebras, tortugas, flamencos y muchos más. También pudimos recorrer el acuario. ¡Cuántas especies conocimos! ¡Vimos un tiburón! ¡Qué emoción!\n\nAprendimos mucho: escuchando a las guías, a nuestros maestros y leyendo los carteles en el espacio de cada animal. Almorzamos rico y disfrutamos con amigos y las seños de una nueva experiencia. Nos sacaron muchas fotos y al regreso pudimos plasmar en nuestros cuadernos lo que aprendimos y más nos gustó.\n\n¡TEMAIKEN NOS ENCANTÓ!";

  return (
    <NovedadesLayout
      media={media}
      title={title}
      subtitle={subtitle}
      text={text}
    />
  );
};

export default Temaiken;
