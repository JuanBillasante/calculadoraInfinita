
import Calculadora from "./Calculadora";
import Parser from "./Parseador";
import Contexto from "./Contexto";

import express = require('express');
import { urlencoded } from 'body-parser';
var bodyParser = require('body-parser');



const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');

app.get('/calculadora', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.post('/calculadora', urlencodedParser ,function(req,res){
  console.log(req.body);
  var dato = req.body.comando;
  let a = new Contexto(dato);
  dato.parsear;
  res.render('index2',{data: req.body});
});


app.listen(5000, function () {
  console.log('Server on port 5000');
});