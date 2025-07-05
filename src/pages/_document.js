import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Colegio Santo Cristo de Lanús: más de 50 años de excelencia educativa en zona sur de Buenos Aires. Educación integral, valores cristianos, laboratorios, biblioteca y deportes. ¡Conocé nuestra propuesta!"
          />
          <meta
            name="keywords"
            content="Colegio Santo Cristo, Instituto Santo Cristo, Lanús, colegio católico, educación Buenos Aires, escuela privada, valores cristianos, nivel inicial, primaria, secundaria, deportes, laboratorio, biblioteca"
          />
          <meta name="author" content="Comunidad Educativa Santo Cristo" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.stocristo.com.ar" />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_AR" />
          <meta property="og:title" content="Colegio Santo Cristo de Lanús" />
          <meta
            property="og:description"
            content="Educación de calidad y valores cristianos en Lanús. Más de 50 años formando personas íntegras. ¡Conocé nuestra comunidad educativa!"
          />
          <meta property="og:url" content="https://www.stocristo.com.ar" />
          <meta property="og:site_name" content="Colegio Santo Cristo" />
          <meta
            property="og:image"
            content="https://i.ibb.co/k2ckb7p/Logo-escuela.png"
          />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Colegio Santo Cristo de Lanús" />
          <meta
            name="twitter:description"
            content="Educación integral y valores cristianos en Lanús. Más de 50 años de trayectoria."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/k2ckb7p/Logo-escuela.png"
          />
          {/* Idioma alternativo */}
          <link
            rel="alternate"
            hrefLang="es"
            href="https://www.stocristo.com.ar"
          />
          <title>Colegio Santo Cristo de Lanús - Comunidad Educativa</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
