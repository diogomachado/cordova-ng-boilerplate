(function() {
    //'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    // Dependencias
    HomeController.$injector = ['$scope', '$rootScope'];

    function HomeController($scope, $rootScope){

        // Work here
        // ...
        $scope.msg = "Angular ativo!";
    }

})();