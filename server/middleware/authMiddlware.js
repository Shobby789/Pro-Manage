const jwt = require("jsonwebtoken");
const { secretKey } = require("../data/key"); // Assuming you have a config file with your secret key

// Authentication middleware function
const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "You can not create a task" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the decoded user information to the request object
    next(); // Call the next middleware function in the stack
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
