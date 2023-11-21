import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3500;
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

//returns everything on JSON
app.use(express.json());

//using userRoutes
app.use("/api/users", userRoutes);

//using productRoutes
app.use("/api/products", productRoutes);

//using orderRoutes
app.use("/api/orders", orderRoutes);

//initial route
app.get("/api", (req, res) => {
  res.status(200).send();
  console.log("server is active");
});

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`);
});
