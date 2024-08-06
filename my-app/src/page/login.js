import React from 'react';


const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-blue-100 p-10 items-center justify-center">
          <img src={""} alt="Illustration" className="w-3/4" />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Welcome Back</h2>
          <p className="text-gray-500 mb-6">LOGIN TO CONTINUE</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              LOGIN
            </button>
          </form>
          <p className="mt-4">
            NEW USER?{' '}
            <a href="#" className="text-green-600 hover:underline">
              SIGN UP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
