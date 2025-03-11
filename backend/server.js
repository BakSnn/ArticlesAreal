const sequelize = require("./db.js");
const express = require("express");

const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    app.listen(5000, () =>
      console.log("Сервер запущен на http://localhost:5000")
    );
    console.log("Подключение к БД установлено");
  } catch (e) {
    console.log(e);
  }
};

startServer();
