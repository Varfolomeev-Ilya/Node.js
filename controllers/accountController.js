const models = require('../database/models');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  try {
    const { fullName, email, password, birthday } = req.body;
    const oldUser = await models.User.findOne({ where: { email: email } });
    if (oldUser) {
      throw new Error("Email alredy used");
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    await models.User.create({
      fullName: fullName,
      email: email,
      password: passwordHash,
      birthday: birthday,
    }); 
    res.status(200).json({ message: "New user created" });  
  } catch (err) {
      res.status(400).json({ message: err.message });  
  }
};  

