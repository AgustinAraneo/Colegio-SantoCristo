import React, { useState } from "react";

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
        <p className="px-2 py-2 bg-green-700">
          Tipo de Cuenta: Cuenta Corriente
        </p>
        <p className="px-2 py-2 bg-green-700">Banco: Santander</p>
        <p className="px-2 py-2 bg-green-700">Cuenta: CC$ 054-019772/4</p>
        <p className="px-2 py-2 bg-green-700">CBU: 0720054020000001977240</p>
        <p className="px-2 py-2 bg-green-700">Alias: Comu.santo.cristo</p>
        <button
          className="text-white bg-blue-500 px-3 py-1 hover:bg-blue-600"
          onClick={() =>
            copyToClipboard(
              "Tipo de cuenta: Cuenta corriente\nBanco: Santander\nCuenta: CC$ 054-019772/4\nCBU: 0720054020000001977240\nAlias: Comu.santo.cristo"
            )
          }
        >
          Copiar Datos
        </button>
        {copied && (
          <span className="mx-auto text-green-500 font-bold">¡Copiado!</span>
        )}
      </div>
    </div>
  );
}

export default Table;
