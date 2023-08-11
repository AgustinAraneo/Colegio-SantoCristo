import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="El Colegio Santo Cristo de Lanús es una institución educativa con más de 50 años de trayectoria en la zona sur de Buenos Aires. Ofrecemos educación de calidad con valores cristianos, brindando a nuestros estudiantes herramientas para su desarrollo integral. Infraestructura moderna con laboratorios, biblioteca y espacios deportivos. ¡Conoce nuestra propuesta educativa!" />
                    <meta name="keywords" content="Colegio Santo Cristo, Instituo Santo Cristo, Colegio Santo Cristo Lanús, Colegio en Lanús, educación, valores cristianos, desarrollo integral" />
                    <meta name="author" content="Comunidad Educativa Santo Cristo" />
                    <title>Comunidad Educativa Santo Cristo - Colegio en Lanús</title>
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
