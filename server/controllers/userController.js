// POST/public
const userRegister = (req, res) => {
  res.status(200).json({ message: "User Registered" });
};

// POST/public
const userLogin = (req, res) => {
  res.status(200).json({ message: "User logged in" });
};

// GET/private
const userProfile = (req, res) => {
  res.status(200).json({ message: "User profile found" });
};

// PUT/private
const updateProfile = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

export { userRegister, userLogin, userProfile, updateProfile };
