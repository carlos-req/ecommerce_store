import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./scenes/global/AdminNavbar";

const AdminLayout = () => {
  return (
    <React.Fragment>
      <AdminNavbar />
      <Outlet />
    </React.Fragment>
  );
};

export default AdminLayout;
