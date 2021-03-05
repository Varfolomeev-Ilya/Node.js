const express = require('express');
const accountController = require ('../controllers/accountController.js');
const accountRouter = express.Router();

accountRouter.post("/signup", accountController.signUp);

module.exports = accountRouter; 