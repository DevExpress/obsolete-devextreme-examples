import { Component } from '@angular/core';
import { Product, Service } from './products.service';
import notify from 'devextreme/ui/notify';

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

  toolbarItems = [
    {
        location: 'before',
        widget: 'dxButton',
        options: {
            type: 'back',
            text: 'Back',
            onClick: () => {
                notify('Back button has been clicked!');
            }
        }
    }, {
        location: 'before',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
            icon: 'refresh',
            onClick: () => {
                notify('Refresh button has been clicked!');
            }
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
            icon: 'plus',
            onClick: () => {
                notify('Add button has been clicked!');
            }
        }
    }, {
        locateInMenu: 'always',
        text: 'Save',
        onClick: () => {
            notify('Save option has been clicked!');
        }
    }, {
        locateInMenu: 'always',
        text: 'Print',
        onClick: () => {
            notify('Print option has been clicked!');
        }
    }, {
        locateInMenu: 'always',
        text: 'Settings',
        onClick: () => {
            notify('Settings option has been clicked!');
        }
    }
  ];

  constructor(service: Service) {
      this.products = service.getProducts();
  }

}
