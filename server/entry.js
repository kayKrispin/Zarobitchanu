const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const publicPath = path.join(__dirname, "..", "build");
const config = require("./config");


const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

mongoose.connect("mongodb://localhost:27017/zarobitchanu", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(`${__dirname }/uploads`));

app.use("/uploads", express.static("uploads"));

app.use(express.static(publicPath));

app.use("/api", require("./routes"));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  res.status(status).send({ error: err.message });
});

app.listen(port, function () {
  console.log("Now listening on ports 8080");
});
