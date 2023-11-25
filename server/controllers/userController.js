// GET/private
const usersProfile = (req, res) => {
  //GET all users
  res.status(200).json({ message: "Users profiles" });
};

// POST/public
const userRegister = (req, res) => {
  //register user
  res.status(200).json({ message: "User Registered" });
};

// POST/public
const userLogin = (req, res) => {
  //login user
  res.status(200).json({ message: "User logged in" });
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
