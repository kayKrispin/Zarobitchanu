const express = require("express");
const router = express.Router();


router.use("/", require("./auth"));

router.use("/forum", require("./forums"));


module.exports = router;
