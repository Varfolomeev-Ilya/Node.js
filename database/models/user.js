module.exports = function(sequelize, Sequelize) {
  const User = sequelize.define("user", {
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthday: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
};






