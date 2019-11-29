const User = require('../models/user');
const jwt  =  require("jsonwebtoken");
const config  = require('../config');
const fs = require("fs");
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, new Date.toString() + "hello");
  }
});

const upload = multer({ storage: storage});

async function signUp (req,res,next) {
  const { email } = req.body;
  const duplicate = await User.findOne({email: email});

  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString('base64');

  // Define a JSONobject for the image attributes for saving to database
  var finalImg = {
    contentType: req.file.mimetype,
    image:  new Buffer(encode_image, 'base64')
  };

  req.body.img = finalImg;

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

async function verifyToken (req, res, next) {
    const header = req.headers.authorization;
    let token;

    if (header) token = header.split(" ")[1];

    if (token) {
        jwt.verify(token, config.jwt_secret, async (err, decoded) => {
            if (err) {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            } else {
                const user = await User.findOne({ email: decoded.email });
                res.json({ user })
            }
        });
    } else {
        return next({
            status: 404,
            message: "Something goes wrong"
        });
    }
};

module.exports = {
  signUp,
  signIn,
  verifyToken
};
