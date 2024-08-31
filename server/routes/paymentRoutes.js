import express from "express";
import {
    createCheckoutSession,
    checkoutSuccess,
} from "../controllers/paymentController.js";

const router = express.Router();

// All the routes related to payments

//Create payment session
router.post("/create-checkout-session", createCheckoutSession);
router.post("/checkout-success", checkoutSuccess);

export default router;
