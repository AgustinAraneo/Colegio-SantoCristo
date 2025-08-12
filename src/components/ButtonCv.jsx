import React from "react";

const GmailButtonSecundario = () => {
  const recipientEmail = "inscripcionespri2021@gmail.com";
  const subject = "CV - (Tu Nombre)";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <button onClick={handleClick} className="test1 font-Montserrat">
      Contáctanos
    </button>
  );
};

export default GmailButtonSecundario;
