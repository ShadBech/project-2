// src/components/BestSeller.jsx

import React from 'react';

const BestSeller = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">BEST SELLER IN THIS CATEGORY</h2>
      <div className="flex space-x-4 overflow-x-auto">
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $59.00</div>
          <img src="product_image_url_1" alt="Product 1" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">uLock Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 2GB</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$1,729.00 <span className="line-through text-gray-500">$2,119.00</span></div>
          <div className="text-green-500 text-sm font-bold mb-1">FREE SHIPPING</div>
          <div className="text-red-500 text-sm">Out of stock</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE</div>
          <img src="product_image_url_2" alt="Product 2" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop</h3>
          <div className="text-gray-900 font-bold text-lg mb-1">$979.00 - $1,259.00</div>
          <div className="text-gray-500 text-sm font-bold mb-1">$2.98 SHIPPING</div>
          <div className="text-gray-500 text-sm">PRE-ORDER</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $3.00</div>
          <img src="product_image_url_3" alt="Product 3" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">iSmart 24V Charger</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$9.00 <span className="line-through text-gray-500">$12.00</span></div>
          <div className="text-gray-500 text-sm font-bold mb-1">$3.98 SHIPPING</div>
          <div className="text-gray-500 text-sm">Contact</div>
        </div>
        <div className="w-60 bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-2">SAVE $199.00</div>
          <img src="product_image_url_4" alt="Product 4" className="w-24 mb-4" />
          <h3 className="text-sm text-gray-700 mb-2">OPod Pro 12.9 Inch M1 2023, 64GB + WiFi, GPS</h3>
          <div className="text-red-500 font-bold text-lg mb-1">$569.00 <span className="line-through text-gray-500">$759.00</span></div>
          <div className="text-green-500 text-sm font-bold mb-1">FREE SHIPPING</div>
          <div className="text-green-500 text-sm">In stock</div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
