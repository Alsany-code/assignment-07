// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/*  Logo (Left) */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">
              <span className="text-purple-700">CS</span> — Ticket System
            </h1>
          </div>
          
          {/* Menu Items and New Ticket Button (Right) */}

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6 ">
              <a href="#" className="hover:text-purple-600">Home</a>
              <a href="#" className="hover:text-purple-600">FAQ</a>
              <a href="#" className="hover:text-purple-600">Changelog</a>
              <a href="#" className="hover:text-purple-600">Blog</a>
              <a href="#" className="hover:text-purple-600">Download</a>
              <a href="#" className="hover:text-purple-600">Contact</a>
            </div>
            <button className="px-4 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:scale-110 transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              New Ticket
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;