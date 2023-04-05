import React, { useState } from 'react';

function Table() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-[80%] mx-auto font-Roboto-Regular shadow-xl">
            <div className="text-white flex flex-col gap-y-[0.1rem]">
                <p className="px-2 py-2 bg-green-700">Tipo de Cuenta: Cuenta Corriente</p>
                <p className="px-2 py-2 bg-green-700">Banco: Banco Galicia</p>
                <p className="px-2 py-2 bg-green-700">Titular: Instituto Santo Cristo</p>
                <p className="px-2 py-2 bg-green-700">CBU: 0070180420000000908322 </p>
                <p className="px-2 py-2 bg-green-700">CUIT: 30-66359555-1</p>
                <p className="px-2 py-2 bg-green-700">Nro. de Cuenta: 908-3 180-2</p>
                <button
                    className="text-white bg-blue-500 px-3 py-1 hover:bg-blue-600"
                    onClick={() => copyToClipboard('Tipo de cuenta: Cuenta corriente\nBanco: Banco Galicia\nTitular: Instituto Santo Cristo\nCBU: 0070180420000000908322\nCUIT: 30-66359555-1\nCUIT: 30-66359555-1\nNro. de Cuenta: 908-3 180-2')}
                >
                    Copiar Datos
                </button>
                {copied && <span className="mx-auto text-green-500 font-bold">¡Copiado!</span>}
            </div>
        </div>
    );
}

export default Table;