import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-64">
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/category/allproducts"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 font-semibold ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          All Product
        </NavLink>
        <NavLink
          to="/category/laptops"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Laptops
        </NavLink>
        <NavLink
          to="/category/phones"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Phones
        </NavLink>
        <NavLink
          to="/category/accessories"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Accessories
        </NavLink>
        <NavLink
          to="/category/smartwatches"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Smart Watches
        </NavLink>
        <NavLink
          to="/category/macbook"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          MacBook
        </NavLink>
        <NavLink
          to="/category/iphone"
          className={({ isActive }) =>
            `py-2 px-4 rounded-2xl  shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          iPhone
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
