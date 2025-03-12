const express = require("express");
const router = express.Router();
const analyticController = require("../controllers/analyticController");


router.get("/comments", analyticController.getCommentsAnalytics);

module.exports = router;
