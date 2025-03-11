const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
import Article from "./article";


const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Comment.belongsTo(Article, { foreignKey: "articleId" }); //

export default Comment;
