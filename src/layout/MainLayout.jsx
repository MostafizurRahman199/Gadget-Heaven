import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyProvider from "../Utils/MyProvider";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
  
  return (
    <div>
      <MyProvider>
      <ToastContainer position="top-left" />
        <Navbar   bgColor={isHomePage ? 'bg-[#9538E2]' : 'bg-white'} isHomePage={isHomePage}  />
            <div className="min-h-screen w-full mx-auto">
        <Outlet />
       </div>
        <Footer></Footer>
      </MyProvider>
    </div>
  );
}
