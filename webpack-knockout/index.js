var ko = require('knockout');
var dialog = require('devextreme/ui/dialog');

require('devextreme/integration/knockout');
require('devextreme/ui/button');

var viewModel = {
	buttonOptions: {
    text: "Say 'Hello world'",
    onClick: function() {
      dialog.alert('Hello world!', '', false);
    }
	}
};
ko.applyBindings(viewModel);
