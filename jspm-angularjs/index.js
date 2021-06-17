import 'devextreme/dist/css/dx.common.css!';
import 'devextreme/dist/css/dx.light.css!';

import angular from 'angular';
import 'devextreme/integration/angular';
import { alert } from 'devextreme/ui/dialog';
import 'devextreme/ui/button';

var myApp = angular.module('myApp', ['dx']);
myApp.controller("myController", function($scope) {
  $scope.buttonOptions = {
    text: "Say 'Hello world'",
    onClick: function() {
      alert('Hello world!', '', false);
    }
  };
});

angular.bootstrap(document, ['myApp']);
