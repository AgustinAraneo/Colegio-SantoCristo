import HeaderContainer from "../components/HeaderContainer";
import FooterContainer from "../components/FooterContainer";

const NuestrosDocentes = () => {
  const docentes = [
    {
      name: "¡Nuestro equipo de profes del nivel inicial!",
      image: "/images/docentes/profes-jardin.jpeg",
    },
    {
      name: "¡Nuestro equipo de profes del nivel inicial!",
      image: "/images/docentes/profes-jardin-2.jpeg",
    },
    {
      name: "¡Nuestro equipo de profes del nivel primario!",
      image: "/images/docentes/profes-primaria.jpeg",
    },
    {
      name: "¡Nuestro equipo de profes del nivel primario!",
      image: "/images/docentes/profes-primaria-2.jpeg",
    },
    {
      name: "¡Nuestro equipo de profes del nivel secundario!",
      image: "/images/docentes/profes-secundaria.jpeg",
    },
    {
      name: "¡Nuestro equipo de profes del nivel secundario!",
      image: "/images/docentes/profes-secundaria-2.jpeg",
    },
  ];

  return (
    <div className="bg-slate-100">
      <HeaderContainer />
      <div className="container font-Montserrat xl:px-0 px-4 ">
        <h1 className="text-4xl md:text-5xl text-green-800 font-bold pb-5 font-Montserrat mt-10">
          Conoce a nuestro equipo de docentes:
        </h1>
        <p className="w-[90%]">
          Estamos orgullosos de presentarles al increíble equipo de docentes que
          hacen posible la educación de calidad que ofrecemos en nuestro
          colegio. Nuestros profesionales están altamente capacitados y
          comprometidos con la formación integral de nuestros estudiantes. Son
          personas que, día a día, entregan lo mejor de sí para garantizar que
          cada uno de nuestros alumnos reciba una educación que les permita
          desarrollar sus habilidades y talentos.
        </p>
        <p className="border-b-2 border-green-800 mt-4 w-[95%]"></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-10">
          {docentes.map((docente) => (
            <div key={docente.name} className="relative">
              <img
                src={docente.image}
                className="w-[500px] h-[500px] rounded shadow-2xl mx-auto"
              />
              <p className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-1 px-2 text-center font-medium">
                {docente.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default NuestrosDocentes;
