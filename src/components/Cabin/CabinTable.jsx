import React from "react";
import useCabins from "./useCabins";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  console.log(isLoading, cabins);

  return (
    <div className="mt-10">
      <table className="w-full bg-white/80 rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 font-semibold text-md text-left"></th>
            <th className="p-3 font-semibold text-md text-left">CABIN</th>
            <th className="p-3 font-semibold text-md text-left">CAPACITY</th>
            <th className="p-3 font-semibold text-md text-left">PRICE</th>
            <th className="p-3 font-semibold text-md text-left">DISCOUNT</th>
            <th className="p-3 font-semibold text-md text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3"></td>
            <td className="p-3">001</td>
            <td className="p-3">Fits up to 2 guests</td>
            <td className="p-3">$250.00</td>
            <td className="p-3">$50</td>
            <td className="p-3">:</td>
          </tr>
          <tr>
            <td className="p-3"></td>
            <td className="p-3">001</td>
            <td className="p-3">Fits up to 2 guests</td>
            <td className="p-3">$250.00</td>
            <td className="p-3">$50</td>
            <td className="p-3">:</td>
          </tr>
          <tr>
            <td className="p-3"></td>
            <td className="p-3">001</td>
            <td className="p-3">Fits up to 2 guests</td>
            <td className="p-3">$250.00</td>
            <td className="p-3">$50</td>
            <td className="p-3">:</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CabinTable;
