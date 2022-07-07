// connect from node to mysql
// const mysql = require('mysql');

// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "chickenrecipe123",
//     database: "drinks_DB"
//   })
// };

// // to make connection
// connection.connect(err => {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("you are id " + connection.threadId);
// });

let connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}
//export connection
module.exports = connection;
