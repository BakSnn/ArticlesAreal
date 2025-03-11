import sequelize from "../db";
import { DataTypes } from "sequelize";
import Comment from './comment'


const Article = sequelize.define(
  "article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Article.hasMany(Comment, { foreignKey: "articleId", onDelete: "cascade" });
Comment.belongsTo(Article, { foreignKey: "articleId" });

export default Article;