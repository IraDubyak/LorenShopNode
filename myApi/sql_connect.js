var sql = require('mysql');

var connectSQL_DB = sql.createConnection({
  host: "sql7.freemysqlhosting.net",
  user: "sql7243982",
  password: "gAi3juFHJw",
  database: "sql7243982"
});

connectSQL_DB.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connectSQL_DB;

