(function() {
    'use strict';

    angular.module('app',['ngRoute'])
    .config(function($routeProvider)
    {
        $routeProvider
        .when('/', {
            templateUrl  : 'app/views/home.html',
            controller   : 'HomeController',
            controllerAs : 'Home'
        })
        .otherwise ({ redirectTo: '/' });
    })
    .run(function(){
        document.addEventListener("deviceready", function () {
            console.info("Cordova initialized with success");
        }, false);
    });

})();