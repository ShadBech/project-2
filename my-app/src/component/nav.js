import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/4331/41bc/8c7a66505619b246757b0e023183dbb2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTQd8oCBIYIX4qmRSwXI6UvH97rYgDvD5vER7Rv9YG1CsdMQStk1wLTgXNx36OQqTPqJEVWmUXxj6SFxmkYvt14SeTKrZCUk0L8IFdTqXauv2KwaaENr9OGzBNxBFyTrgMHSVTVf5Sxqy3SPEfPv3kyY1lCET3J~XBuoBO3ZInBbAAbV2Wg0LlaUcfd-9vqa-bLC6sw1n4Klr0WVV5060EM4b7bIRR701W~26z3CeEOe711Z3zv7Pa9U-ofq0UUIfcjclU8NwMSnWLXSdjRBw1kG70c7uW0ZZI~rIgmaWCr9frmybLSixH7dN7uPTuMLXpMKYQOpG9zWfoaa2oIGhg__"
          alt="Swoo Logo"
          className="h-10 mr-2"
        />
        <div>
          <h1 className="text-xl font-bold"></h1>
          <p className="text-sm text-gray-500"></p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative group">
          <button className="text-gray-800">HOMES ▾</button>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 2
            </button>
          </div>
        </div>
        <div className="relative group">
          <button className="text-gray-800">PAGES ▾</button>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 2
            </button>
          </div>
        </div>
        <div className="relative group">
          <button className="text-gray-800">PRODUCTS ▾</button>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Option 2
            </button>
          </div>
        </div>
        <button className="text-gray-800">CONTACT</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
        <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
        <button className="w-10 h-10 bg-gray-200 rounded-full">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
        <div className="text-right">
          <p className="text-gray-600">WELCOME</p>
          <button
            className="text-black font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            LOG IN
          </button>
          <button
            className="text-black font-bold"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register
          </button>
        </div>
        <div className="flex items-center">
          <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3v18h18"
              ></path>
            </svg>
          </button>
          <span className="ml-2 text-gray-800">$1,689.00</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
