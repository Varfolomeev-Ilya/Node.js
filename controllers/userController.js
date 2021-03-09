const models = require('../database/models');
const bcrypt = require('bcryptjs')

exports.putUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, email, password, birthday } = req.body;
      if (!fullName && !email && !password && !birthday) {
        throw new Error("the data provided is incorrect ");
      };
    await models.User.update({
      fullName: fullName,
      birthday: birthday,
    },
    { where: { 
      id: id 
      },
    });
    res.status(200).json({ error: "user updated"}); 
  } catch (err) {
      res.status(400).json({ message: err.message});
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await models.User.findAll({
      raw:true, 
      attributes: { exclude: ["password"]}
    });
    res.status(200).json({ message: "All users", allUsers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
      await models.User.destroy({
        where: {
          id: id
        },
      });
    res.status(200).json({ message: "User deleted", id});
  } catch (err) {
      res.status(500).json({ message: err.message});
  }
};


