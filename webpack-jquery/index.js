var $ = require('jquery');
var dialog = require('devextreme/ui/dialog');

require('devextreme/integration/jquery');
require('devextreme/ui/button');

$("#myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function() {
    dialog.alert('Hello world!', '', false);
  }
});
