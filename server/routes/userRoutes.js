import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// All the routes related to user

router.post("/register", registerUser);

export default router;
