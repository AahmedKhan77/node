var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
const PORT = 8000;
var bodyParser = require("body-parser");


app.use(bodyParser.json());


let database = [];
app.get("/signup",(req, res) => {
const {fname, lname, email, password, dateofBirth, gender}= req.body;
var data = database.push(req.body);
console.log(database)

res.send({
  status: 200,
  message: "Successfully send a response",
});
});


app.listen(PORT, () => {
    console.log(`app is running on : ${PORT} `);
  });


