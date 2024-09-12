import express from "express";
import {
    userRegister,
    userLogin,
    userProfile,
    updateProfile,
    usersProfile,
} from "../controllers/userController.js";

const router = express.Router();

// All the routes related to user

//Get All User Profiles
router.get("/", usersProfile);

//Register User Route
router.post("/register", userRegister);

//Login User Route
router.post("/login", userLogin);

//Get User Profile
router.get("/profile/:id", userProfile);

//Update user profile
router.put("/profile/:id", updateProfile);

export default router;
