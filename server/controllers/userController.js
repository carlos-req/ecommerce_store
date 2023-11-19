// aka where most of our callbacks will be for our routes.

// POST/public
const registerUser = (req, res) => {
  res.status(200).json({ message: "User Registered" });
};

export { registerUser };
