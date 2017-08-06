/*
This module provides the topics manipulations and counting of votes.
Provides setter getter methods for topics, just to make these utilities separate.
*/

// Default values in store for demo purpose, as topics, total votes for each and posted by user's name
var dic = {
  "I did not agree to this bed switch.-Dog" : {
    "votes":2,
    "user": "bot"
  },
  "Government’s claim that only wrong-doers need privacy shocks the court" : {
    "votes":23,
    "user": "x"
  },
  "Hawaii from the sky. My best friend's Instagram is full of these as he is a pilot that sees this stuff almost daily. @kevin_mcfall [1039x1350]" : {
    "votes":34,
    "user": "x"
  },
  "Horrified McDonald's customers watch naked man inject drugs into his testicles" : {
    "votes":52,
    "user": "bot"
  },
  "Please stop visiting me Flatulence Angel!" : {
    "votes":28,
    "user": "bot"
  },
  "Maharashtra CM Says Mumbai Free Of Open Defecation. That’s Not What We Found - FactChecker" : {
    "votes":65,
    "user": "bot"
  },
  "Mumbai scientists to protest against cuts in research funding on August 9" : {
    "votes":56,
    "user": "bot"
  },
  "The Rebels would have you believe those serving the Empire are monsters. We are as human as you" : {
    "votes":77,
    "user": "bot"
  },
  "Captain America had no idea about Spider-Man's super strength, and this is what he intended to happen!" : {
    "votes":89,
    "user": "bot"
  },
  "Apparently scorpion mouths are made from nightmares" : {
    "votes":76,
    "user": "bot"
  }
};

module.exports = {
  /// getting username from topic
  getUserfromtopic: function (key) {
    // returning value of key user for the topic
    return dic[key]["user"]
  },
  // getting complete obj including username and votes from topic name
  getObjfromtopic: function(key) {
    return dic[key]
  },
  // getting current votes count from the topic
  getVotesfromtopic: function (key) {
    return dic[key]["votes"]
  },

  // setting votes value to the topic
  setVotes: function (key,value) {
    dic[key]["votes"] = value
  },

  //setting complete object as value to any topic key
  setObj: function(key,value) {
    return dic[key] = value
  },
  //setting username to any topic
  setUser: function (key,value) {
    // whatever
    dic[key]["user"] = value
  },
  //getting all the data from the store, complete runtime dict
  getalldata: function () {
    return dic
  },

  //getting all the top 20 topics and it's data 
  getalldata_sortedby_votes: function () {

    var sortable = [];
    for (var item in dic) {
        sortable.push([item, dic[item].votes, dic[item].user]);
    }
    // sorting, descending order 
    // (TODO: It will be better if the sort process happens while just after any new topic comes & set to sorted list)
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    // preparing dict for 20 obj
    dicx = []
    // pushing data for first 20 objects
    for(i = 0; i < sortable.length && i < 20; i++) {
      dicx.push({"topic":sortable[i][0],"votes":sortable[i][1], "user": sortable[i][2]})
    }

    // returning top 20 topics data
    return dicx
  }
};
