const express = require('express');
const userController = require ('../controllers/userController.js');
const userRouter = express.Router();

// userRouter.use("/postuser", userController.postUser);
userRouter.use("/signup", userController.addUser);
userRouter.use("/users", userController.getUsers);

module.exports = userRouter;
