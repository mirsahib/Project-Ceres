const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).render("index");
});
app.get("/demo", (req, res) => {
  //console.log("hello");
  const { first, second } = req.query;
  const { spawn } = require("child_process");
  const pythonProcess = spawn("python", ["demo.py", first, second]);
  pythonProcess.stdout.on("data", data => {
    res.send({ msg: JSON.stringify(data.toString("utf8")) });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
