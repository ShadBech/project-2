import React from 'react';

const Uppernav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center">
        <button className="text-blue-600 mr-4">Hotline 24/7</button>
        <span className="text-gray-800">(025) 3886 25 16</span>
      </div>
      <div className="flex items-center">
        <button className="text-blue-600 mr-6">Sell on Swoo</button>
        <button className="text-blue-600 mr-6">Order Tracking</button>
        <div className="relative mr-6">
          <button className="text-blue-600">USD ▾</button>
          <div className="absolute hidden bg-white shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">USD</button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">EUR</button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">GBP</button>
          </div>
        </div>
        <div className="relative">
          <button className="text-blue-600">Eng ▾</button>
          <div className="absolute hidden bg-white shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Eng</button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Esp</button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Fra</button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Uppernav;
