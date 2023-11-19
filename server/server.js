import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3500;
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

//returns everything on JSON
app.use(express.json());

//using userRoutes
app.use("/api/users", userRoutes);

//using profileRoutes
app.use("/api/products", productRoutes);

//initial route
app.get("/api", (req, res) => {
  res.status(200).send();
  console.log("server is active");
});

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`);
});
