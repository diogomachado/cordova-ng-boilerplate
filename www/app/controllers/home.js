(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController($scope, $rootScope, $cordovaNetwork));

    function HomeController(){
        // Work here
        // ...

        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            alert(networkState);
        });
    }
})();