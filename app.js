const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const http = require('http');
const server = http.createServer(app);

// const sequelize = new Sequelize("postgres", "users", "12345678", {
//   dialect: 'postgres'
// });

app.use(function (request, response) {
  response.sendFile(__dirname + "/main/index.html");
});

app.listen(4000, () => console.log("Server started"));