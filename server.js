/**
 * Created by Ale on 2/9/16.
 */
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var orm = require('./burger/config/orm.js');

var app = express();
var port = process.env.NODE_ENV || 8080;
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: process.cwd() + '/burger/views/layouts/main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){

  var callBackFunc = function(result) {
    res.render(process.cwd() + '/burger/views/index', result);
  }

  orm.ormSelectAllFunc(callBackFunc);
});

app.post('/', function(req, res){

  orm.ormAddFunc(req.body.burger);
  var callBackFunc = function(result){
    res.render(process.cwd() + '/burger/views/index', result);
  }

  orm.ormSelectAllFunc(callBackFunc);
});

app.get('/delete/:id', function(req, res){

  orm.setDevourFunc(req.params.id);

  var callBackFunc = function(result){
    res.render(process.cwd() + '/burger/views/index', result);
  }

  orm.ormSelectAllFunc(callBackFunc);
});


app.listen(port, function(req,res){
  console.log("Listening to port: %s", port);
});