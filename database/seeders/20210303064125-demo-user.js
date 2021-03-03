'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) =>
  queryInterface.bulkInsert(
    "Users",
    [
      {
        fullName: "Andrey Andreevich",
        email: "AndreyAndreevich@mail.ru",
        password: bcrypt.hashSync("1234"),
        birthday: "01.01.1990"
      },
      {
        fullName: "Ivan Ivanovich",
        email: "IvanIvanovich@mail.ru",
        password: bcrypt.hashSync("qwerty"),
        birthday: "01.01.1991"
      },
      {
        fullName: "Sergey Sergeevich",
        email: "SergeySergeevich@mail.ru",
        password: bcrypt.hashSync("qwerty1234"),
        birthday: "01.01.1992"
      },
    ],
  ),
  down: async (queryInterface, Sequelize) => 
    queryInterface.bulkInsert("Users", null, {}),
};
