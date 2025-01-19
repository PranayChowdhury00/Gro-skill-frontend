import React from "react";
import Navbar from "../Pages/Common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
