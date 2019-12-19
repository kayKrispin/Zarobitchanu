
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const verifyEmail = require("../services/mailer");

async function signUp (req, res, next) {
  const { email } = req.body;
  const duplicate = await User.findOne({ email: email });

  const mailOptions = {
    from: email,
    to: email,
    subject: "Email verification",
    text: "To acivate your account, please click link below",
    html: `<p><b>To acivate your account, please click link below</b></p>
        <div>${User.generatAccountVerificationLink(email)}</div>`,
  };

  if (req.file) {
    const IMAGE_URL = `http://localhost:8080/${req.file.path}`;
    req.body.img = IMAGE_URL;
  }

  try {
    const user = await User.create(req.body);
    await verifyEmail(mailOptions);
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
      if (!user.emailVerifyed) {
        return next({
          status: 401,
          message: "Please verify your account!"
        });
      }

      res.json({ user, token: User.generateJWT(email) })
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
}


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
      }
      const user = await User.findOne({ email: decoded.email });
      res.json({ user })

    });
  } else {
    return next({
      status: 404,
      message: "Something goes wrong"
    });
  }
}

async function activateAccount (req, res, next) {

  const { code } = req.body;

  if (code) {
    jwt.verify(code, config.jwt_secret, async (err, decoded) => {
      if (err) {
        return next({
          status: 401,
          message: "Token has expired, generate some new one"
        });
      }
      const filter = { email: decoded.email };
      const updatedField = { emailVerifyed: true };

      await User.findOneAndUpdate(filter, updatedField, { new: true }, ((err, user) => (
        res.json({ user, token: User.generateJWT(decoded.email) })
      )));

    });
  } else {
    return next({
      status: 404,
      message: "Something goes wrong"
    });
  }
}

async function resetPassword (req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  const mailOptions = {
    from: email,
    to: email,
    subject: "Reset password",
    text: "To create new password plase follow the link down below",
    html: `<p><b>Follow the link to create new password</b></p>
        <div>${User.generateResetPasswordLink(email)}</div>`,
  };

  try {
    if (user !== null) {
      await verifyEmail(mailOptions);

      res.json(user)
    } else {
      return next({
        status: 403,
        message: "No user registrated with this email"
      });
    }
  } catch (e) {
    return next({
      status: 404,
      message: "Something goes wrong"
    })
  }
}

async function resetPasswordConfirmation (req, res, next) {

  const { code, password } = req.body;

  if (code) {
    jwt.verify(code, config.jwt_secret, async (err, decoded) => {
      if (err) {
        return next({
          status: 401,
          message: "Token has expired, generate some new one"
        });
      }
      const filter = { email: decoded.email };
      const newPasword = User.setPassword(password);

      const updatedField = { password: newPasword };

      await User.findOneAndUpdate(filter, updatedField, { new: true }, ((err, user) => (
        res.json("You have successfully changed your password")
      )));

    });
  } else {
    return next({
      status: 404,
      message: "Something goes wrong"
    });
  }
}

async function socialSignin (req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  req.body.emailVerifyed = true;

  try {
    if (user !== null) {
      res.json({ user, token: User.generateJWT(email) })
    } else {
      const user = await User.create(req.body);
      res.json({ user, token: User.generateJWT(email) })
    }
  } catch (e) {
    return next({
      status: 404,
      message: "Something goes wrong"
    })
  }
}

module.exports = {
  signUp,
  signIn,
  activateAccount,
  resetPassword,
  resetPasswordConfirmation,
  verifyToken,
  socialSignin
};
