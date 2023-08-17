import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const AdmisionModal = ({ isOpen, onClose, buttonName, buttonLinks }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 font-Montserrat">
          <div className="relative p-8 bg-white rounded-lg w-[30%] border-2 border-black">
            <div className="absolute right-3 top-2">
              <button
                className="text-xl text-red-500 hover:text-red-700"
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
            </div>
            <p className="mb-4 text-xl font-semibold text-center">
              Selecciona una opción de admisión:
            </p>
            <div className="grid grid-cols-1 gap-4 font-medium">
              {buttonName.map((name, index) => (
                  <a className="shadow-lg" href={buttonLinks[index]} key={index} target="_blank" rel="noopener noreferrer">
                    <button className="w-full px-4 py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-700">
                      {name}
                    </button>
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
