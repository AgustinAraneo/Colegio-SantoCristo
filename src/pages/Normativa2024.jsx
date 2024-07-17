import React from "react";
import Header from "../components/desktop/Header";
import Footer from "../components/desktop/Footer";
import PdfViewer from "../components/pdf/PdfViewer";

const Normativa2024 = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-5xl underline underline-offset-2 font-Montserrat font-bold text-center mt-6 text-green-800">
          Normativa 2025
        </h1>
      </div>
      <div className="m-10">
        <PdfViewer ancho={800} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Normativa2024;
