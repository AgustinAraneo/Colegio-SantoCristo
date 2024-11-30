import Footer from "../components/desktop/Footer";
import FooterMobile from "../components/mobile/Footer";

const FooterContainer = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </div>
  );
};

export default FooterContainer;
