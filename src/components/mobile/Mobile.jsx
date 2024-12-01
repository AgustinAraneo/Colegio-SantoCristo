import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import BecasButton from "../BecasButton";

const Mobile = () => {
  return (
    <div className="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover bg-fondo relative">
      <Header />
      <Home />
      <div className="fixed right-2 bottom-2">
        <BecasButton />
      </div>
      <Footer />
    </div>
  );
};

export default Mobile;
