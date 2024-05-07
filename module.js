const { sequelize } = require("./database");
const { DataTypes } = require("sequelize");
const Task = sequelize.define("task", {
  name: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});
// sequelize.sync();
module.exports = { Task, sequelize, DataTypes };
