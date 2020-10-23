// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


exports.all = cb => {
  orm.all("burgers", function (res) {
    cb(res);
  });
}

exports.create = (name, cb) => {
  orm.create("burgers", ['burger_name'], [name], function (res) {
    cb(res);
  });
}

exports.update = (objColVals, condition, cb) => {
  orm.update("burgers", objColVals, condition, function (res) {
    cb(res);
  });
}


exports.eat = (id, cb) => {
  orm.update("burgers", { devoured: 1 }, `id = ${id}`, function (res) {
    cb(res);
  });
}