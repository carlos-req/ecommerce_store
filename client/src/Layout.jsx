import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
