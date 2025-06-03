import React, { useState } from "react";
import NovedadesCard from "./NovedadesCard";
import { novedadesData } from "../data/novedades-data";
import { RiFilter3Line } from "react-icons/ri";

const HomeNovedades = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);

  const elementosPorPagina = 5;

  const handleFiltro = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setPaginaActual(1);
    setShowModal(false);
  };

  const novedadesFiltradas =
    categoriaSeleccionada === "Todos"
      ? novedadesData
      : novedadesData.filter(
          (novedad) => novedad.categoria === categoriaSeleccionada
        );

  const indexInicio = (paginaActual - 1) * elementosPorPagina;
  const indexFin = indexInicio + elementosPorPagina;
  const novedadesPaginadas = novedadesFiltradas.slice(indexInicio, indexFin);

  const totalPaginas = Math.ceil(
    novedadesFiltradas.length / elementosPorPagina
  );

  const handlePaginaClick = (pagina) => {
    setPaginaActual(pagina);
  };

  const renderNumerosDePagina = () => {
    const paginas = Array.from(
      { length: totalPaginas },
      (_, index) => index + 1
    );
    return paginas.map((pagina) => (
      <button
        key={pagina}
        onClick={() => handlePaginaClick(pagina)}
        className={`w-10 h-10 rounded text-center flex items-center justify-center font-semibold ${
          pagina === paginaActual
            ? "bg-[#84A17D] text-white"
            : "bg-[#F4F5F6] text-black hover:bg-gray-300 transition duration-300"
        }`}
      >
        {pagina}
      </button>
    ));
  };

  return (
    <div className="font-Montserrat">
      <div className="bg-[#024430] my-10">
        <h2 className="text-[56px] leading-[55px] md:text-[96px] font-bold md:leading-[95px] text-white text-center py-28">
          Blog de <br />
          Novedades
        </h2>
      </div>

      <div className="w-full justify-center mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-fit">
          {novedadesPaginadas.map((novedad, index) => (
            <div key={index} className="mb-8">
              <NovedadesCard
                imagen={novedad.imagen}
                fecha={novedad.fecha}
                titulo={novedad.titulo}
                descripcion={novedad.descripcion}
                categoria={novedad.categoria}
                link={novedad.link}
              />
            </div>
          ))}

          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
                className={`w-10 h-10 rounded flex items-center justify-center font-bold ${
                  paginaActual === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#F4F5F6] hover:bg-gray-300"
                }`}
                disabled={paginaActual === 1}
              >
                {"<"}
              </button>
              {renderNumerosDePagina()}
              <button
                onClick={() =>
                  setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
                }
                className={`w-10 h-10 rounded flex items-center justify-center font-bold ${
                  paginaActual === totalPaginas
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#F4F5F6] hover:bg-gray-300"
                }`}
                disabled={paginaActual === totalPaginas}
              >
                {">"}
              </button>
            </div>
          )}
        </div>

        <aside className="hidden lg:block w-[400px] h-fit sticky top-4">
          <div className="bg-[#F4F5F6] p-4 rounded-[8px] shadow-redcoach-lg flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <RiFilter3Line />
              <h3 className="text-base xl:text-lg font-bold text-gray-800">
                Filtrar por nivel:
              </h3>
            </div>
            <ul className="grid lg:grid-cols-1 xl:grid-cols-2 gap-3 xl:text-base lg:text-xs">
              {[
                "Todos",
                "Inicial",
                "Primario",
                "Secundario",
                "Pastoral",
                "Ingles",
              ].map((categoria) => (
                <li key={categoria} className="mt-2">
                  <button
                    onClick={() => handleFiltro(categoria)}
                    className={`w-full py-2 px-3 text-center rounded ${
                      categoriaSeleccionada === categoria
                        ? "bg-[#84A17D] text-white font-bold"
                        : "bg-gray-200 hover:bg-gray-300 transition duration-200"
                    }`}
                  >
                    {categoria}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <button
          className="lg:hidden fixed bottom-4 right-4 bg-[#024430] text-white p-3 rounded-full shadow-lg"
          onClick={() => setShowModal(true)}
        >
          <RiFilter3Line size={24} />
        </button>

        {/* Modal para pantallas pequeñas */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Filtrar por nivel:
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Todos",
                  "Inicial",
                  "Primario",
                  "Secundario",
                  "Pastoral",
                  "Ingles",
                ].map((categoria) => (
                  <li key={categoria} className="mt-2">
                    <button
                      onClick={() => handleFiltro(categoria)}
                      className={`w-full py-2 px-3 text-center rounded ${
                        categoriaSeleccionada === categoria
                          ? "bg-[#024430] text-white font-bold"
                          : "bg-gray-200 hover:bg-gray-300 transition duration-200"
                      }`}
                    >
                      {categoria}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 w-full bg-[#84A17D] h-[40vh] flex flex-col  justify-center">
        <h5 className="text-white font-bold md:text-[64px] text-[35px] md:leading-[84px] leading-[45px] text-center">
          Sé parte de cada momento.
        </h5>
        <p className="hidden md:block text-white md:text-[18px] text-[16px] md:leading-[30px] leading-[20px] text-center">
          Mantenete atento a nuestra sección de novedades y descubrí todo lo que
          <br />
          pasa en el colegio.
        </p>
        <p className="block md:hidden pt-2 text-white md:text-[18px] text-[15px] md:leading-[30px] leading-[16px] text-center">
          Mantenete atento a nuestra sección de novedades y descubrí todo lo que
          pasa en el colegio.
        </p>
      </div>
    </div>
  );
};

export default HomeNovedades;
