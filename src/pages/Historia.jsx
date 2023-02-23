import React from "react";
import Header from "@/components/desktop/Header";
import Footer from "@/components/desktop/Footer";

const Historia = () => {
  return (
    <div>
        <Header />
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Historia del Colegio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="mb-4">
              El Colegio Primario y Secundario fue fundado en el año 1950 por un grupo de educadores comprometidos con la formación integral de los jóvenes de la ciudad.
            </p>
            <p className="mb-4">
              Desde entonces, el colegio se ha destacado por su excelencia académica y su formación en valores, lo que ha permitido que muchos de sus egresados hayan destacado en diversos ámbitos profesionales y sociales.
            </p>
            <p className="mb-4">
              En el año 2000, se inauguró un moderno edificio con amplias instalaciones para brindar una educación de calidad a los estudiantes de la ciudad y la región.
            </p>
            <p className="mb-4">
              En el año 2000, se inauguró un moderno edificio con amplias instalaciones para brindar una educación de calidad a los estudiantes de la ciudad y la región.
            </p>
          </div>
          <div>
            <img src="images/foto-primaria.jpg" alt="Historia del Colegio" className="w-full" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Historia;
