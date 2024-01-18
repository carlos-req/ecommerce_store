import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import CartMenu from "./scenes/global/CartMenu";

const Layout = () => {
  return (
    <React.Fragment>
      <CartMenu />
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
