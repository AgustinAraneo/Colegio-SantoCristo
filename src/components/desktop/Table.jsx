import React from 'react';

function Table() {
  return (
    <table className="table-auto w-[90%] ml-[5%] font-Roboto-Regular shadow-xl">
      <thead>
        <tr className="bg-green-800 text-white">
          <th className="px-4 py-2 border-[1px] border-green-900">Tipo de Cuenta</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Banco</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Titular</th>
          <th className="px-4 py-2 border-[1px] border-green-900">CBU/CVU</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Alias</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Cuit</th>
          <th className="px-4 py-2 border-[1px] border-green-900">Nro de Cuenta</th>
        </tr>
      </thead>
      <tbody>
      <tr className="bg-gray-100 ">
          <td className="border px-4 py-2">Cuenta corriente</td>
          <td className="border px-4 py-2">Banco Santander</td>
          <td className="border px-4 py-2">Juan Perez</td>
          <td className="border px-4 py-2">12345678912345678912</td>
          <td className="border px-4 py-2">Santander CC</td>
          <td className="border px-4 py-2">20-12345678-3</td>
          <td className="border px-4 py-2">123456</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;