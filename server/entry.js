const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/zarobitchanu", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static(`${__dirname }/uploads`));

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.json());

app.use("/api", require("./routes"));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  res.status(status).send({ error: err.message });
});

app.listen(8080, function () {
  console.log("Now listening on ports 8080");
});
