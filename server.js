const express = require('express');
const Mongo = require('./mongo');

const app = express();

app.use(express.static('public'));

app.use('/', require('./routes/foods'));

Mongo.connect('mongodb://localhost:27017/grocery', function() {
  app.listen(4500, function() {
    console.log('Listening on port 4500.');
  });
})
