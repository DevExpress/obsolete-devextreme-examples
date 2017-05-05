var angular = require('angular');

var dialog = require('devextreme/ui/dialog');

require('devextreme/integration/angular');
require('devextreme/ui/button');

var myApp = angular.module('myApp', ['dx']);
myApp.controller("myController", ['$scope', function($scope) {
  $scope.buttonOptions = {
    text: "Say 'Hello world'",
    onClick: function() {
      dialog.alert('Hello world!', '', false);
    }
  };
}]);

angular.bootstrap(document, ['myApp']);
