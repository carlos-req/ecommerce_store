import Layout from "../Layout";
import Home from "../scenes/home/Home";
import Error from "../Error";
import { Route, createRoutesFromElements } from "react-router-dom";
import Login from "../scenes/login/Login";
import Register from "../scenes/register/Register";
import Profile from "../scenes/profile/Profile";
import Product from "../scenes/product/Product";
import Mens from "../scenes/mens/Mens";
import Womens from "../scenes/womens/Womens";
import AdminLayout from "../AdminLayout";
import Dashboard from "../scenes/admin/dashboard/Dashboard";
import ProductList from "../scenes/admin/productlist/ProductList";
import ProductEdit from "../scenes/admin/productedit/ProductEdit";
import ProductUpload from "../scenes/admin/productUpload/ProductUpload";
import Stats from "../scenes/admin/stats/Stats";
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
        </Route>
        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="admin/products" element={<ProductList />} />
            <Route path="admin/products/:id" element={<ProductEdit />} />
            <Route path="admin/products/upload" element={<ProductUpload />} />
            <Route path="admin/stats" element={<Stats />} />
        </Route>
        <Route path="*" element={<Error />} />
    </Route>
);
