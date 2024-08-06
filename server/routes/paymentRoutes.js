import express from "express";
import { paymentHandling } from "../controllers/paymentController.js";

const router = express.Router();

// All the routes related to payments

//Create payment session
router.post("/", paymentHandling);

export default router;
