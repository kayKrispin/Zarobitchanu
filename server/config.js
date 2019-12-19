require("dotenv").config();


module.exports = {
  jwt_secret: "hello_there",
  password: process.env.REACT_APP_GMAIL_PASSWORD,
  email: process.env.REACT_APP_GMAIL,
  mongoDb: process.env.REACT_APP_MONGO_DB_URL
};
