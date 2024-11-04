import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyProvider from "../Utils/MyProvider";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <MyProvider>
        <Navbar />
       <div className="min-h-screen w-10/12 mx-auto">
        <Outlet />
       </div>
        <Footer></Footer>
      </MyProvider>
    </div>
  );
}
