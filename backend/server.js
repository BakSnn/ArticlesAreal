const sequelize = require("./db.js");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env.local" });

const app = express();
app.use(express.json());


const startServer = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    app.listen(process.env.SERVER_PORT || 5000, () =>
      console.log("Сервер запущен на http://localhost:5000")
    );
    console.log("Подключение к БД установлено");
  } catch (e) {
    console.log(e);
  }
};

startServer();
