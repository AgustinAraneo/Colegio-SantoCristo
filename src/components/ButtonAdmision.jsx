import React from "react";

const GmailButton = () => {
  const recipientEmail = "secundariasantocristo20@gmail.com";
  const subject = "Inscripción Nivel Inicial";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}`;
    window.open(gmailUrl, "_blank");
  };

  return <button className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105" onClick={handleClick} >¡Contactanos!</button>;
};

export default GmailButton;