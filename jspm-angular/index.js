import 'devextreme/dist/css/dx.common.css!';
import 'devextreme/dist/css/dx.light.css!';

import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import 'devextreme/integration/angular';
import dialog from 'devextreme/ui/dialog';
import 'devextreme/ui/button';

var myApp = angular.module('myApp', ['dx']);
myApp.controller("myController", function($scope) {
  $scope.buttonOptions = {
    text: "Say 'Hello world'",
    onClick: function() {
      dialog.alert('Hello world!', '', false);
    }
  };
});

angular.bootstrap(document, ['myApp']);
