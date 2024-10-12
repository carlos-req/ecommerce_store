import { Order } from "../models/orderModel.js";

// GET/private
const ordersMade = (req, res) => {
    res.status(200).json({ message: "User Registered" });
};

// POST/public
const orderMaking = (req, res) => {
    res.status(200).json({ message: "User logged in" });
};

// GET/private
const orderMade = (req, res) => {
    res.status(200).json({ message: "User profile found" });
};

// GET/private
const ordersMadeByUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const userOrders = await Order.find({ user: userId })
            .populate("user", "firstName lastName email")
            .populate("products.product", "name price")
            .sort({ createdAt: -1 });

        res.status(200).json({ orders: userOrders, success: true });
    } catch (err) {
        res.status(500).json({ message: "Failed to find user or user orders" });
    }
};

export { ordersMade, orderMaking, orderMade, ordersMadeByUser };
