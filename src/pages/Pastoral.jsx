import FooterContainer from "../components/FooterContainer";
import HeaderContainer from "../components/HeaderContainer";
import React from "react";

const Pastoral = () => {
  return (
    <div className="font-Montserrat">
      <HeaderContainer />
      {/* DESKTOP */}
      <div className="hidden xl:max-w-[1410px] md:px-4 lg:px-20 xl:px-10 2xl:px-0 mx-auto  md:flex flex-col gap-10">
        <div className="w-full flex items-center text-[#024430] h-[810px] overflow-x-hidden gap-4">
          <div className="w-[40%] flex flex-col gap-4">
            <h3 className="font-bold text-[50px] xl:text-[70px] leading-[60px] xl:leading-[90px]">
              Pastoral <br />
              Santo Cristo
            </h3>
            <h6 className="text-[14px] lg:text-[16px] leading-[24px] font-medium text-[#4E6770]">
              Sharing content online allows you to craft an online persona that
              reflects your personal values and professional skills. Even if you
              only use social media occasionally, what you create, share or
              react to feeds into this public narrative. How you conduct
              yourself online is now just as important as your behavior offline
              especially when it comes to your digital marketing career.
              <br />
              <br />
              Sharing content online allows you to craft an online persona that
              reflects your personal values and professional skills. Even if you
              only use social media occasionally, what you create, share or
              react to feeds into this public narrative.
            </h6>
          </div>
          <div className="w-1/2 relative flex justify-center flex-row">
            {/* Imagen 1 */}
            <div className="w-[415px] h-[476px] relative z-10">
              <img src="/images/Pastoral/banner-1.png" alt="banner 1" />
            </div>
            {/* Imagen 2 */}
            <div className="w-[500px] h-[550px] absolute bottom-10 left-[60%] z-0">
              <img src="/images/Pastoral/banner-2.png" alt="banner 2" />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#024430] py-10 rounded-[8px]">
          <div className="xl:max-w-[1410px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 lg:px-20 xl:px-10">
            {/* Imagen */}
            <div className="flex-shrink-0">
              <div className="h-auto lg:w-[300px] xl:w-[500px]">
                <img
                  src="/images/Pastoral/educando-con-fe.png"
                  alt="Educando con fe"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Texto */}
            <div className="text-white px-10">
              <hr className="w-[100px] h-[1px] bg-white" />
              <h3 className="lg:text-[48px] text-[40px] font-bold leading-tight pt-8">
                Educando <br />
                corazones con fé.
              </h3>
              <p className="text-[13px] lg:text-[15px] xl:text-[16px] leading-[24px] mt-6 text-[#E6F4F1] font-medium">
                Access advanced order types including limit, market, stop limit
                and dollar cost averaging. Track your total asset holdings,
                values and equity over time. Monitor markets, manage your
                portfolio, and trade crypto on the go.
              </p>
              <p className="text-[13px] lg:text-[15px] xl:text-[16px] leading-[24px] mt-6 text-[#E6F4F1] font-medium">
                Access advanced order types including limit, market, stop limit
                and dollar cost averaging. Track your total asset holdings,
                values and equity over time. Monitor markets, manage your
                portfolio, and trade crypto on the go.. Access advanced order
                types including limit, market, stop limit and dollar cost
                averaging. Track your total asset holdings, values and equity
                over time. Monitor markets, manage your portfolio, and trade
                crypto on the go
              </p>
            </div>
          </div>
        </div>
        <div className="py-20 flex flex-col gap-10">
          <h2 className="text-[#024430] font-bold  text-[50px] lg:text-[70px] leading-[60px] text-center">
            Pastoral Santo Cristo
          </h2>
          <h6 className="text-[#3F4E50] text-[18px] leading-[30px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </h6>
        </div>
        <div className="w-full flex items-center gap-10 pb-10">
          <div className="w-[40%] h-[565px] bg-cover bg-center bg-banner-rect-1" />
          <div className="w-[60%] h-[565px] bg-cover bg-center bg-banner-rect-2" />
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex flex-col gap-10 md:hidden text-[#166534]">
        <div className="flex flex-col gap-4  px-6 py-2 ">
          <h3 className="font-bold text-[48px] leading-[49px] pt-2">
            Pastoral <br />
            <span className="text-[40px]">Santo Cristo</span>
          </h3>
          <h5 className="text-[16px] font-medium leading-6 pb-6 text-[#4E6770]">
            El lenguaje es esencial para la naturaleza humana, como herramienta
            de pensamiento y comunicación que impulsa el desarrollo integral.
            Aprender una lengua extranjera enriquece el intelecto, fomenta el
            pensamiento crítico y abre la mente a otras culturas, promoviendo la
            diversidad.
          </h5>
          <div className="w-full relative h-[470px]">
            {/* Imagen 1 */}
            <div className="w-[267px] h-[308px] relative z-10">
              <img src="/images/Pastoral/banner-2.png" alt="banner 1" />
            </div>
            {/* Imagen 2 */}
            <div className="w-[207px] h-[238px] absolute bottom-20 right-0 z-10">
              <img src="/images/Pastoral/banner-1.png" alt="banner 2" />
            </div>
          </div>
        </div>
        <div className="bg-[#166534] px-6 flex flex-col gap-8">
          <div className="text-white pt-6">
            <hr className="w-[100px] h-[1px] bg-white" />
            <h3 className="lg:text-[48px] text-[40px] font-bold leading-tight pt-4">
              Educando <br />
              corazones con fé.
            </h3>
            <p className="text-[13px] lg:text-[15px] xl:text-[16px] leading-[24px] mt-6 text-[#E6F4F1] font-medium">
              Access advanced order types including limit, market, stop limit
              and dollar cost averaging. Track your total asset holdings, values
              and equity over time. Monitor markets, manage your portfolio, and
              trade crypto on the go.
            </p>
            <p className="text-[13px] lg:text-[15px] xl:text-[16px] leading-[24px] mt-6 text-[#E6F4F1] font-medium">
              Access advanced order types including limit, market, stop limit
              and dollar cost averaging. Track your total asset holdings, values
              and equity over time. Monitor markets, manage your portfolio, and
              trade crypto on the go.. Access advanced order types including
              limit, market, stop limit and dollar cost averaging. Track your
              total asset holdings, values and equity over time. Monitor
              markets, manage your portfolio, and trade crypto on the go
            </p>
          </div>
          <div className="w-full h-[470px]">
            <img
              src="/images/Pastoral/educando-con-fe.png"
              alt="Educando con fe"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="px-6">
          <div className=" flex flex-col gap-6">
            <h2 className="text-[#024430] text-center font-bold text-[32px]">
              Pastoral Santo Cristo
            </h2>
            <h6 className="text-[#3F4E50] text-[14px] leading-7">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </h6>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pb-10">
          <div className="w-full h-[400px] bg-cover bg-center bg-banner-rect-1" />
          <div className="w-full h-[520px] bg-cover bg-center bg-banner-rect-2" />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default Pastoral;