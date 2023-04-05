import React from "react";

const ButtonPrimaria = () => {
    const recipientEmail = "santocristo287@yahoo.com.ar";
    const subject = "CV - (Tu Nombre)";

    const handleClick = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="test1 font-Montserrat m-2"
        >
            Contácto Primaria
        </button>
    );
};

export default ButtonPrimaria;
