import { Component } from '@angular/core';
import { Population, Service } from './viz.service';

@Component({
  selector: 'app-viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css'],
  providers: [Service]
})

export class VizComponent {
  populationData: Population[];

  constructor(service: Service) {
      this.populationData = service.getPopulationData();
  }
}
