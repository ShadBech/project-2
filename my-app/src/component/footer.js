import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
            <p className="text-green-500 text-2xl font-bold">(025) 3686 25 16</p>
            <p>257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
            <p>contact@swootechmart.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-600"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-600"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">TOP CATEGORIES</h3>
            <ul>
              <li><a href="#" className="text-gray-700">Laptops</a></li>
              <li><a href="#" className="text-gray-700">PC & Computers</a></li>
              <li><a href="#" className="text-gray-700">Cell Phones</a></li>
              <li><a href="#" className="text-gray-700">Tablets</a></li>
              <li><a href="#" className="text-gray-700">Gaming & VR</a></li>
              <li><a href="#" className="text-gray-700">Networks</a></li>
              <li><a href="#" className="text-gray-700">Cameras</a></li>
              <li><a href="#" className="text-gray-700">Sounds</a></li>
              <li><a href="#" className="text-gray-700">Office</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
            <ul>
              <li><a href="#" className="text-gray-700">About Swoo</a></li>
              <li><a href="#" className="text-gray-700">Contact</a></li>
              <li><a href="#" className="text-gray-700">Career</a></li>
              <li><a href="#" className="text-gray-700">Blog</a></li>
              <li><a href="#" className="text-gray-700">Sitemap</a></li>
              <li><a href="#" className="text-gray-700">Store Locations</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">HELP CENTER</h3>
            <ul>
              <li><a href="#" className="text-gray-700">Customer Service</a></li>
              <li><a href="#" className="text-gray-700">Policy</a></li>
              <li><a href="#" className="text-gray-700">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-700">Track Order</a></li>
              <li><a href="#" className="text-gray-700">FAQs</a></li>
              <li><a href="#" className="text-gray-700">My Account</a></li>
              <li><a href="#" className="text-gray-700">Product Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700">USD</a>
            <a href="#" className="text-gray-700">Eng</a>
          </div>
          <div>
            <form>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">SUBSCRIBE & GET 10% OFF FOR YOUR FIRST ORDER</label>
              <div className="mt-1 flex">
                <input type="email" name="email" id="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email address" />
                <button type="submit" className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">SUBSCRIBE</button>
              </div>
            </form>
            <p className="text-gray-500 text-sm mt-2">By subscribing, you're accepted the our <a href="#" className="text-gray-700 underline">Policy</a></p>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Shawonetc3. All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500"><i className="fab fa-cc-paypal"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-cc-visa"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-cc-mastercard"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-cc-stripe"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-cc-klarna"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
