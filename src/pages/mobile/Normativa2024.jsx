import React from "react";
import Header from "../../components/mobile/Header";
import PdfViewerMobile from "../../components/pdf/PdfViewerMobile";

const Normativa2024 = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-3xl underline underline-offset-2 font-Montserrat font-bold text-center mt-6 text-green-800">
          Normativa 2025
        </h1>
      </div>
      <div className="">
        <PdfViewerMobile />
      </div>
    </div>
  );
};

export default Normativa2024;
