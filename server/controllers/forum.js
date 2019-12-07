const Forum = require('../models/forum');


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


module.exports = {
  createForum,
  getForums,
  deleteForum,
  createTopic,
  getTopics
};
