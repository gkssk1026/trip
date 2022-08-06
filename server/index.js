const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "memberList",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const nickname = req.body.nickname;
  const email = req.body.email;
  const password = req.body.password;
  // const confirm = req.body.confirm;

  db.query(
    "INSERT INTO member(name, nickname, email, password, confirm) VALUES(?,?,?,?,?)",
    [name, nickname, email, password, confirm],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const nickname = req.body.nickname;
  const password = req.body.password;

  console.log(nickname);
  console.log(password);

  db.query(
    "SELECT * FROM member WHERE nickname = ? AND password = ?",
    [nickname, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "아이디나 패스워드를 잘못 입력하셨습니다." });
        console.log(result);
      }
    }
  );
});

app.get("/memberList ", (req, res) => {
  db.query("SELECT*FROM memberList ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen("1234", () => {
  console.log(`
################################################
🛡️ Server listening on port: 1234 🛡️
################################################
`);
});
