require("dotenv").config();


module.exports = {
  jwt_secret: process.env.REACT_APP_JWT_SECRET || process.env.SECRET_WORD,
  password: process.env.REACT_APP_GMAIL_PASSWORD || process.env.PASSWORD,
  email: process.env.REACT_APP_GMAIL || process.env.EMAIL,
  mongoDb: process.env.REACT_APP_MONGO_DB_URL || "mongodb://nascar8606:nascar8606@ds157544.mlab.com:57544/heroku_r7snstx7",
  googleId: process.env.REACT_APP_GOOGLE_CLIENT_ID || process.env.GOOGLE_ID,
  s3_secret: process.env.S3_SECRET,
  s3_access: process.env.S3_ACCESS
};
