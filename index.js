const http = require("http");
const fs = require("fs");
const PORT = 2000;
const url = require("url");

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

const server = http.createServer((req, res) => {
  const urlAddress = url.parse(req.url);
  // console.log(urlAddress);

  if (req.url === "/") {
    let home = fs.readFileSync("home.html", "utf-8");
    // console.log(home);
    res.writeHead(200, { "content-type": "text/html" });
    res.end(home);
  } else if (req.url === "/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(database));
  } else if (req.url === "/login") {
    let input = "";
    req
      .on("data", (chunk) => {
        // console.log(chunk);
        input = chunk.toString();
        // console.log(input);
      })
      .on("end", () => {
        let data = JSON.parse(input);
        // console.log(data);

        let indexUser = database.findIndex((value) => {
          // console.log(value);
          return (
            value.username === data.username && value.password === data.password
          );
        });
        // console.log(indexUser);

        if (indexUser < 0) {
          res.writeHead(400, { "content-type": "text/html" });
          res.end("Username or Password is Wrong");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(database[indexUser]));
        }
      });
  } else if (req.url === "/register") {
    let input = "";
    req
      .on("data", (chunk) => {
        input = chunk.toString();
      })
      .on("end", () => {
        let data = JSON.parse(input);

        database.push(data);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(database));
      });
  } else if (urlAddress.pathname === "/edit") {
    let input = "";

    req
      .on("data", (chunk) => {
        input = chunk.toString();
      })
      .on("end", () => {
        let obj = JSON.parse(input);

        let index = +urlAddress.query;

        database.splice(index, 1, obj);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(database));
      });
  }
});

server.listen(PORT, () => console.log(`Running at Port:${PORT}`));
