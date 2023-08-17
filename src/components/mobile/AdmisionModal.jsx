import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const AdmisionModal = ({ isOpen, onClose, buttonName, buttonLinks }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 font-Montserrat">
          <div className="flex flex-col items-center justify-center w-[85%] h-fit p-4 bg-white rounded-lg relative">
            <div className="absolute top-2 right-2">
              <button
                className="text-xl text-red-500 hover:text-red-700"
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
            </div>
            <p className="mb-2 text-lg font-semibold text-center">
              Selecciona una opción de admisión:
            </p>
            <div className="grid grid-cols-1 gap-2 font-medium">
              {buttonName.map((name, index) => (
                  <a target="_blank" rel="noopener noreferrer" href={buttonLinks[index]} key={index} className="block px-4 py-2 text-center text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-700">
                    {name}
                  </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmisionModal;
