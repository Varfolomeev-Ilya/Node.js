const express = require('express');
const userController = require ('../controllers/userController.js');
const userRouter = express.Router();

userRouter.use("/signup", userController.putUser);
userRouter.use("/users", userController.getAllUsers);
// userRouter.use("/users", userController.getUser);

module.exports = userRouter;
