import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel.js";

// GET/private
const usersProfile = async (req, res) => {
  const users = await UserModel.find({});

  if (!users) {
    return res.status(400).json({ message: "No Users found" });
  }

  res.status(200).json(users);
};

// POST/public
const userRegister = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //creating new user in DB
    const newUser = new UserModel({ email, password: hashedPassword, role });
    console.log(newUser);
    await newUser.save();

    res.status(201).json({ message: "User Registered  Successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// POST/public
const userLogin = async (req, res) => {
  //login user
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    const token = jwt.sign({ id: user._id }, "ec2025mern");

    res.status(200).json({ token, userID: user._id });
  } catch (err) {
    res.status(200).json({ message: "User logged in" });
  }
};

// GET/private
const userProfile = (req, res) => {
  //get user profile
  res.status(200).json({ message: "User profile found" });
};

// PUT/private
const updateProfile = (req, res) => {
  //update user profile
  res.status(200).json({ message: "User profile Updated" });
};

export { userRegister, userLogin, userProfile, updateProfile, usersProfile };
