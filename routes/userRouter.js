const express = require('express');
const userController = require ('../controllers/userController.js');
const userRouter = express.Router();
const { updateUserValidation } = require('../middleware/validation');
const tokenChecker = require('../middleware/checkToken');

userRouter.use(tokenChecker);
userRouter.put("/update/:id", updateUserValidation, userController.putUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;
