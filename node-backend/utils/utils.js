/*
This module provides the topics manipulations and counting of votes.
Provides setter getter methods for topics, just to make these utilities separate.
*/

var dic = {
  "I did not agree to this bed switch.-Dog" : {
    "votes":2,
    "user": "bhaumik"
  },
  "Government’s claim that only wrong-doers need privacy shocks the court" : {
    "votes":23,
    "user": "x"
  },
  "Hawaii from the sky. My best friend's Instagram is full of these as he is a pilot that sees this stuff almost daily. @kevin_mcfall [1039x1350]" : {
    "votes":34,
    "user": "x"
  }
};

module.exports = {
  getUserfromtopic: function (key) {
    // whatever
    return dic[key]["user"]
  },
  getObjfromtopic: function(key) {
    return dic[key]
  },
  getVotesfromtopic: function (key) {
    return dic[key]["votes"]
  },
  setVotes: function (key,value) {
    dic[key]["votes"] = value
  },
  setObj: function(key,value) {
    return dic[key] = value
  },
  setUser: function (key,value) {
    // whatever
    dic[key]["user"] = value
  },
  getalldata: function () {
    return dic
  },
  getalldata_sortedby_votes: function () {

    var sortable = [];
    for (var item in dic) {
        sortable.push([item, dic[item].votes, dic[item].user]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    dicx = []
    // returns first 20 objects
    for(i = 0; i < sortable.length && i < 20; i++) {
      dicx.push({"topic":sortable[i][0],"votes":sortable[i][1], "user": sortable[i][2]})
    }

    return dicx
  }
};
