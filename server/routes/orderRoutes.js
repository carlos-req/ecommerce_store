import express from "express";
import {
  ordersMade,
  orderMaking,
  orderMade,
  ordersMadeByUser,
} from "../controllers/orderController.js";

const router = express.Router();

// All the routes related to orders

//GET All orders made
router.get("/", ordersMade);

//POST Order being made
router.post("/", orderMaking);

//GET individual order made
router.get("/:id", orderMade);

//GET orders made by an individual
router.get("/user/:userId", ordersMadeByUser);

export default router;
