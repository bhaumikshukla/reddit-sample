(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.Submitvote = Submitvote
        service.Submittopic = Submittopic

        return service;

        /*
        This function gets all the data (max 20 topics data) by http call
        */
        function GetAll() {
            // it raises and error if fail
            return $http.get('/api/').then(handleSuccess, handleError('Error getting all topics data'));
        }

        /*
        This function raise the http call to submit vote
        */
        function Submitvote(data) {
            // it raises and error if fail
            return $http.post('/api/vote', data).then(handleSuccess, handleError('Error while submitting vote'));
        }

        /*
        This function makes http call to submit new topic
        */
        function Submittopic(data) {
            // it raises and error if fail
            return $http.post('/api/topic', data).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { status: "error", message: error };
            };
        }
    }

})();
