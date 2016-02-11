/**
 * Created by Ale on 2/9/16.
 */
var mysqlConnection = require('connection.js');
var connection = mysqlConnection.connectionFunc();
connection.connect();


exports.ormAddFunc = function(burger){

  var burgerName = burger;
  connection.getConnection(function(err, result){
    connection.query("INSERT INTO burgers SET ?", [burgerName], function (err, result){
      if(err) {throw err}
    });
  });
}

exports.ormDevourFunc = function(){

  var burgerName = //Whichever burger the user clicks on
  connection.getConnection(function(err, result){
    connection.query("DELETE FROM burgers WHERE burger_name ?", [burgerName], function (err, result){
      if(err) {throw err}
    });
  });
}
