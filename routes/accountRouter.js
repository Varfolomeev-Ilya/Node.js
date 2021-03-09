const express = require('express');
const accountController = require ('../controllers/accountController.js');
const accountRouter = express.Router();
const { signUpValidation } = require('../middleware/validation');

accountRouter.post("/signup",signUpValidation ,accountController.signUp);

module.exports = accountRouter; 