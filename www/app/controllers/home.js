(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$injector = ['$scope'];

    function HomeController($scope){
        $scope.msg = "Angular active!";
    }
})();