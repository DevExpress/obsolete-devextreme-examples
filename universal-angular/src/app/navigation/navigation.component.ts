import { Component } from '@angular/core';
import { Product, Service } from './products.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [Service]
})
export class NavigationComponent {

  products;

  tabs = [
    { text: "user" },
    { text: "analytics" },
    { text: "customers" },
    { text: "search" },
    { text: "favorites" },
    { text: "additional" },
    { text: "clients" },
    { text: "orders" },
    { text: "shipment" }
  ];

  constructor(service: Service) {
      this.products = service.getProducts();
  }

}
