/**
 * Created by Ale on 2/9/16.
 */
var connection = require('connection.js');

exports.ormFunc = function(){
  var connection = connection.connectionFunc();

  connection.query('SELECT * FROM burgers', function(err, result){
    console.log(result);
  });
}