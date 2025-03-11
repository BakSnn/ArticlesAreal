const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Article = require("./article");

const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Article,
        key: "id",
      },
    },
  },
  { timestamps: true }
);

Article.hasMany(Comment, { foreignKey: "articleId", onDelete: "CASCADE" });
Comment.belongsTo(Article, { foreignKey: "articleId" });

module.exports = Comment;
