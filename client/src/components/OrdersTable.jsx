import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";

const OrdersTable = (userId) => {
    const { orders, setOrders } = useContext(ShopContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOrders = async (userId) => {
        if (!userId) return;

        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}orders/user/${userId}`
            );
            setOrders(response.data);
        } catch (err) {
            const errorMessage =
                err.response?.data?.message || "Failed to fetch orders";
            setError(errorMessage);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders(userId);
    }, [userId]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <section className="flex flex-col flex-wrap items-center justify-center gap-8">
            <h3 className="mt-10 text-2xl font-bold tracking-wide uppercase text-primary">
                Orders
            </h3>
            {/* Table of ourders */}
            {orders.length > 0 ? (
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 ">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden ">
                                <table className="min-w-full text-center text-primary ">
                                    <thead className="font-medium border-b ">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-2"
                                            >
                                                Order Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-2"
                                            >
                                                Items
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-2"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-2"
                                            >
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.map((order) => (
                                            <tr
                                                className="border-b"
                                                key={order._id}
                                            >
                                                <td className="px-6 py-2 font-medium whitespace-nowrap">
                                                    {order._id}
                                                </td>
                                                <td className="px-6 py-2 whitespace-nowrap">
                                                    {order.items}
                                                </td>
                                                <td className="px-6 py-2 whitespace-nowrap">
                                                    {order.prices}
                                                </td>
                                                <td className="px-6 py-2 whitespace-nowrap">
                                                    {order.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <section className="mt-2 text-center text-primary">
                    <p className="mb-4 tracking-wider uppercase">
                        No orders yet
                    </p>
                    <Link to="/">
                        <button
                            type="submit"
                            className="px-12 py-4 text-xl font-black tracking-tighter uppercase duration-200 ease-in-out lg:px-4 lg:py-2 lg:rounded-lg bg-primary bg-opacity-80 text-secondary lg:text-base rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md hover:text-gray-600"
                        >
                            Home
                        </button>
                    </Link>
                </section>
            )}
        </section>
    );
};

export default OrdersTable;
