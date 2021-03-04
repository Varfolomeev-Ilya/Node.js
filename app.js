const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const accountController = require('./controllers/accountController');
const userRouter = require('./routes/userRouter.js');
const accountRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

accountRouter.use("/signin", function(req, res){
  res.send("Sign in");
});

// сопоставляем роутер с конечной точкой юзерс
app.use("/", userRouter, accountRouter);
app.use("/users", userRouter);

app.use(function(req, res, next){
  res.status(404).send("Not found")
});

app.listen(4000, () => console.log("Server started"));