const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forum");

//Forum routes
router.post("/createForum", (req, res, next) => {
  forumController.createForum(req, res, next).catch(err => next(err));
});

module.exports = router;
