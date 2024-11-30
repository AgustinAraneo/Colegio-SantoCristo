import Header from "../components/desktop/Header";
import HeaderMobile from "../components/mobile/Header";

const HeaderContainer = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
    </div>
  );
};

export default HeaderContainer;
