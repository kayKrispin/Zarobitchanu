const express = require("express");
const router = express.Router();


router.use("/", require("./auth"));


module.exports = router;
