import React from "react";
import NovedadesLayout from "../../components/NovedadesLayout";

const Test = () => {
  const media = [
    { type: "image", src: "/images/charla-tdh/1.jpeg" },
    { type: "video", src: "/images/sala-de-5/sala-5.mp4" },
    { type: "image", src: "https://via.placeholder.com/1296x700/FF0000" },
  ];

  const title = "Así festejamos el Día de la Independencia";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return <NovedadesLayout media={media} title={title} text={text} />;
};

export default Test;
