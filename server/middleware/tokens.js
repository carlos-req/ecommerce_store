import jwt from "jsonwebtoken";

const verifyTokens = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    jwt.verify(authHeader, "ec2025mern", (err) => {
      if (err) {
        return res.status(403);
      }
      next();
    });
  } else {
    return res.status(401);
  }
};

export { verifyTokens };
