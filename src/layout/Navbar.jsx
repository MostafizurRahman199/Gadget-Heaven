import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ShoppingBadge from '../Components/ShoppingBadge'
import WishListBadge from '../Components/WishListBadge'
import logo from '../../public/logoo.png'

export default function Navbar({bgColor, isHomePage}) {

const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/allproducts'}>All  Products</NavLink></li>

       
</>


const textColor = isHomePage ? 'text-white' : "text-black"




  return (
    <div className={`navbar ${bgColor} md:w-10/12 mx-auto ${textColor} mt-8 md:px-4 rounded-t-2xl`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        {links}
      </ul>
    </div>
    <Link to={"/"} className="btn btn-ghost text-base md:text-xl ">
        <img className='w-6 md:w-12  md:h-12 ' src={logo} alt="" />
        Gadget Heaven
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {links}
    </ul>
  </div>
  <div className="navbar-end md:gap-4 ">
    <ShoppingBadge isHomePage={textColor} />
    <WishListBadge isHomePage={textColor}/>
  </div>
</div>
  )
}
