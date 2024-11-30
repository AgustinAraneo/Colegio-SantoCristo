import { Liston } from "../components/icons/Liston";
import FooterContainer from "../components/FooterContainer";
import HeaderContainer from "../components/HeaderContainer";
import { Tablero } from "../components/icons/Tablero";
import { LibroAbierto } from "../components/icons/LibroAbierto";

const Ingles = () => {
  return (
    <div className="font-Montserrat">
      <HeaderContainer />
      {/* DESKTOP */}
      <div className="flex-col gap-20 w-full hidden md:flex pb-20">
        <div className="h-[calc(100vh-65px)] md:h-[calc(100vh-106px)]">
          <div className="h-[50vh] bg-[#166534] relative">
            <div className="xl:max-w-[1410px] md:px-4 lg:px-20 xl:px-10 2xl:px-0 mx-auto pt-10 w-full items-center flex text-white">
              <div className="w-1/2">
                <hr className="w-[100px] bg-white h-[1px] " />
                <h3 className="font-bold text-[50px] lg:text-[70px] leading-[69px]">
                  Inglés <br /> Santo Cristo
                </h3>
              </div>
              <div className="w-1/2">
                <h6 className="text-[14px] lg:text-[16px] leading-[23px] font-medium">
                  El lenguaje es esencial para la naturaleza humana, como
                  herramienta de pensamiento y comunicación que impulsa el
                  desarrollo integral. Aprender una lengua extranjera enriquece
                  el intelecto, fomenta el pensamiento crítico y abre la mente a
                  otras culturas, promoviendo la diversidad.
                </h6>
              </div>
            </div>
            <div className="w-full max-w-[1410px] h-[585px] bg-banner-ingles absolute left-1/2 2xl:top-1/2 lg:top-[60%] transform -translate-x-1/2 bg-cover bg-center"></div>
          </div>
        </div>
        <div className="xl:max-w-[1410px] md:px-4 lg:px-20 xl:px-10 2xl:px-0 mx-auto">
          <p className="text-[16px] leading-[30px] pt-[12%] 2xl:pt-0">
            El aprendizaje de un nuevo idioma desde una edad temprana contribuye
            a ampliar la visión del mundo y fomenta el desarrollo de habilidades
            cognitivas como la memoria, la resolución de problemas y el
            pensamiento crítico y creativo. Además, promueve la curiosidad, la
            exploración de intereses y la capacidad de conocer y utilizar otros
            códigos lingüísticos brindando la posibilidad de responder con
            flexibilidad a una realidad cambiante y construir su identidad en el
            marco de contextos cada vez más globalizados.
            <br />
            <br />
            Es justamente en el contexto de la globalización y la expansión del
            conocimiento científico-tecnológico donde el idioma inglés alcanza
            una dimensión universal, cobrando un uso generalizado. Por lo tanto,
            el aprendizaje del inglés es fundamental para el desarrollo
            personal, académico y profesional de los estudiantes.
            <br />
            <br />
            Es por este motivo que, en la Comunidad Educativa Santo Cristo,
            nuestros estudiantes cuentan con la enseñanza del idioma inglés
            desde el nivel inicial (sala de 4 años) hasta el nivel secundario.
            El trabajo articulado y coordinado entre los distintos niveles
            constituye una herramienta esencial para que los alumnos puedan
            adquirir y apropiarse del idioma
          </p>
        </div>
        <div className="xl:max-w-[1410px] md:px-4 lg:px-20 xl:px-10 2xl:px-0 mx-auto flex flex-col w-full">
          <div className="flex">
            <div className="w-1/2 bg-banner-rect-1 h-[835px] bg-cover bg-center" />
            <div className="w-1/2 bg-banner-verde bg-cover h-[835px] flex flex-col p-10 xl:p-20 gap-4 lg:gap-8 xl:gap-10">
              <h5 className="text-[#FFE7BB] text-[19px] lg:text-[22px] xl:text-[30px] font-bold leading-[43px]">
                Explorando nuevas formas de comunicación desde NIvel Inicial
              </h5>
              <h6 className="text-white font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-[24px]">
                En el jardín Virgen Niña se  utiliza la metodología basada en la
                comprensión y expresión oral, clave para la enseñanza de una
                lengua extranjera.
                <br />
                <br />
                Los niños cuentan con dos estímulos de 30 minutos semanales de
                inglés en las salas de cuatro y cinco años, realizando
                actividades lúdicas, canciones y cuentos que se integran con los
                proyectos áulicos brindando un ambiente que propicia la
                interacción natural y holística con el idioma extranjero.
                <br />
                <br />
                 La expresión oral se desarrolla espontáneamente, creando un
                entorno seguro donde los niños interiorizan y gradualmente
                producen la lengua. El enfoque es motivar desde el primer
                contacto con el idioma permitiendo a los niños familiarizarse
                con nuevas formas de comunicación. Se incorpora también la
                robótica a través del uso de la programación y la introducción
                al pensamiento computacional.
              </h6>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 bg-banner-verde-rotado bg-cover h-[835px] flex flex-col p-10 xl:p-20 gap-4 lg:gap-8 xl:gap-10">
              <h5 className="text-[#FFE7BB] text-[19px] lg:text-[22px] xl:text-[30px] font-bold leading-[43px]">
                Construyendo nuevos conocimientos desde el Nivel Primario
              </h5>
              <h6 className="text-white font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-[24px]">
                La articulación entre niveles es la piedra fundamental para que
                los alumnos puedan continuar construyendo el idioma de manera
                gradual, inmersos en una experiencia que les permita disfrutar,
                explorar y apoyarse en los conocimientos previos que faciliten
                el proceso de aprendizaje.
                <br />
                <br />
                El Nivel Primario cuenta con estímulos de inglés desde primer
                ciclo y se intensifican en segundo ciclo contando con un total
                de tres horas semanales.
                <br />
                <br />
                Se implementan actividades de lectura, escritura, comprensión
                auditiva y oralidad adaptadas al desarrollo de los alumnos,
                promoviendo un manejo cada vez más preciso del idioma. La
                enseñanza del inglés se integra con otras áreas, alineándose con
                la educación en la fe, la ESI, la educación ambiental y el uso
                de recursos tecnológicos.
              </h6>
            </div>
            <div className="w-1/2 bg-banner-rect-2 h-[835px] bg-cover bg-center" />
          </div>
          <div className="flex">
            <div className="w-1/2 bg-banner-rect-1 h-[835px] bg-cover bg-center" />
            <div className="w-1/2 bg-banner-verde bg-cover h-[835px] flex flex-col p-10 xl:p-20 gap-4 lg:gap-8 xl:gap-10">
              <h5 className="text-[#FFE7BB] text-[19px] lg:text-[22px] xl:text-[30px] font-bold leading-[43px]">
                Tendiendo puentes interculturales
              </h5>
              <h6 className="text-white font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-[24px]">
                En el nivel secundario, los alumnos asumen un rol activo en su
                aprendizaje, desarrollando autonomía e independencia mediante
                estrategias que fortalecen sus saberes.
                <br />
                <br />
                A través de actividades de inmersión en el idioma, los
                estudiantes comparten vocabulario, ideas y conceptos en espacios
                motivadores que resaltan la importancia de la comunicación,
                valoran su propia cultura y exploran otras culturas y
                cosmovisiones. Desde tercer año, disponen de tres horas
                semanales de inglés para ampliar su dominio del idioma y,
                opcionalmente, presentar exámenes internacionales.
                <br />
                <br />
                Para vivir el inglés de manera activa, se organizan actividades
                como obras de teatro, puppet shows, salidas didácticas, clases
                abiertas y campamentos de inmersión, que promueven la
                participación, la autonomía y la interacción entre niveles,
                enriqueciendo su experiencia educativa.
              </h6>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[1410px] md:px-4 lg:px-20 xl:px-10 2xl:px-0 mx-auto flex flex-col gap-10">
          <h2 className="text-[#024430] font-bold  text-[50px] lg:text-[70px] leading-[60px] text-center">
            Exámenes Internacionales
          </h2>
          <h6 className="text-[#3F4E50] text-[18px] leading-[30px]">
            La necesidad creciente de acreditar los conocimientos a niveles
            internacionales se hace presente cada vez más en el mundo laboral y
            académico. En ese marco, nuestra institución se propone presentar
            alumnos para rendir exámenes internacionales en ANGLIA, entidad
            examinadora internacional que actualmente opera en más de 50 países
            alrededor del mundo.
            <br />
            <br />
            Los exámenes Anglia son exámenes oficiales de inglés que certifican
            el dominio del idioma según el MCER (Marco Común Europeo de
            Referencia). Los mismos son certificados y avalados a través de la
            universidad de Chichester, Inglaterra. 
          </h6>
          <h4 className="text-[#024430] font-semibold  text-[30px] lg:text-[36px] leading-[45px] text-center pt-10">
            Los exámenes internacionales brindan:
          </h4>
          <div className="flex justify-between w-full max-w-[90%] lg:max-w-[80%] mx-auto pt-4">
            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <Liston />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Reconocimiento <br /> internacional de los títulos
              </p>
            </div>

            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <Tablero />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Variedad de exámenes según <br /> los objetivos alcanzados
              </p>
            </div>

            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <LibroAbierto />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Enfoque de aprendizaje <br />
                alentador y motivador
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex flex-col gap-6 md:hidden text-white">
        <div className="flex flex-col gap-4 bg-[#166534] px-6 py-2 ">
          <h3 className="font-bold text-[48px]  leading-[69px]">
            Inglés <br /> Santo Cristo
          </h3>
          <h5 className="text-[16px] font-medium leading-6 pb-6">
            El lenguaje es esencial para la naturaleza humana, como herramienta
            de pensamiento y comunicación que impulsa el desarrollo integral.
            Aprender una lengua extranjera enriquece el intelecto, fomenta el
            pensamiento crítico y abre la mente a otras culturas, promoviendo la
            diversidad.
          </h5>
          <div className="h-[420px] w-[320px] bg-banner-ingles bg-center bg-cover rounded-[8px] mb-10" />
        </div>
        <div className="px-6">
          <h6 className="text-[#3F4E50] leading-6 text-[14px]">
            El aprendizaje de un nuevo idioma desde una edad temprana contribuye
            a ampliar la visión del mundo y fomenta el desarrollo de habilidades
            cognitivas como la memoria, la resolución de problemas y el
            pensamiento crítico y creativo. Además, promueve la curiosidad, la
            exploración de intereses y la capacidad de conocer y utilizar otros
            códigos lingüísticos brindando la posibilidad de responder con
            flexibilidad a una realidad cambiante y construir su identidad en el
            marco de contextos cada vez más globalizados.
            <br />
            <br />
            Es justamente en el contexto de la globalización y la expansión del
            conocimiento científico-tecnológico donde el idioma inglés alcanza
            una dimensión universal, cobrando un uso generalizado. Por lo tanto,
            el aprendizaje del inglés es fundamental para el desarrollo
            personal, académico y profesional de los estudiantes.
            <br />
            <br />
            Es por este motivo que, en la Comunidad Educativa Santo Cristo,
            nuestros estudiantes cuentan con la enseñanza del idioma inglés
            desde el nivel inicial (sala de 4 años) hasta el nivel secundario.
            El trabajo articulado y coordinado entre los distintos niveles
            constituye una herramienta esencial para que los alumnos puedan
            adquirir y apropiarse del idioma.
          </h6>
        </div>
        <div>
          {/* RECT 1 */}
          <div className="flex flex-col">
            <div className="w-full h-[450px] bg-banner-rect-1 bg-cover bg-center" />
            <div className="bg-banner-verde px-4 py-6 flex flex-col gap-4">
              <h3 className="font-bold leading-8 text-[25px] text-[#FFE7BB] ">
                Explorando nuevas formas de comunicación desde Nivel Inicial
              </h3>
              <h6 className="text-[13px] font-medium left-5">
                En el jardín Virgen Niña se  utiliza la metodología basada en la
                comprensión y expresión oral, clave para la enseñanza de una
                lengua extranjera.
                <br />
                <br />
                Los niños cuentan con dos estímulos de 30 minutos semanales de
                inglés en las salas de cuatro y cinco años, realizando
                actividades lúdicas, canciones y cuentos que se integran con los
                proyectos áulicos brindando un ambiente que propicia la
                interacción natural y holística con el idioma extranjero.
                <br />
                <br />
                La expresión oral se desarrolla espontáneamente, creando un
                entorno seguro donde los niños interiorizan y gradualmente
                producen la lengua. El enfoque es motivar desde el primer
                contacto con el idioma permitiendo a los niños familiarizarse
                con nuevas formas de comunicación. Se incorpora también la
                robótica a través del uso de la programación y la introducción
                al pensamiento computacional
              </h6>
            </div>
          </div>
          {/* RECT 2 */}
          <div className="flex flex-col">
            <div className="w-full h-[450px] bg-banner-rect-2 bg-cover bg-center" />
            <div className="bg-banner-verde px-4 py-6 flex flex-col gap-4">
              <h3 className="font-bold leading-8 text-[25px] text-[#FFE7BB] ">
                Construyendo nuevos conocimientos desde el Nivel Primario
              </h3>
              <h6 className="text-[13px] font-medium left-5">
                La articulación entre niveles es la piedra fundamental para que
                los alumnos puedan continuar construyendo el idioma de manera
                gradual, inmersos en una experiencia que les permita disfrutar,
                explorar y apoyarse en los conocimientos previos que faciliten
                el proceso de aprendizaje.
                <br />
                <br />
                El Nivel Primario cuenta con estímulos de inglés desde primer
                ciclo y se intensifican en segundo ciclo contando con un total
                de tres horas semanales
                <br />
                <br />
                Se implementan actividades de lectura, escritura, comprensión
                auditiva y oralidad adaptadas al desarrollo de los alumnos,
                promoviendo un manejo cada vez más preciso del idioma. La
                enseñanza del inglés se integra con otras áreas, alineándose con
                la educación en la fe, la ESI, la educación ambiental y el uso
                de recursos tecnológicos.
              </h6>
            </div>
          </div>
          {/* RECT 3 */}
          <div className="flex flex-col">
            <div className="w-full h-[450px] bg-banner-rect-3 bg-cover bg-center" />
            <div className="bg-banner-verde px-4 py-6 flex flex-col gap-4">
              <h3 className="font-bold leading-8 text-[25px] text-[#FFE7BB] ">
                Tendiendo puentes interculturales
              </h3>
              <h6 className="text-[13px] font-medium left-5">
                En el nivel secundario, los alumnos asumen un rol activo en su
                aprendizaje, desarrollando autonomía e independencia mediante
                estrategias que fortalecen sus saberes.
                <br />
                <br />
                A través de actividades de inmersión en el idioma, los
                estudiantes comparten vocabulario, ideas y conceptos en espacios
                motivadores que resaltan la importancia de la comunicación,
                valoran su propia cultura y exploran otras culturas y
                cosmovisiones. Desde tercer año, disponen de tres horas
                semanales de inglés para ampliar su dominio del idioma y,
                opcionalmente, presentar exámenes internacionales.
                <br />
                <br />
                Para vivir el inglés de manera activa, se organizan actividades
                como obras de teatro, puppet shows, salidas didácticas, clases
                abiertas y campamentos de inmersión, que promueven la
                participación, la autonomía y la interacción entre niveles,
                enriqueciendo su experiencia educativa.
              </h6>
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-6 pb-10">
          <h2 className="text-[#024430] text-center font-bold text-[32px]">
            Exámenes Internacionales
          </h2>
          <h5 className="text-[#3F4E50] text-[14px] leading-7">
            La necesidad creciente de acreditar los conocimientos a niveles
            internacionales se hace presente cada vez más en el mundo laboral y
            académico. En ese marco, nuestra institución se propone presentar
            alumnos para rendir exámenes internacionales en ANGLIA, entidad
            examinadora internacional que actualmente opera en más de 50 países
            alrededor del mundo.
            <br />
            <br />
            Los exámenes Anglia son exámenes oficiales de inglés que certifican
            el dominio del idioma según el MCER (Marco Común Europeo de
            Referencia). Los mismos son certificados y avalados a través de la
            universidad de Chichester, Inglaterra.
          </h5>
          <h4 className="text-[#024430] text-center font-semibold text-[25px]">
            Los exámenes internacionales brindan:
          </h4>
          <div className="flex flex-col justify-center items-center mx-auto gap-10 w-full ">
            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <img
                  src="/images/Ingles/liston.png"
                  alt="liston"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Reconocimiento <br /> internacional de los títulos
              </p>
            </div>

            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <img
                  src="/images/Ingles/tabla.png"
                  alt="tablero"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Variedad de exámenes según <br /> los objetivos alcanzados
              </p>
            </div>

            <div className="flex flex-col gap-2 w-fit">
              <div className="bg-[#024430] w-fit rounded-full p-4 mx-auto">
                <img
                  src="/images/Ingles/libro-abierto.png"
                  alt="libro abierto"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <p className="text-[#3F4E50] text-[14px] lg:text-[16px] leading-7 text-center font-medium">
                Enfoque de aprendizaje <br />
                alentador y motivador
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default Ingles;
