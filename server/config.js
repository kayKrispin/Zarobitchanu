require("dotenv").config();


module.exports = {
  jwt_secret: process.env.REACT_APP_JWT_SECRET || process.env.SECRET_WORD,
  password: process.env.REACT_APP_GMAIL_PASSWORD || process.env.PASSWORD,
  email: process.env.REACT_APP_GMAIL || process.env.EMAIL,
  mongoDb: process.env.REACT_APP_MONGO_DB_URL
};
