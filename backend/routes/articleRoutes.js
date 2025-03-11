const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post("/", articleController.createArticle);
router.get("/:id", articleController.getArticleById);
router.get("/", articleController.getAllArticles);
router.patch("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
