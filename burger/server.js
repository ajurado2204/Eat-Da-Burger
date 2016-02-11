/**
 * Created by Ale on 2/9/16.
 */
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var burger = require('./models/burger.js');

var port = 8080;
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/main', function(req, res){
  //var data = {
  //  name: 'jawbreakers',
  //  price: 6,
  //  awesomeness: 2
  //}
  //res.render('index',data);
  //var data = burger.burgers();
  console.log(burger.burgers());
  //res.render('index',data);
});

app.listen(port, function(req,res){
  console.log("Listening to port: %s", port);
});