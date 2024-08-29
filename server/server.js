import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
const port = process.env.PORT || 3500;

const app = express();

app.use(express.json());
app.use(cors());
connectDB();

//using userRoutes
app.use("/api/users", userRoutes);

//using productRoutes
app.use("/api/products", productRoutes);

//using orderRoutes
app.use("/api/orders", orderRoutes);

//using paymentRoutes
app.use("/create-checkout-session", paymentRoutes);

//initial route
app.get("/api", (req, res) => {
    res.status(200).send();
    console.log("server is active");
});

app.listen(port, () => {
    console.log(`I am listening on ${port}`);
});
