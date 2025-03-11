const Comment = require("../models/comment");
const Article = require("../models/article");

exports.createComment = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Статья не найдена" });

    const comment = await Comment.create({
      text: req.body.text,
      articleId: req.params.id,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.commentId);
    if (!comment)
      return res.status(404).json({ error: "Комментарий не найден" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCommentsForArticle = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { articleId: req.params.id },
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updated = await Comment.update(req.body, {
      where: { id: req.params.commentId },
    });
    if (!updated[0])
      return res.status(404).json({ error: "Комментарий не найден" });
    res.json({ message: "Комментарий обновлен" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.commentId },
    });
    if (!deleted)
      return res.status(404).json({ error: "Комментарий не найден" });
    res.json({ message: "Комментарий удален" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
