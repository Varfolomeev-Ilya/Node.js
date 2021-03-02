const { response } = require('express');
const User = require('../models/user.js');

exports.addUser = function (req, res) {
  res.send("Add user");
};
exports.getUsers = function (req, res) {
  User.findAll({ raw: true })
    .then(users=>{console.log(users);
    })
    .catch(err=>console.log(err));
  res.send("all users");
};


// exports.postUser = function (req, res) {
//   const fullName = request.body.name;
//   const email = request.body.email;
//   const password = request.body.password;
//   const birthday = request.body.birthday;
//   const user = new User(fullName, email, password, birthday);
//   user.save();
//   response.redirect("/users");
// };

// function createUser(req, res) {
//   const { fullname, email, password, birthday} = req.body
//   User.create({
//     fullName: "",
//     password: "",
//     birthday: "",
//     email: ""
//   }).then(res=>{
//     console.log(res);
//   }).catch(err=>console.log(err));
// }