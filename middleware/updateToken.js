require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const models = require("../db/models");

const secret = process.env.JWT_SECRET;

const generateAccessToken = (userId) => {
  const payload = {
    userId,
    type: "access",
  };
  const options = { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN };
  return jwt.sign(payload, secret, options);
};

const generateRefreshToken = () => {
  const payload = {
    id: uuidv4(),
    type: "refresh",
  };
  const options = { expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN };
  return {
    id: payload.id,
    token: jwt.sign(payload, secret, options),
  };
};

const updateDRefreshToken = async (tokenId, userId) => {
  try {
    let token;
    token = await models.token.findOne({ where: { userId } });
    if (!token) return await models.token.create({ userId, tokenId });
    return await token.update({ userId, tokenId });
  } catch (err) {
      res.status(401).json({ message: err.message});
      throw error;
  };
};

const updateTokens = async (userId) => {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken();
  try {
    await updateDRefreshToken(refreshToken.id, userId);
  } catch (err) {
     res.status(401).json({ err:true, message: "token has not been updated"});
  }
  return {
    accessToken,
    refreshToken: refreshToken.token,
  };
};

const tokenChecker = (req, res, next) => {

  // let { authorization } = req.headers;
    // const token = authorization.replace("Bearer", "");
  try {
    const token = req.headers.authorization.split(" ")[1];

    // if (!authorization || !authorization.startsWith("Bearer")) {
    //   return res.status(403).json({ message: "No token provided,please log in" });
    // };

    console.log(token);
    jwt.verify(token, secret,(err,decoded) => {
      if (err) {
        return res.status(400).json({ message : "verification is false"});
      // } else {
      //   return res.status(200).json({ message : "verification is done"});
      }
    });
    } catch (err) {
      res.status(401).json({ message : err.message})
    }
    req.body != jwt.verify;
    next();   
}; 

module.exports = { tokenChecker, updateTokens };