import HomeNovedades from "../components/HomeNovedades";
import FooterContainer from "../components/FooterContainer";
import HeaderContainer from "../components/HeaderContainer";
import React from "react";

const Novedades = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <HeaderContainer />
      <div>
        <HomeNovedades />
      </div>
      <FooterContainer />
    </div>
  );
};

export default Novedades;
