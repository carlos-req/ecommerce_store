import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3500;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send();
  console.log("server is active");
});

//using userRoutes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`);
});
