//database model for users
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
});

export const User = model("User", userSchema);
