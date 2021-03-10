const express = require('express');
const controllers = require ('../controllers/controllers.js');

const loginRouters = express.Router();
const { updateUserValidation, signUpValidation, loginValidation } = require('../middleware/validation');
const tokenChecker = require('../middleware/updateToken');

loginRouters.post("/signup",signUpValidation ,controllers.signUp);
loginRouters.post("/signin",loginValidation, controllers.signIn);
loginRouters.use(tokenChecker);
loginRouters.put("/update/:id", updateUserValidation, controllers.putUser);
loginRouters.get("/users", controllers.getAllUsers);
loginRouters.delete("/delete/:id", controllers.deleteUser);

module.exports = loginRouters;




