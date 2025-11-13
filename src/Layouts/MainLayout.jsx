import React from "react";
import NavBar from "../Componets/Navbar";
import { Outlet } from "react-router";
import Footer from "../Componets/Footer";
import ScrollToTop from "../utility/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
