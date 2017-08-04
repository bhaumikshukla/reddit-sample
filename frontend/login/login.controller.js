(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location','$rootScope'];
    function LoginController($location,$rootScope) {
        var vm = this;
        // bindings
        vm.login = login;

        (function initController() {
            // reset login status
            console.log("login::initController::initializing");
        })();

        /*
        This method calls when user hits on login button,
        this method preserve the username and process the request
        towards the home page
        */
        function login() {
            $rootScope.globals = {
                currentUser: {
                    username: vm.username,
                }
            };
            $location.path('/');

        };
    }

})();
