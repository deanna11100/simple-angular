(function() {
  'use strict';

  angular.module('sampleApp', [])
    .controller('simpleController', SimpleController);


  function SimpleController($scope) {
    angular.extend($scope, {
      names: ["Harry"],
      gameName: "" ,
      addGame: function(){
          $scope.names.push($scope.gameName);
      }
    });
  };

}(angular));

