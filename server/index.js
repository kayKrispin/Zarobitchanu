const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app =  express();

//mongoose.connect('mongodb://localhost:27017/zarobitchanu', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/api', function (req, res) {
  res.send({cmo: "hello there"})
});

app.use(function (err, req, res, next) {
  res.status(404).send({ error: err.message });
});

app.listen(8080, function () {
  console.log('Now listening on ports 8080');
});
