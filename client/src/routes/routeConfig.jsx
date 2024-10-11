import Layout from "../Layout";
import Home from "../scenes/home/Home";
import Error from "../Error";
import { Route, createRoutesFromElements } from "react-router-dom";
import Login from "../scenes/login/Login";
import Register from "../scenes/register/Register";
import Profile from "../scenes/profile/Profile";
import Product from "../scenes/product/Product";
import Admin from "../scenes/admin/Admin";
import Checkout from "../scenes/checkout/Checkout";
import CheckoutSuccess from "../scenes/checkoutSuccess/checkoutSuccess";
import CheckoutCancel from "../scenes/checkoutCancel/CheckoutCancel";
import Catalog from "../scenes/catalog/Catalog";

export const routes = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/:id" element={<Product />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/checkout-cancel" element={<CheckoutCancel />} />
            <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
    </Route>
);
