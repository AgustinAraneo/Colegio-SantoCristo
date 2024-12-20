import React from "react";
import MapColegio from "./MapColegio";
import { BsTelephoneFill, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapColegioVisual = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-auto font-Roboto-Regular justify-center m-[4rem] -mb-[10rem]">
        <div className="flex flex-col">
          <div className="">
            <MapColegio />
          </div>
          <div className="flex flex-col mt-[1rem] mx-auto">
            <div className="flex flex-auto mb-[2rem] gap-4 w-full">
              <div className="text-4xl text-green-800">
                <BsFacebook />
              </div>
              <div className="text-4xl text-green-800">
                <BsInstagram />
              </div>
            </div>
            <div className="mb-[16rem]">
              <div>
                <p className="flex flex-auto mb-[2rem]">
                  <BsTelephoneFill className="mt-1 text-xl font-bold text-green-800" />
                  <span className="ml-2 text-lg font-semibold">4247-7941</span>
                </p>
                <p className="flex flex-auto mb-[2rem]">
                  <BsTelephoneFill className="mt-1 text-xl font-bold text-green-800" />
                  <span className="ml-2 text-lg font-semibold">4249-1442</span>
                </p>
                <p className="flex flex-auto mb-[2rem]">
                  <BsTelephoneFill className="mt-1 text-xl font-bold text-green-800" />
                  <span className="ml-2 text-lg font-semibold">6079-5515</span>
                </p>
              </div>
              <div>
                <p className="flex flex-auto font-semibold">
                  <FaMapMarkerAlt className="mr-2 text-xl text-green-800" />
                  Pergamino 1749,
                  <br /> Lanús Este
                </p>
              </div>
              <div className="mt-[2rem]">
                <p className="font-bold">Horarios Administrativos:</p>
                <p>Lunes a Viernes de 9:00 a 14:00 Hs</p>
                <p className="mt-4 font-bold">Turnos Nivel Inicial:</p>
                <p>Turno Mañana y Tarde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapColegioVisual;
