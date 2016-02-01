(function(angular) {
  'use strict';

  angular.module('sampleApp', ["ngCookies"])
    .controller('simpleController', SimpleController);


  function SimpleController($scope, $cookies) {
    angular.extend($scope, {
      names: [],
      myName: ""  ,
      addName: function(){
        if($scope.myName.startsWith("https://") || $scope.myName.startsWith("http://")) {
          $scope.names.push($scope.myName)  ;
          $cookies.putObject("images", $scope.names);
          $scope.myName = "";
        }
      }
    });
     var names = $cookies.getObject("images");
    if(names) {
      $scope.names = names ;
    }

  };

}(angular));

