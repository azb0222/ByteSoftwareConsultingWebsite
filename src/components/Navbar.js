import React from 'react';
import logo from '../assets/bytelogo.png'; // Import your logo

// Functional component
const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className = "font-bold text-base text-gray-700">Our Mission</a></li>
            <li><a className = "font-bold text-base text-gray-700">Client Stories</a></li>
            <li><a className = "font-bold text-base text-gray-700">Blog</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="h-10 w-10 mr-2 ml-4" alt="Logo" /> {/* Logo image */}
            Byte Software
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className = "font-bold text-base text-gray-700">Our Mission</a></li>
            <li><a className = "font-bold text-base text-gray-700">Client Stories</a></li>
            <li><a className = "font-bold text-base text-gray-700">Blog</a></li>

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
