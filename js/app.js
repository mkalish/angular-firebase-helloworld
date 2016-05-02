(function(){
    'use strict';

    angular.module('todologin', ['firebase', 'ui.router']);

    angular
        .module('todologin')
        .config(function($stateProvider, $urlRouterProvider){

            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });

            $stateProvider.state('todo', {
                url: '/todo',
                templateUrl: 'js/todo/todo.html',
                controller: 'TodoCtrl',
                resolve: {
                    user: function(userService) {
                        return userService.getUser();
                    }
                }
            });

            $urlRouterProvider.otherwise('/login');
        });


})();
