import { Component, OnInit } from '@angular/core';
import { Appointment, Service } from './appointments.service';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.css'],
  providers: [Service]
})
export class SchedulersComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 22);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit() {
  }

}
