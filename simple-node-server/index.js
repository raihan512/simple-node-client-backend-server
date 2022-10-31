const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
// Creation of fake data
const users = [
  { id: 1, name: "Raihan", email: "raihan@gmail.com" },
  { id: 2, name: "Borhan", email: "borhan@gmail.com" },
  { id: 3, name: "Sahadat", email: "sahadat@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log("Post API Called");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
