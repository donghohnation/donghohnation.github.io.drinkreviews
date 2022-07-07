// Set up connection from Node to MySQL and export the connection
const mysql = require('mysql2');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hfwa0312",
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
