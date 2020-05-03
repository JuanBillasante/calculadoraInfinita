// lib/app.ts
import express = require('express');
import bodyParser = require('body-parser');

const app: express.Application = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(5000, function () {
  console.log('Server on port 5000');
});