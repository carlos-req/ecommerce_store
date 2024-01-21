import Layout from "../Layout";
import Home from "../scenes/home/Home";
import Error from "../Error";
import { Route, createRoutesFromElements } from "react-router-dom";
import Login from "../scenes/login/Login";
import Register from "../scenes/register/Register";
import Profile from "../scenes/profile/Profile";
import Admin from "../scenes/admin/Admin";
import Product from "../scenes/product/Product";

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/catalog/:id" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Route>
);
