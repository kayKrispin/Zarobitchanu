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
}

module.exports = {
  createForum
};
