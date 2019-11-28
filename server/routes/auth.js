const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

router.post("/signup", upload.single('image'), (req, res, next) => {
  authController.signUp(req, res, next).catch(err => next(err));
});

router.post("/signin", (req, res, next) => {
  authController.signIn(req, res, next).catch(err => next(err));
});

router.get("/verify", (req, res, next) => {
    authController.verifyToken(req, res, next).catch(err => next(err));
});

module.exports = router;
