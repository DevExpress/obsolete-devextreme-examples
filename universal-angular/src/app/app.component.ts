import { Component, Renderer2 } from '@angular/core';
import * as domAdapter from 'devextreme/core/dom_adapter';
import DxChart from 'devextreme/viz/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private renderer2: Renderer2) {
    // NOTE: Temporary workarounds. Should be removed after next DevExtreme pre-release
    DxChart.prototype.element = function() {
      return renderer2.createElement('div');
    }
    domAdapter.inject({
      listen: function(element) {
        if(element.window === element) {
          return;
        }
        return renderer2.listen.apply(renderer2, arguments);
      }
    });
  }
}
