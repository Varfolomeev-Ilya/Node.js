const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const env = require('dotenv');
const jsonParser = require('json-parser');

const app = express();
const http = require('http');
app.use(bodyParser.urlencoded({ extended: false }));

const accountController = require('./controllers/accountController');
// Routers
const userRouter = require('./routes/userRouter.js');
const accountRouter = express.Router();

accountRouter.use("/signin", function(req, res){
  res.send("Sign in");
});

// сопоставляем роутер с конечной точкой юзерс
app.use("/", userRouter, accountRouter);

const sequelize = new Sequelize("wolfessa_users", "wolfessa", "wolfessa_2000", {
  dialect: "postgres",
  host: "localhost"
});

sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

app.use(function(req, res, next){
  res.status(404).send("Not found")
});

app.listen(4000, () => console.log("Server started"));