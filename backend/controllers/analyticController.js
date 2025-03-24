const { Op } = require("sequelize");
const Comment = require("../models/comment");
const Article = require("../models/article");

exports.getCommentsAnalytics = async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;


    if (!dateFrom || !dateTo) {
      return res.status(400).json({ error: "Параметры dateFrom и dateTo обязательны." });
    }


    const from = new Date(dateFrom);
    const to = new Date(dateTo);


    if (isNaN(from.getTime()) || isNaN(to.getTime())) {
      return res.status(400).json({ error: "Неверный формат даты." });
    }

    const comments = await Comment.findAll({
      where: {
        createdAt: {
          [Op.between]: [from, to],
        },
      },
      include: {
        model: Article,
        attributes: ["id", "title"],  
      },
    });


    if (!comments || comments.length === 0) {
      return res.status(404).json({ error: "Комментариев не найдено за указанный период." });
    }


    const groupedComments = comments.reduce((acc, comment) => {
      const articleTitle = comment.article ? comment.article.title : "Без статьи";
      if (!acc[articleTitle]) {
        acc[articleTitle] = [];
      }
      acc[articleTitle].push(comment);
      return acc;
    }, {});


    res.json(groupedComments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка на сервере." });
  }
};
