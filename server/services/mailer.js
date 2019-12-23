const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,//true
  port: 25,//465
  auth: {
    user: config.email,
    pass: config.password
  }
});

const verifyEmail = mailOptions => {

  return transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${ info.response}`);
    }
  });
};

module.exports = verifyEmail;
