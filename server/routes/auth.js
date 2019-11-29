const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, next) {
        const ext = file.mimetype.split('/')[1];
        next(null, Date.now() + "." + ext);
    }
});

const upload = multer({ storage: storage});

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