import React, { useState } from "react";

function Table() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <table className="table-auto w-[90%] ml-[5%] font-Roboto-Regular shadow-xl">
      <thead>
        <tr className="text-white bg-green-800">
          <th className="px-4 py-2 border-[1px] border-green-900">
            Tipo de Cuenta
          </th>
          <th className="px-4 py-2 border-[1px] border-green-900">Banco</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Cuenta</th>
          <th className="px-4 py-2 border-[1px] border-green-900">CBU</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Alias</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100 ">
          <td className="px-4 py-2 text-center border">Cuenta corriente</td>
          <td className="px-4 py-2 text-center border">Santander</td>
          <td className="px-4 py-2 text-center border">CC$ 054-019772/4</td>
          <td className="px-4 py-2 text-center border">
            0720054020000001977240
          </td>
          <td className="px-4 py-2 text-center border">Comu.santo.cristo</td>
          <td className="px-4 py-2 text-center border">
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              onClick={() =>
                copyToClipboard(
                  "Tipo de cuenta: Cuenta corriente\nBanco: Santander\nCuenta: CC$ 054-019772/4\nCBU: 0720054020000001977240\nAlias: Comu.santo.cristo"
                )
              }
            >
              Copiar datos
            </button>
            {copied && (
              <span className="ml-2 text-green-500 font-bold">¡Copiado!</span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
