var express = require("express");
var hbs     = require("express-handlebars");

var app     = express();

app.get("/", function index (req, res){
  res.send("Jello World!");
});

app.listen(3001, function onPort (){
  console.log("It's aliiive!");
});
