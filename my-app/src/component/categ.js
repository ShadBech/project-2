import React from 'react';

const Categ = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-800 text-white">
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <button className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-l-full">
            All Categories ▾
          </button>
          <div className="absolute hidden group-hover:block bg-white text-gray-700 shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Category 1</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Category 2</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Category 3</button>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="px-4 py-2 w-96 rounded-r-full bg-white text-gray-700 focus:outline-none" 
        />
        <button className="px-4 py-2 bg-white text-gray-700 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-8">
        <span>FREE SHIPPING OVER $199</span>
        <span>30 DAYS MONEY BACK</span>
        <span>100% SECURE PAYMENT</span>
      </div>
    </div>
  );
};



export default Categ;
