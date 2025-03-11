const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/:id/comment", commentController.createComment);
router.get("/:id/comment/:commentId", commentController.getCommentById);
router.get("/:id/comments", commentController.getAllCommentsForArticle);
router.patch("/:id/comment/:commentId", commentController.updateComment);
router.delete("/:id/comment/:commentId", commentController.deleteComment);

module.exports = router;
