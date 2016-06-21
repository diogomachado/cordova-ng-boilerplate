(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    // Dependencias
    HomeController.$injector = ['$scope'];

    function HomeController($scope){

        // Lógica aqui
        // ...
        $scope.msg = "Angular ativo!";
    }

})();