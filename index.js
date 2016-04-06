var express = require("express");
var hbs     = require("express-handlebars");

var app     = express();
var db      = require("./db/connection");

// Declare our app port per environment
app.set("port", process.env.PORT || 3001)

// Configure Handlebars to our app's conventions
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/public", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/articles", function(req, res){
  res.render("articles-index", {
    articles: db.articles
  });
});

app.get("/articles/:index", function(req, res){
  res.render("articles-show", {
    article: db.articles[req.params.index]
  });
});

app.listen(app.get("port"), function onPort (){
  console.log("It's aliiive!");
});
