const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app =  express();

mongoose.connect('mongodb://localhost:27017/zarobitchanu', { useNewUrlParser: true, useUnifiedTopology: true  });

mongoose.Promise = global.Promise;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.post('/api/signup', function (req, res) {
  res.status(200).send({ kaec: "bul", surname: "hello" });
});

app.use(function (err, req, res, next) {
  res.status(404).send({ error: err.message });
});

app.listen(8080, function () {
  console.log('Now listening on ports 8080');
});
