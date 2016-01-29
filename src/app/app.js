(function(angular) {
  'use strict';

  angular.module('sampleApp', [])
    .controller('simpleController', SimpleController);


  function SimpleController($scope) {
    angular.extend($scope, {
      names: ["Fred","Lexy","Shadow"],
      myName: "catsarecool"  ,
      addName: function(){
        $scope.names.push($scope.myName)  ;
        $scope.myName = "";
      }
    });
  };

}(angular));

