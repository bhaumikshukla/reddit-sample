/*
This module provides routes i.e. API definitions and as there is little need of small APIs, 
we defined most of the business logic here.
*/

var appRouter = function(app) {

// used for utilities methods
var utils = require('../utils/utils.js');

/*
API To get all the top 20 results from the store
*/
app.get("/api/", function(req, res) {
    res.send(utils.getalldata_sortedby_votes());
});

/*
API to get vote count of any perticular topic, UNUSED in demo
*/
app.get("/api/vote", function(req, res) {
    // cheking the provided params i.e.topic
    if(!req.query.topic) {
        //failure
        return res.send({"status": "error", "message": "missing topic"});
    } else {
        //success
        return res.send(""+utils.getVotesfromtopic(req.query.topic), status=200);
    }
});

/*
API for registering new votes
*/
app.post("/api/vote", function(req, res) {
    // checking provided params
    if(!req.body.vote || !req.body.topic) {
      // failure as missing params
      return res.send({"status": "error", "message": "missing parameters"}, status = 400);
    }
    // checking topic existance
    if(utils.getObjfromtopic(req.body.topic) == undefined) {
      //failure
      return res.send({"status": "error", "message": "topic does not exists"}, status = 400);
    }
    // good to go ahead, checking vote param, has to be from UP & DOWN
    if(req.body.vote == "UP") {
      // Setting +1 vote
      value = utils.getVotesfromtopic(req.body.topic)
      utils.setVotes(req.body.topic, value + 1)
    }
    else if(req.body.vote == "DOWN") {
      // setting -1 vote
      value = utils.getVotesfromtopic(req.body.topic)
      value = value - 1
      if(value < 0) {
        // vote value should not go to negatives
        value = 0
      }
      // setting votes
      utils.setVotes(req.body.topic, value)
    } else {
      // failure as param mismatch
      return res.send({"status": "error", "message": "wrong vote input, it has to be either UP or DOWN"}, status = 400);
    }
    // success response
    return res.send({"status": "success", "message": "vote has been registered"});
});

/*
API to register new topic from any user
*/
app.post("/api/topic", function(req, res) {
    // checking provided params
    if(!req.body.topic || !req.body.user) {
        // failure
        return res.send({"status": "error", "message": "missing parameters"});
    } else {
      // good to go ahead, checking topic existance
      if (utils.getObjfromtopic(req.body.topic) == undefined) {
        // as topic isnt exists, hence
        // preparing object data
        data = {
          "votes": 0,
          "user":req.body.user
        }
        // setting the new topic and it's obj as value
        utils.setObj(req.body.topic, data);
      } else {
        // failure, as topic is already present in store
        return res.send({"status": "error", "message": "topic is already exists"}, status = 400)
      }
        // success
        return res.send({"status": "success", "message": "topic has been stored"});
    }
});

}

module.exports = appRouter;
