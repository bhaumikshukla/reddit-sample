(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope','$scope','$location'];

    function HomeController(UserService, $rootScope, $scope, $location) {
        var vm = this;

        vm.user = null;
        vm.listTopics = [];

        // bindings
        vm.upvote = upvote;
        vm.downvote = downvote
        vm.submitNewTopic = submitNewTopic
        vm.logout = logout

        // storing username, to populate on page and will be sent as meta
        $scope.username = $rootScope.globals.currentUser.username

        initController();

        /* 
        initializing controller here
        */
        function initController() {
            // first, loading all topics by calling node REST API
            loadAllTopics(); // provides max 20 top topics
        }
        /*
        This method gets sorted list of topics, max 20 as set in backend
        */
        function loadAllTopics() {
            UserService.GetAll()
                .then(function (res) {
                    // storing received list, and populating on page
                    vm.listTopics = res
                });
        }

        /*
        This method submits the new topic through REST
        */
        function submitNewTopic() {
            //validating length of the upcoming topic
            if (vm.newtopic.length > 255) {
                console.log("Invlid topic input. Required length is <= 255")
                return;
            }

            // preparing data to be sent through REST
            var data = {
                "topic": vm.newtopic,
                "user":$scope.username
            }

            // calling REST API to submit the new topic
            UserService.Submittopic(data)
                .then(function (res) {
                    // response has been recceived, now checking the response
                    if (res.status == "success") {
                        // pushing into the existing list and populating on page
                        vm.listTopics.push({"topic":vm.newtopic, "votes":0, "user":$scope.username})
                    }
                });
        }
        /*
        This method used to check topic created by the current user, 
        if yes, then current user can not up/down vote the topics 
        */
        function amIableToUpvote(obj) {
            
            if(obj.user == $scope.username) {
                // failure, as current user can not provide vote to own topics
                return false;
            }
            // yes, here the user is able to vote,
            return true;
        }

        /*
        This method used to upvote any topic
        */
        function upvote(obj) {
            // restricting current user to vote
            if (!amIableToUpvote(obj)) {
                console.log("upvote: User can not up/down vote own topics")
                return;
            }

            // preparing data, to be sent through REST call
            var data = {
                "topic": obj.topic,
                "vote": "UP"
            }

            // calling the REST API to submit the vote
            UserService.Submitvote(data)
                .then(function (res) {
                    console.log(res)
                    if (res.status == "success") {
                        // populating the result with increased (by 1) number of vote
                        obj.votes = obj.votes + 1
                    }
                });
            
        }

        /*
        This method used to submit the down vote
        */
        function downvote(obj) {
            // restricting user to vote own topics
            if (!amIableToUpvote(obj)) {
                console.log("Downvote: User can not up/down vote own topics")
                return;
            }

            // preparing data, to be sent through REST to vote the topic

            var data = {
                "topic": obj.topic,
                "vote": "DOWN"
            }

            // calling the REST api for downvote
            UserService.Submitvote(data)
                .then(function (res) {
                    if (obj.votes != 0 && res.status == "success") {
                        // populating the result with decreased (by 1) number of vote
                        obj.votes = obj.votes - 1
                    }
                });
        }

        /*
        This method logs out the current user,
        */
        function logout() {
            console.log("Logout")
            $rootScope.globals.currentUser = null
            location.reload()
        }
    }

})();