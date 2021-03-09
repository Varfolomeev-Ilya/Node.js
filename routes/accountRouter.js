const express = require('express');
const accountController = require ('../controllers/accountController.js');
const accountRouter = express.Router();
const { signUpValidation, loginValidation } = require('../middleware/validation');

accountRouter.post("/signup",signUpValidation ,accountController.signUp);
accountRouter.post("/login",loginValidation, accountController.logIn);

module.exports = accountRouter; 