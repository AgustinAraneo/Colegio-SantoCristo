import React, { useState } from "react";
import AdmisionModal from "./desktop/AdmisionModal";

const GmailButton = ({ buttonName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 w-[8rem] h-[2.75rem] rounded-l-full rounded-r-full font-Montserrat text-white font-semibold transition duration-500 hover:scale-105"
        onClick={handleModalOpen}
      >
        ¡Contactanos!
      </button>
      <AdmisionModal isOpen={modalOpen} onClose={handleModalClose} buttonName={buttonName} />
    </>
  );
};

export default GmailButton;
