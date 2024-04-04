var express = require("express"),
  bodyParser = require("body-parser"),
  indexPage = require("./routes/index"),
  assignmentPage = require("./routes/assignment")
  path = require('path'),
  fs = require('fs'),
  multer = require('multer'),
  methodOverride = require("method-override"),
  app = express(),
  flash = require("connect-flash");
  const PORT = process.env.PORT || 8000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(flash());

// express session
app.use(require('express-session')({
  secret: "The snake is flying on pencil nose!!",
  resave: false,
  saveUninitialized: false
}));

app.use(indexPage);
// assignment routes!
app.use(assignmentPage)

app.listen(PORT, function () {
  console.log("Welcome you to NITUK VIRTUAL LAB");
});


module.exports = app;