/**
 * Created by Ale on 2/9/16.
 */
var orm = require('../config/orm.js');

exports.burgerName = function(burgerName) {
  orm.ormAddFunc(burgerName);
}

exports.displayAll = function() {
  return orm.ormSelectAllFunc();;
}

exports.devourBurger = function(id){
  orm.ormDevourFunc(id);
}