mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mia1120",
    database: "burgers_db"
    
});

var PORT = process.env.PORT || 8080;
};
// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection
  module.exports = connection;

