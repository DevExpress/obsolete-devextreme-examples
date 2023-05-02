import 'devextreme-dist/css/dx.common.css!';
import 'devextreme-dist/css/dx.light.css!';

import $ from 'jquery';
import 'devextreme/integration/jquery';
import 'devextreme/ui/button';
import { alert } from 'devextreme/ui/dialog';

$("#myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function() {
    alert('Hello world!', '', false);
  }
});
