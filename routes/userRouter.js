const express = require('express');
const userController = require ('../controllers/userController.js');
const userRouter = express.Router();

// userRouter.use("/postuser", userController.postUser);
userRouter.use("/signup", userController.putUser);
userRouter.use("/users", userController.getAllUsers);

module.exports = userRouter;
