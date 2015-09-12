(function() {
    'use strict';

    angular.module('app',['ngCordova','ngRoute', 'ngTouch'])
    .config(function($routeProvider)
    {
      // Definição de rotas
        $routeProvider
        .when('/', {
          templateUrl : 'app/views/home.html',
          controller : 'HomeController',
          controllerAs : 'Home'
      })
        .otherwise ({ redirectTo: '/' });
    })
    .run(function(){

        // Escuta o evento de inicialização do cordova
        document.addEventListener("deviceready", function () {
            console.log("Cordova inicializado");
        }, false);
    });

})();