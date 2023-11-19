import express from "express";
import {
  userRegister,
  userLogin,
  userProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

// All the routes related to user

//Register User Route
router.post("/register", userRegister);

//Login User Route
router.post("/login", userLogin);

//Get User Profile
router.get("/profile", userProfile);

//Update user profile
router.put("/profile", updateProfile);

export default router;
