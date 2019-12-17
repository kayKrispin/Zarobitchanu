require("dotenv").config();


module.exports = {
  jwt_secret: process.env.REACT_APP_JWT_SECRET,
  password: process.env.REACT_APP_GMAIL_PASSWORD,
  email: process.env.REACT_APP_GMAIL
};
