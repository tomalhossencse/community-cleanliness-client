import React from "react";
import NavBar from "../Componets/Navbar";
import { Outlet } from "react-router";
import Footer from "../Componets/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
