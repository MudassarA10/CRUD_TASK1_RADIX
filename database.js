const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud_task1", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = { sequelize, connectToDb };
