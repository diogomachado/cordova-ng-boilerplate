(function() {
    'use strict';

    angular.module('app',['ngCordova','ngRoute', 'ngTouch'])
    .config(function($routeProvider)
    {
        $routeProvider
        .when('/', {
          templateUrl : 'app/views/home.html',
          controller : 'HomeController',
          controllerAs : 'Home'
      })
        .otherwise ({ redirectTo: '/' });
    })
    .run(function(){

        // Configurações iniciais
        document.addEventListener("deviceready", function () {
            console.log("Cordova inicializado");
        }, false);
    });

})();