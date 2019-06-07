// Import MySQL connection.
var connection = require("../config/connection.js");

const environment = process.env.NODE_ENV || "development";

const orm = {
    //This will be posting the new user data to the database
    all: function(tableInput, cb){
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err,result){
            if (err) {
              throw err
            }
        cb(result)
        });
    },
    create: function(table, cols, val, cb){
        connection.query('INSERT INTO ?? (??) VALUES (?)',[table, cols, val], function(err,result){
            if (err) throw err
            cb(result)
        })
      },
    update: function(table, objColvals, condition, cb){
      connection.query('UPDATE ?? SET ?  WHERE ?;',[table, objColvals, condition], function(err,result){
          if (err) {
            throw err
          }
          cb(result)
    });
  }
};
    // Export the orm object for the model (cat.js).
    module.exports = orm;
