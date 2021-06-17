import 'devextreme/dist/css/dx.common.css!';
import 'devextreme/dist/css/dx.light.css!';

import ko from 'knockout';
import 'devextreme/integration/knockout';
import { alert } from 'devextreme/ui/dialog';
import 'devextreme/ui/button';

let viewModel = {
  buttonOptions: {
    text: "Say 'Hello world'",
    onClick: function() {
      alert('Hello world!', '', false);
    }
  }
};

ko.applyBindings(viewModel);
