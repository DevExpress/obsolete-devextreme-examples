import { Component } from '@angular/core';
import { Product, Service } from './products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [Service]
})
export class NavigationComponent {

  products;

  tabs = [
    { text: 'user' },
    { text: 'analytics' },
    { text: 'customers' },
    { text: 'search' },
    { text: 'favorites' },
    { text: 'additional' },
    { text: 'clients' },
    { text: 'orders' },
    { text: 'shipment' }
  ];

  toolbarItems = [
    {
        location: 'before',
        widget: 'dxButton',
        options: {
            type: 'back',
            text: 'Back'
        }
    }, {
        location: 'before',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
            icon: 'refresh'
        }
    }, {
        location: 'center',
        locateInMenu: 'never',
        template: () => {
            return '<div class=\'toolbar-label\'><b>Tom\'s Club</b> Products</div>';
        }
    }, {
        location: 'after',
        widget: 'dxTextBox',
        locateInMenu: 'auto'
    }, {
        location: 'after',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
            icon: 'plus'
        }
    }, {
        locateInMenu: 'always',
        text: 'Save'
    }, {
        locateInMenu: 'always',
        text: 'Print'
    }, {
        locateInMenu: 'always',
        text: 'Settings'
    }
  ];

  constructor(service: Service) {
      this.products = service.getProducts();
  }

}
