const User = require('../models/user');

async function signUp (req,res,next) {
  const { email } = req.body;
  const duplicate = await User.findOne({email: email});

  try {
    const user = await User.create(req.body);
    if (duplicate) {
      return next({
        status: 403,
        message: "User already exists"
      });
    }
    res.json({ user, token: User.generateJWT(email) })
  } catch (e) {
      return next({
        status: 404,
        message: "Something goes wrong"
      })
  }
}


 async function signIn (req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  console.log(user)

  try {
    if (user !== null && User.isValidPassword(password, user.password)) {
      res.json({user, token: User.generateJWT(email)})
    } else {
      return next({
        status: 403,
        message: "Email or password incorrect"
      });
    }
  } catch (e) {
    return next({
      status: 404,
      message: "Something goes wrong"
    })
  }
};

module.exports = {
  signUp,
  signIn
};
