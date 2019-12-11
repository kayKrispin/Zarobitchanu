const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tarasbashuryn@gmail.com",
    pass: "kaecxuec1993"
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
