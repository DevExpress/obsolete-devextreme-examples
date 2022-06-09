import $ from 'jquery';
import { alert as dialogAlert } from 'devextreme/ui/dialog';

import 'devextreme/integration/jquery';
import 'devextreme/ui/button';

$("#myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function() {
    dialogAlert('Hello world!', '', false);
  }
});
