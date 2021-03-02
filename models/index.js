"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const envConfigs = require("../.env");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = envConfigs[env];
const db = {};

let sequelize;

// if (config.url) {
//   sequelize = new Secuelize(config.url, config);
// } else {
//   sequelize = new sequelize (
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename && file.slice(-3) === "index.js");
  })

  .forEach(function(file) {
    const model= require(path.join(__dirname, file));
    db[model.name] = model;
  });

  Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
    db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;