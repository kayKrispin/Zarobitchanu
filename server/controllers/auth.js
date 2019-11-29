const User = require('../models/user');
const jwt  =  require("jsonwebtoken");
const config = require('../config');
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tarasbashuryn@gmail.com',
        pass: 'kaecxuec1993'
    }
});

let mailOptions = {
    from: 'sriyank.siddhartha@gmail.com',
    to: 'smartherd@gmail.com, sriyank@smartherd.com, tarasbashuryn@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Whats up mah whats up mah`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


async function signUp (req,res,next) {
  const { email } = req.body;
  const duplicate = await User.findOne({email: email});

  if (req.file) {
      const IMAGE_URL = `http://localhost:8080/${req.file.path}`;
      req.body.img = IMAGE_URL;
  }

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
