/**
 * Created by Ale on 2/9/16.
 */
var mysqlConnection = require('./connection.js');
var connection = mysqlConnection.connectionFunc();
connection.connect();

exports.ormSelectAllFunc = function(callBackFunc){
  connection.query("SELECT * from burgers", function (err, rows) {
    if (err) {throw err;}

    var results = {
      rows : rows
    };

    callBackFunc(results);
  });
}

exports.ormAddFunc = function(burger){

  var post  = {burger_name: burger, devoured: 0};
  connection.query("INSERT INTO burgers SET ?", post, function (err, results){
    if(err) {throw err;}

  });
}

exports.setDevourFunc = function(id){

  connection.query("UPDATE burgers SET devoured = 1 WHERE ID = ?", [id], function(err,result){
    if(err) {throw err;}

  });
}
