const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forum");

//Forum routes
router.post("/createForum", (req, res, next) => {
  forumController.createForum(req, res, next).catch(err => next(err));
});

router.get("/getForums", (req, res, next) => {
    forumController.getForums(req, res, next).catch(err => next(err));
});

router.post("/deleteForum", (req, res, next) => {
    forumController.deleteForum(req, res, next).catch(err => next(err));
});

router.post("/createTopic", (req, res, next) => {
    forumController.createTopic(req, res, next).catch(err => next(err));
});

router.post("/getTopics", (req, res, next) => {
    forumController.getTopics(req, res, next).catch(err => next(err));
});

router.post("/deleteTopic", (req, res, next) => {
    forumController.deleteTopic(req, res, next).catch(err => next(err));
});

router.post("/searchTopic", (req, res, next) => {
    forumController.searchTopic(req, res, next).catch(err => next(err));
});

router.post("/createReply", (req, res, next) => {
    forumController.createReply(req, res, next).catch(err => next(err));
});

router.post("/getReplies", (req, res, next) => {
    forumController.getReplies(req, res, next).catch(err => next(err));
});

module.exports = router;
