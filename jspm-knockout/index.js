import 'devextreme/dist/css/dx.common.css!';
import 'devextreme/dist/css/dx.light.css!';

import ko from 'knockout';
import 'devextreme/integration/knockout';
import dialog from 'devextreme/ui/dialog';
import 'devextreme/ui/button';

let viewModel = {
  buttonOptions: {
    text: "Say 'Hello world'",
    onClick: function() {
      dialog.alert('Hello world!', '', false);
    }
  }
};

ko.applyBindings(viewModel);
