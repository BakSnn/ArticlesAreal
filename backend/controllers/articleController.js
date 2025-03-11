const Article = require("../models/article");

exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Статья не найдена" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updated = await Article.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated[0])
      return res.status(404).json({ error: "Статья не найдена" });
    res.json({ message: "Статья обновлена" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const deleted = await Article.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Статья не найдена" });
    res.json({ message: "Статья удалена" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
