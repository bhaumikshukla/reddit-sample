/*
This is the main module. Responsible to run the application and gather or initiate the required resources.
*/

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// making resources under 'frontend' dir visible. 
// Setting path for HTML and other resources.
var frontend = path.join(__dirname, 'frontend');
app.use(express.static(frontend));

// provided routes in routes.js, all the APIs definitions are there
var routes = require("./node-backend/routes/routes.js")(app);

// starts the application and starting listening on mentioned port
var server = app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
