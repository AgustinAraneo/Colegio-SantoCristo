import React from 'react';

function Table() {
  return (
    <table className="table-auto w-[90%] ml-[5%] font-Roboto-Regular shadow-xl">
      <thead>
        <tr className="text-white bg-green-800">
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
          <td className="px-4 py-2 text-center border">Cuenta corriente</td>
          <td className="px-4 py-2 text-center border">Banco Santander</td>
          <td className="px-4 py-2 text-center border">Juan Perez</td>
          <td className="px-4 py-2 text-center border">12345678912345678912</td>
          <td className="px-4 py-2 text-center border">Santander CC</td>
          <td className="px-4 py-2 text-center border">20-12345678-3</td>
          <td className="px-4 py-2 text-center border">123456</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;