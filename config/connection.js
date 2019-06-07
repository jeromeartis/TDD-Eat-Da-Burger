const mysql = require('mysql');
const dbConfig = require('../config/config.json')


const environment = process.env.NODE_ENV || "development";

console.log(environment)
const connection = mysql.createConnection( dbConfig[environment] );
  // host: 'lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  // port: 3306,
  // user: 'hpxqnh3r96446p65',
  // password: 'urqx55xixzifd6ky',
  // database: 'bsnu6ttze2baz039'
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'password',
//   database: 'burger_db'
// });

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
