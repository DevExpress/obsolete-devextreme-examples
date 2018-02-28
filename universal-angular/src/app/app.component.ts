import { Component, Renderer2 } from '@angular/core';
import * as domAdapter from 'devextreme/core/dom_adapter';
import DxChart from 'devextreme/viz/chart';
import { Service, Customer, Employee } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  customers: Customer[];
  employees: Employee[];
  constructor(private renderer2: Renderer2, service: Service) {
    // NOTE: Temporary workarounds. Should be removed after next DevExtreme pre-release
    DxChart.prototype.element = function() {
      return renderer2.createElement('div');
    }
    domAdapter.inject({
      listen: function(element) {
        if(element.window === element) {
          return function() {};
        }
        return renderer2.listen.apply(renderer2, arguments);
      }
    });

    this.customers = service.getCustomers();
    this.employees = service.getEmployees();
  }
  calculateCellValue(data) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
  }
}
