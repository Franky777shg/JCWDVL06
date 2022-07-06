const express = require("express");
const fs = require("fs");
const PORT = 2000;
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  let home = fs.readFileSync("home.html", "utf-8");
  res.status(200).send(home);
});

const { userRouter } = require("./routers");
server.use("/users", userRouter);

server.listen(PORT, () => console.log(`Running at PORT:${PORT}`));
