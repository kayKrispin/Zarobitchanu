const Forum = require('../models/forum');
const User = require('../models/user');


async function createForum (req, res, next) {
  try {
      const forum = await Forum.create(req.body);

      res.json({ forum })

  } catch (e) {
    return next({
      status: 404,
      message: "Something goes wrong"
    })
  }
};

async function getForums (req, res, next) {
    try {
        const forums = await Forum.find({ });

        res.send(forums);

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function deleteForum (req, res, next) {

    const { id } = req.body;

    try {
        await Forum.find({_id: id}).remove();
        res.json({});

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function createTopic (req, res, next) {

    const { forumId } = req.body;

    delete req.body.forumId;

    try {
      await Forum.findOneAndUpdate({_id: forumId}, {$push: {topics: req.body}});
      const updatedForum = await Forum.find({_id: forumId});

        res.json({ updatedForum })

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function getTopics (req, res, next) {

    const { id } = req.body;

    try {
        const forum = await Forum.find({_id: id});

        res.json({ ...forum });

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function deleteTopic (req, res, next) {

    const { topicId } = req.body;

    try {
        await Forum.update(
           { },
           { $pull: { topics: { _id: topicId } } },
           { multi: true }
       );

        res.json({})
    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function searchTopic (req, res, next) {

    const { key, forumId } = req.body;


    try {
       const forum = await Forum.findOne({_id: forumId })
       const filteredTopics = forum.topics.filter(val => val.title.toLowerCase().includes(key));

       res.send([ ...filteredTopics ])

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function createReply (req, res, next) {

    const {  forumId, topicId, userId } = req.body;
    const { page, limit } = req.query;

    delete req.body.forumId;
    delete req.body.topicId;

    try {
          //Update user posts quantity
        await User.findOneAndUpdate({_id: userId}, {$push: {posts: 1}});
        const users = await User.find({});


        const forum = await Forum.findOne({ _id: forumId});
        const topic = forum.topics.id(topicId);
        const repliesLength = topic.replies.length;


        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        const startIndex = (pageNumber - 1) * limitNumber;
        const endIndex = pageNumber * limit;

        topic.replies.push(req.body);

        await forum.save();

        res.send({
            replies: [...topic.replies.slice(startIndex, endIndex)],
            users: [...users],
            totalReplies: repliesLength
        })

    } catch (e) {
        return next({
            status: 404,
            message: "Something goes wrong"
        })
    }
};

async function getReplies (req, res, next) {

  const {  forumId, topicId } = req.body;

  try {
    const forum = await Forum.findOne({ _id: forumId});
    const users = await User.find({});
    const { page, limit } = req.query;

    const topic = forum.topics.id(topicId);
    const replies = topic.replies;
    const repliesLength = replies.length;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limit;

    res.json({
        replies: [...replies.slice(startIndex, endIndex)],
        users: [...users],
        totalReplies: repliesLength
    })

  } catch (e) {
    return next({
      status: 404,
      message: "Something goes wrong"
    })
  }
};

module.exports = {
  createForum,
  getForums,
  deleteForum,
  createTopic,
  getTopics,
  deleteTopic,
  searchTopic,
  createReply,
  getReplies
};
