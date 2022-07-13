// const db = require("../database");
// promise mysql
const db = require("../database").promise();

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
  register: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      // username = "Rahayu"

      let checkUsername = `select * from users where username = ?`;
      // select * from users where username = ?

      let [result_checkUsername] = await db.execute(checkUsername, [username]);

      if (result_checkUsername.length > 0)
        return res.status(400).send("Username is already exist");

      let addQuery = `insert into users(username, password, email) values (?, ?, ?)`;

      await db.execute(addQuery, [username, password, email]);

      res.status(200).send("Berhasil register nih!");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }

    // WITHOUT ASYNC AWAIT

    // const { username, password, email } = req.body;
    // let checkUsername = `select * from users where username = ${db.escape(
    //   username
    // )}`;

    // db.query(checkUsername, (err, result) => {
    //   if (err) return console.log(err);

    //   if (result.length > 0) return res.status(400).send("Username is already exist");

    //   let addQuery = `insert into users(username, password, email) values (${db.escape(
    //     username
    //   )}, ${db.escape(password)}, ${db.escape(email)})`;
    //   // check uniqueness of username
    //   console.log(result);

    //   db.query(addQuery, (err, result1) => {
    //     if (err) return console.log(err);

    //     res.status(200).send("Berhasil Register nih!");
    //   });
    // });
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
