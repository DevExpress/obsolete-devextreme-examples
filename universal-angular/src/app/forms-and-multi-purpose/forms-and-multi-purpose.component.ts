import { Component, OnInit } from '@angular/core';
import { Service, Employee } from './forms-and-multi-purpose.service';

@Component({
  selector: 'app-forms-and-multi-purpose.component',
  templateUrl: './forms-and-multi-purpose.component.html',
  styleUrls: ['./forms-and-multi-purpose.component.css'],
  providers: [Service]
})
export class FormsAndMultiPurposeComponent implements OnInit {
  employee : Employee;

  constructor(service: Service) {
    this.employee = service.getEmployee();
  }

  ngOnInit() {
  }
}
