/*
This module provides the topics manipulations and counting of votes.
Provides setter getter methods for topics, just to make these utilities separate.
*/

// Topics & its total votes will be stored in form of dictionary (key-value pair)
var dic = { "topic1" : 0 } //added sample topic topic1 
// TODO: remove above sample and provide initial complete list of few topics with its votes count

module.exports = {
  // get a single value of provided key
  getfromstore: function (key) {
    // whatever
    return dic[key]
  },
  // set value to provided key/topic
  settostore: function (key,value) {
    dic[key] = value
  },
  // getting all data
  getalldata: function () {
    return dic
  },
  // getting sorted topic list, descending order
  getalldata_sortedby_votes: function () {
    var sortable = [];
    for (var item in dic) {
        sortable.push([item, dic[item]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    return {"topics": sortable }
  }
};
