import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../assests/Navbar";
import Footer from "../components/Footer";

export default function FrontendLayout() {
  return (
    <>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
