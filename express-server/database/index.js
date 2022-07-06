const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "frankyshg",
  database: "jcwdvl06",
  password: "Mysql123",
});

module.exports = {
  db,
};
