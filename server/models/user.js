const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");


const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required"],
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  img: {
    type: String
  },
  emailVerifyed: {
    type: Boolean,
    default: false
  },
  posts: [
    {
      type: String
    }
  ]
}
);

UserSchema.pre("save", function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

const User = mongoose.model("user", UserSchema);

User.setPassword = password => {
  return this.passwordHash = bcrypt.hashSync(password, 10);
};

User.isValidPassword = (password, encodedPassword) => {
  return bcrypt.compareSync(password, encodedPassword);
};

User.generateJWT = email => {

  return jwt.sign(
    {
      email: email,
    },
      config.jwt_secret
  );
};

User.generateConfirmationJWT = email => {
  return jwt.sign(
    {
      email: email,
    },
    config.jwt_secret,
    { expiresIn: "1h" }
  );
};

User.generatAccountVerificationLink = id => (
    `<a href='http://localhost:8080/verifyAccount/${User.generateConfirmationJWT(id)}'>
        https://localhost:8080/verifyAccount/${User.generateConfirmationJWT(id)}</a>`
);

User.generateResetPasswordLink = email => (
    `<a href='https://zarobitchany.herokuapp.com/resetPassword/${User.generateConfirmationJWT(email)}'>
        https://zarobitchany.herokuapp.com/resetPassword/${User.generateConfirmationJWT(email)}</a>`
);

module.exports = User;
