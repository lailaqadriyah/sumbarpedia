import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan React Router

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          {/* Ganti '/images/sumbarpedia-header-logo.png' dengan path logo Anda */}
          <Link to="/" className="flex items-center">
            <img src="/src/img/sumped1.png" alt="Sumbarpedia Logo" className="h-12 mr-2" />
            {/* Jika teks logo: */}
            {/* <span className="text-xl font-bold">Sumbarpedia</span> */}
          </Link>
        </div>

        {/* Center Section: Search Input */}
        <div className="flex-grow max-w-sm mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Right Section: Navigation and User Icon */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white font-medium">About</Link>
          <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;