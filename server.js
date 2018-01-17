// Dependencies
var express = require("express");

var react = require("react");






// Initialize Express
var app = express();
var bodyParser = require("body-parser");



// Set up a static folder (public) for our web app
app.use(express.static("public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));









// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
