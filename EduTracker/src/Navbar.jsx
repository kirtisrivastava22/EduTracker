// Navbar.js
import React from 'react';
import './index.css'
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white  flex items-center  px-6 py-4  w-screen absolute top-0 justify-between">
      <div className="text-xl font-bold">
        <a href="#" className="hover:text-gray-400 font-extrabold">EduTracker</a>
      </div>
      <div className='flex justify-center items-center'>
      <ul className="flex justify-center items-center gap-3 mr-10">
        <li>
          <a href="#home" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-400">Services</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ">
        Login
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
