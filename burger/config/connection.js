/**
 * Created by Ale on 2/9/16.
 */
exports.connectionFunc = function(){
  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'burgers_db'
  });


  return connection;
}