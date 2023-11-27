import { Outlet } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
