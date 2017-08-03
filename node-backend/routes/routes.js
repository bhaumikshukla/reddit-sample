/*
This module provides routes i.e. API definitions and as there is little need of small APIs, 
we defined most of the business logic here.
*/

var appRouter = function(app) {

// used for utilities methods
var utils = require('../utils/utils.js');


app.get("/", function(req, res) {
    res.send(utils.getalldata_sortedby_votes());
});
app.get("/vote", function(req, res) {

    if(!req.query.topic) {
        return res.send({"status": "error", "message": "missing topic"});
    } else {
        return res.send("" + utils.getfromstore(req.query.topic), status=200);
    }
});

app.post("/vote", function(req, res) {
    if(!req.body.vote || !req.body.topic) {
      return res.send({"status": "error", "message": "missing parameters"}, status = 400);
    }
    if(utils.getfromstore(req.body.topic) == undefined) {
      return res.send({"status": "error", "message": "topic does not exists"}, status = 400);
    }

    if(req.body.vote == "UP") {
      value = utils.getfromstore(req.body.topic)
      utils.settostore(req.body.topic, value + 1)
    }
    else if(req.body.vote == "DOWN") {
      value = utils.getfromstore(req.body.topic)
      value = value - 1
      
      if(value < 0) {
        value = 0
      }
      utils.settostore(req.body.topic, value)

    } else {
      return res.send({"status": "error", "message": "wrong vote input, it has to be either UP or DOWN"}, status = 400);
    }
    return res.send({"status": "success", "message": "vote has been registered"});
});

app.post("/topic", function(req, res) {
    if(!req.body.topic) {
        return res.send({"status": "error", "message": "missing 'topic' parameter"});
    } else {
      if (utils.getfromstore(req.body.topic) == undefined) {
        utils.settostore(req.body.topic,0)
      } else {
        return res.send({"status": "error", "message": "topic is already exists"}, status = 400)
      }
        return res.send({"status": "success", "message": "topic has been stored"});
    }
});

}

module.exports = appRouter;
