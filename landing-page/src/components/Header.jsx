// src/components/Header.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <header className="w-full bg-gray-100 h-24 p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src="https://images-platform.99static.com/T81ORbTk7aCVnVRDvOOshtCi0MI=/137x136:1229x1228/500x500/top/smart/99designs-contests-attachments/66/66241/attachment_66241977"
          alt="Logo"
          className="w-5 h-5 mr-2"
        />
        
      {/* Navigation Buttons  */}
      <nav className="flex items-center space-x-8">
        <button className="text-gray-800 hover:underline focus:outline-none">Home</button>
        <button className="text-gray-800 hover:underline focus:outline-none">Services</button>
        <button className="text-gray-800 hover:underline focus:outline-none">Features</button>
        <button className="text-gray-800 hover:underline focus:outline-none">Products</button>
        <button className="text-gray-800 hover:underline focus:outline-none">Testimonials</button>
        <button className="text-gray-800 hover:underline focus:outline-none">FAQ</button>
      </nav>


        {/* Login/Signup  */}
        <div className="flex items-center space-x-4">
        <button className="text-gray-800 hover:underline focus:outline-none">Login</button>
        <button className="text-gray-800 hover:underline focus:outline-none">Signup</button>
      </div>
      
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Lessons and Insights from 8 years</h2>

        <p className="text-sm mb-6">Where to grow your business as a photographer: site or social media?</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Register
        </button>
      </div>
    </div>
    
    </header>
  );
};


export default Header;
