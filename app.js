const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRouter = require('./routes/userRouter.js');
const accountRouter = require('./routes/accountRouter.js');
const urlencodedParser = (bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", urlencodedParser, userRouter, accountRouter);

app.use(function(req, res){
  res.status(404).send("Not found")
});

app.listen(4000, () => console.log("Server started"));