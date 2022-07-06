const { db } = require("../database");

module.exports = {
  getAllUsers: (req, res) => {
    let getQuery = "select * from users";

    db.query(getQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
  getUserById: (req, res) => {
    let id = +req.params.id;
    let getQuery = `select * from users where idusers = ${id}`;

    db.query(getQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
  login: (req, res) => {
    const { username, password } = req.body;
    let getQuery = `select * from users where username = ${db.escape(
      username
    )} and password = ${db.escape(password)}`;

    db.query(getQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
  // register
  // edit
  // delete
  // buat fitur login, register, dan keep login dari front end menggunakan api yang kita buat sendiri
};
