const { response } = require('express');
const models = require('../database/models');

exports.putUser = async (req, res) => {
  try {
    const { fullName, email, password, birthday } = req.body;
    if (!fullName && !email && !password && !birthday) {
      throw new Error("data provided");
    };

  models.User.update(
    {
      fullName: fullName,
      email: email,
      password: password,
      birthday: birthday,
    },
    {where: { email: email } }
  );
  res.status(200).json({ error: "user updated"});  
  }  catch (err) {
    res.status(400).json({ error: true, message: err.message});
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await models.User.findAll({
      raw: true,
    });
    res.status(200).json({ message: "All users", allUsers});
  } catch (err) {
    res.status(500).json({ error: true, message: err.message});
  }
};
