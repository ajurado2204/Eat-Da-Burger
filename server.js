/**
 * Created by Ale on 2/9/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var orm = require('./burger/config/orm.js');

var app = express();
var port = process.env.NODE_ENV || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/js', express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use('/images', express.static("public/images"));

app.engine('handlebars', exphbs({defaultLayout: process.cwd() + '/burger/views/layouts/main'}));
app.set('view engine', 'handlebars');


app.get('/main', function(req, res){

  var callBackFunc = function(result) {
    res.render(process.cwd() + '/burger/views/index', result);
  }

  orm.ormSelectAllFunc(callBackFunc);
});


app.post('/main', function(req, res){

  orm.ormAddFunc(req.body.burger);
  var callBackFunc = function(result){
    res.render(process.cwd() + '/burger/views/index', result);
  }

  orm.ormSelectAllFunc(callBackFunc);
});


app.get('/devour/:id', function(req, res){

  orm.setDevourFunc(req.params.id);

  var callBackFunc = function(result){
    res.render(process.cwd() + '/burger/views/index', result);
  }

  res.redirect('/main');
});


app.listen(port, function(req,res){
  console.log("Listening to port: %s", port);
});