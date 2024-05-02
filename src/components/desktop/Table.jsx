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
          <th className="px-4 py-2 border-[1px] border-green-900">Titular</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Alias</th>
          <th className="px-4 py-2 border-[1px] border-green-900">CBU/CVU</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Cuit</th>
          <th className="px-4 py-2 border-[1px] border-green-900">
            Nro. de Cuenta
          </th>
          <th className="px-4 py-2 border-[1px] border-green-900">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100 ">
          <td className="px-4 py-2 text-center border">Cuenta corriente</td>
          <td className="px-4 py-2 text-center border">Banco Galicia</td>
          <td className="px-4 py-2 text-center border">
            Diócesis de Avellaneda - Lanús
          </td>
          <td className="px-4 py-2 text-center border">Santocristo.Lanus</td>
          <td className="px-4 py-2 text-center border">
            0070040520000014423224
          </td>
          <td className="px-4 py-2 text-center border">30-60971452-9</td>
          <td className="px-4 py-2 text-center border">0014423-2 040-2</td>
          <td className="px-4 py-2 text-center border">
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              onClick={() =>
                copyToClipboard(
                  "Tipo de cuenta: Cuenta corriente\nBanco: Banco Galicia\nTitular: Diócesis de Avellaneda - Lanús\nAlias: Santocristo.Lanus\nCBU: 0070040520000014423224\nCuit: 30-60971452-9\nNro. de cuenta: 0014423-2 040-2"
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
