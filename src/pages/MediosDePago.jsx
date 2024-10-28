import React from "react";
import Header from "../components/desktop/Header";
import Footer from "../components/desktop/Footer";
import Table from "../components/desktop/Table";

const MediosDePago = () => {
  return (
    <div className="relative h-full min-h-screen">
      <div>
        <Header />
      </div>
      <div className="flex flex-col content-center pt-8 font-Roboto-Regular">
        <h1 className="ml-[6rem] text-5xl text-green-800 font-bold pb-5">
          Datos Bancarios:
        </h1>
        <p className="ml-[6rem]">
          Realizar sus transferencias a la siguiente cuenta:{" "}
          <span className="text-red-600">
            (¡Atencion! Verificar la correcta escritura de los datos).
          </span>
        </p>
        <div className="mt-[1rem]">
          <Table />
        </div>
        <div className="ml-[6rem] mt-[3rem]">
          <p>Tambien disponemos con los siguientes medios de pago:</p>
          <ul className="list-disc list-inside ml-10 mt-4">
            <li>
              Pago mis cuentas (Cargar nuevamente el codigo de Pago Electronico
              Banelco - 7 Digitos)
            </li>
            <li>Pago Facil</li>
            <li>Mercado Pago</li>
          </ul>
        </div>
        <p className="ml-[6rem] mt-[1rem]">
          Por favor enviar el comprobante de pago y datos del alumno al
          siguiente mail:{" "}
          <span className="ml-1 font-semibold">santocristoadmi@gmail.com</span>
        </p>
        <div>
          <h3 className="ml-[6rem] text-5xl text-green-800 font-bold pb-5 mt-10">
            Facturación Electrónica:
          </h3>
          <p className="ml-[6rem]">
            Para realizar la solicitud de facturación electrónica, por favor,
            complete el siguiente formulario.{" "}
            <span className="font-bold text-blue-500">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf_uBgZvGoKL9oKQm9mQVxXXFe8ntsixsIbecgx0_djpykJXQ/viewform"
                rel="noreferrer"
                target="_blank"
              >
                Haga click aquí.
              </a>
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="ml-[6rem] text-5xl text-green-800 font-bold pb-5 mt-10">
            Pagá con QR:
          </h3>
          <img
            src="/images/qr-stocristo.png"
            className="w-auto h-auto flex justify-center mx-auto"
            alt="qr de pago"
          />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MediosDePago;
