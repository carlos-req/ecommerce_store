// GET/private
const ordersMade = (req, res) => {
  res.status(200).json({ message: "User Registered" });
};

// POST/public
const orderMaking = (req, res) => {
  res.status(200).json({ message: "User logged in" });
};

// GET/private
const orderMade = (req, res) => {
  res.status(200).json({ message: "User profile found" });
};

// GET/private
const ordersMadeByUser = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

export { ordersMade, orderMaking, orderMade, ordersMadeByUser };
