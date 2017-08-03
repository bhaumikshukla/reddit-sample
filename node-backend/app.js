/*
This is the main module. Responsible to run the application and gather or initiate the required resources.
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// provided routes in routes.js, all the APIs definitions are there
var routes = require("./routes/routes.js")(app);

// starts the application and starting listening on mentioned port
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
