(function() {
    'use strict';

    function initCordova(){
        document.addEventListener("deviceready", function () {
            console.info("Cordova inicializado com sucesso");
        }, false);
    }

    angular.module('app',['ngRoute', 'ngCordova'])
    .config(function($routeProvider)
    {
        // Rotas
        $routeProvider
        .when('/', {
            templateUrl  : 'app/views/home.html',
            controller   : 'HomeController',
            controllerAs : 'Home'
        })
        .otherwise ({ redirectTo: '/' });
    })
    .run(function(){

        initCordova();

        /*
            O run é executado, após carregar o angular e as rotas, no run fazemos configurações iniciais
        */

    });

})();