// express app setup
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// Middlewares testing 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", }));
app.set("view engine", "handlebars");

// routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
});