var express = require("express");
var hbs     = require("express-handlebars");

var app     = express();

// Configure Handlebars to our app's conventions
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
+app.use("/public", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/articles", function(req, res){
  res.render("articles-index");
});

app.listen(3001, function onPort (){
  console.log("It's aliiive!");
});
