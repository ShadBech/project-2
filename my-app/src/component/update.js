import React from 'react';
import productsss from '../bd/prod';
import Product from './update';

function Notb() {
  const visibleProductss = productsss.filter((_, index) => ![].includes(index));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-wrap justify-between items-center py-3 border-b">
          <span className='text-gray-400 text-sm'>
            <span className='font-bold text-black'>1 - 40</span> of 120 results
          </span>
          <div className="flex items-center space-x-3">
            <span className='text-gray-400 text-sm'>Show item:</span>
            <div className="flex space-x-1 bg-gray-200 rounded-md">
              <button className="px-2 py-0.5 text-black font-bold rounded-md text-xs">24</button>
              <button className="px-2 py-0.5 font-bold text-gray-500 rounded-md text-xs">48</button>
              <button className="px-2 py-0.5 font-bold text-gray-500 rounded-md text-xs">72</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select className="px-2 py-0.5 border rounded-md text-xs">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">View</span>
            <span className="text-sm">As</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 px-1">
          {visibleProductss.map((product, index) => (
            <div key={index} className="bg-white border rounded-md shadow-sm p-2 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-24 object-cover mb-1 rounded-md" />
              <h2 className="text-sm font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-500 text-xs mb-1">{product.specs}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-black">{product.price}</span>
                {product.discount && (
                  <span className="text-xs text-red-500 line-through">{product.originalPrice}</span>
                )}
              </div>
              {product.shipping && (
                <p className="text-xs text-gray-500 mt-1">{product.shipping}</p>
              )}
              {product.availability && (
                <p className="text-xs text-green-600 mt-1">{product.availability}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-2">
        <div className="flex gap-1">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-md text-xs">
            1
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            2
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            3
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            4
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            ...
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            20
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-md text-xs">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notb;
