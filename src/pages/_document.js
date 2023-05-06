import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Colegio Santo Cristo</title>
                    <meta name="description" content="El Colegio Santo Cristo de Lanús es una institución educativa con más de 50 años de trayectoria en la zona sur de Buenos Aires. Ofrecemos una educación de calidad y formamos a nuestros estudiantes con valores cristianos, brindándoles las herramientas necesarias para su desarrollo integral. Contamos con un equipo docente altamente capacitado y una infraestructura moderna, que incluye laboratorios, biblioteca y espacios deportivos. ¡Conoce más sobre nuestra propuesta educativa en nuestro sitio web!" />
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
