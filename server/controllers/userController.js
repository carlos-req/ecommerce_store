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
  const { email, password, firstName, lastName, role } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please fill out all fields" });
  }
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //creating new user in DB
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    if (newUser) {
      res.status(201).json({
        token: generateToken(newUser._id),
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      });
    }

    await newUser.save();
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
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    res.status(200).json({
      token: generateToken(user._id),
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    });
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

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
};

export { userRegister, userLogin, userProfile, updateProfile, usersProfile };
