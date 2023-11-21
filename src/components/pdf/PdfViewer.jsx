import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    return (
        <div className="flex items-center justify-center h-full w-[100%]">
            <div className="relative">
                <Document
                    file="/pdfs/Normativa2024.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={800} />
                </Document>
                <div className="fixed right-[17%] bottom-0 transform -translate-y-1/2">
                    <button
                        onClick={() => handlePageChange(pageNumber - 1)}
                        disabled={pageNumber <= 1}
                        className={`text-white px-4 py-2 mr-2 ${pageNumber <= 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'
                            }`}
                    >
                        Pagina Anterior
                    </button>
                </div>
                <div className="fixed right-2 bottom-0 transform -translate-y-1/2">
                    <button
                        onClick={() => handlePageChange(pageNumber + 1)}
                        disabled={pageNumber >= numPages}
                        className={`text-white px-4 py-2 ml-2 ${pageNumber >= numPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'
                            }`}
                    >
                        Pagina Siguiente
                    </button>
                </div>
                <div className="fixed bottom-6 right-[6%] transform -translate-x-1/2">
                    <p className="text-black text-xl">
                        Pagina {pageNumber} de {numPages}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;
