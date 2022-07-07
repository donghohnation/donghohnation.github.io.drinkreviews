// connect from node to mysql
const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_AMBER) {
  connection = mysql.createConnection(process.env.JAWSDB_AMBER);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "chickenrecipe123",
    database: "drinks_DB"
  })
};

// to make connection
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("you are id " + connection.threadId);
});

//export connection
module.exports = connection;
