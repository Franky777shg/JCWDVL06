const express = require("express");
const fs = require("fs");
const PORT = 2000;
const cors = require("cors");

let database = [
  {
    username: "Bob",
    password: "asd123",
    email: "bob@gmail.com",
  },
  {
    username: "Yoshimitsu",
    password: "asd123",
    email: "yoshimitsu@gmail.com",
  },
  {
    username: "Jin",
    password: "asd123",
    email: "jin@gmail.com",
  },
];

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  let home = fs.readFileSync("home.html", "utf-8");
  res.status(200).send(home);
});

server.get("/users", (req, res) => {
  res.status(200).send(database);
});

server.post("/login", (req, res) => {
  let { username, password } = req.body;

  let indexUser = database.findIndex((value) => {
    return value.username === username && value.password === password;
  });

  if (indexUser < 0)
    return res.status(400).send("Username or Password is Wrong");

  res.status(200).send(database[indexUser]);
});

server.post("/register", (req, res) => {
  let checkKey = Object.keys(req.body);

  if (
    checkKey.length !== 3 ||
    !checkKey.includes("username") ||
    !checkKey.includes("password") ||
    !checkKey.includes("email")
  )
    return res.status(400).send("Input not valid!");

  database.push(req.body);

  res.status(200).send(database);
});

server.patch("/edit/:id", (req, res) => {
  let index = +req.params.id;

  let tempUser = { ...database[index] };

  for (let key in req.body) {
    for (let key2 in tempUser) {
      if (key === key2) {
        tempUser[key2] = req.body[key];
      }
    }
  }

  database.splice(index, 1, tempUser);

  res.status(200).send(database);
});

server.listen(PORT, () => console.log(`Running at PORT:${PORT}`));
