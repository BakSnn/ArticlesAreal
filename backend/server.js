const sequelize = require("./database/db.js");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: __dirname + "/.env.local" });

const articleRoutes = require("./routes/articleRoutes");
const commentRoutes = require("./routes/commentRoutes");
const analyticRoutes = require("./routes/analyticRoutes");
const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.use("/articles", articleRoutes);
app.use("/article", commentRoutes);
app.use("/analytic", analyticRoutes);

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

  app.use("/api/articles", (req, res) => {
    res.json({ message: "its articles" }).status(200);
  });
};

startServer();
