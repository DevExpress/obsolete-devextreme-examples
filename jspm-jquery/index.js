import 'devextreme/dist/css/dx.common.css!';
import 'devextreme/dist/css/dx.light.css!';

import $ from 'jquery';
import 'devextreme/ui/button';
import dialog from 'devextreme/ui/dialog';

$("#myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function() {
    dialog.alert('Hello world!', '', false);
  }
});
