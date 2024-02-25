import React from 'react';

function Navbar() {
  return (
    <div className="nav bg-gray-900 h-16 flex flex-row sm:flex-row items-center justify-around px-4">
      {/* Search Input */}
      <div className="search mb-4 sm:mb-0">
        <div className="relative">
          <input type="text" className="w-full sm:w-64 h-10 rounded-lg px-4 bg-white-800 text-white" placeholder="Search" />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src="../public/images/search-interface-symbol.png" alt="Search Icon" className="w-6 h-6" />
          </span>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="nav-list flex flex-row sm:flex-row gap-4">
        <a href="/" className="text-gray-300 font-normal text-sm leading-5 hover:text-gray-100">Categories</a>
        <a href="/" className="text-gray-300 font-normal text-sm leading-5 hover:text-gray-100">Website Builders</a>
        <a href="/" className="text-gray-300 font-normal text-sm leading-5 hover:text-gray-100">Today's deals</a>
      </div>
    </div>
  );
}

export default Navbar;
