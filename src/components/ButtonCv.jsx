import React from "react";

const GmailButton = () => {
  const recipientEmail = "inscripcionespri2021@gmail.com";
  const subject = "CV - (Tu Nombre)";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}`;
    window.open(gmailUrl, "_blank");
  };

  return <button onClick={handleClick} className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-l-2xl rounded-r-2xl shadow-lg w-[10rem] h-[2.7rem] text-lg font-semibold font-Montserrat text-white transition duration-500 hover:scale-105">Contáctanos</button>
};

export default GmailButton;