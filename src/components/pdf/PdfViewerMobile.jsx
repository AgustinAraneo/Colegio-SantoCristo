import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
                    <Page pageNumber={pageNumber} width={400} />
                </Document>

                {/* Position the previous page button on the left side of the screen */}
                <div className="fixed left-10 bottom-10">
                    <button
                        onClick={() => handlePageChange(pageNumber - 1)}
                        disabled={pageNumber <= 1}
                        className={`bg-blue-500 rounded-lg text-white px-2 py-2`}
                    >
                        <FaArrowLeft className="h-4 w-4" />
                    </button>
                </div>

                {/* Position the next page button on the right side of the screen */}
                <div className="fixed right-10 bottom-10">
                    <button
                        onClick={() => handlePageChange(pageNumber + 1)}
                        disabled={pageNumber >= numPages}
                        className={`bg-blue-500 rounded-lg text-white px-2 py-2`}
                    >
                        <FaArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;
