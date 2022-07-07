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

      if (!result.length) return res.status(400).send("Gagal Login Nih!");

      res.status(200).send("Berhasil login Nih!");
    });
  },
  register: (req, res) => {
    const { username, password, email } = req.body;
    let addQuery = `insert into users(username, password, email) values (${db.escape(
      username
    )}, ${db.escape(password)}, ${db.escape(email)})`;

    db.query(addQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send("Berhasil Register nih!");
    });
  },
  edit: (req, res) => {
    let arr = [];
    for (let key in req.body) {
      arr.push(`${key} = ${db.escape(req.body[key])}`);
    }

    let updateQuery = `update users set ${arr} where idusers = ${+req.params
      .id}`;

    db.query(updateQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
  delete: (req, res) => {
    let deleteQuery = `delete from users where idusers = ${+req.params.id}`;

    db.query(deleteQuery, (err, result) => {
      if (err) return console.log(err);

      res.status(200).send(result);
    });
  },
  // buat fitur login dan register dari front end menggunakan api yang kita buat sendiri
};
