const express = require('express');
const userController = require ('../controllers/userController.js');
const userRouter = express.Router();

userRouter.put("/update", userController.putUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;
