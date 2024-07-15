const express = require("express");
const bodyParser = require("body-parser");
const indexPage = require("./routes/index");
const assignmentPage = require("./routes/assignment");
const path = require('path');
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8000;

// Setting up view engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(flash());

// Express session setup
app.use(session({
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