import { Component } from '@angular/core';
import { Product, Service } from './products.service';

@Component({
  selector: 'app-actions-and-lists',
  templateUrl: './actions-and-lists.component.html',
  styleUrls: ['./actions-and-lists.component.css'],
  providers: [Service]
})
export class ActionsAndListsComponent {

  products;
  plainProducts;
  images;

  constructor(service: Service) {
    this.products = service.getProducts();
    this.plainProducts = service.getPlainProducts();
    this.images = service.getImages();
  }

}
