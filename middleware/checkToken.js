
require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const tokenChecker = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(403).send({ message: "No token provided,please log in" });
    }

  const token = authorization.replace("Bearer", "");
  let payload;
  
  try {
    payload = jwt.verify(token, jwtSecret);
    } catch (err) {
        res.status(401).json({ message: "Unauthorized access." });
    }
    req.user = payload;
    next();
} 

module.exports = tokenChecker;