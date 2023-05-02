# Intl-Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and demonstrates how you can create a simple application using [devextreme-angular](https://github.com/DevExpress/devextreme-angular) with localization and [devextreme-intl](https://github.com/DevExpress/devextreme-intl) formats.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Step-by-Step guide how this project was created

* Get Angular CLI
```Shell
npm install -g @angular/cli
```
* Make a new project
```Shell
ng new YOUR_PROJECT_NAME
```
* Switch to your project folder
```Shell
cd YOUR_PROJECT_NAME
```
* Add DevExpress libraries
```Shell
npm install devextreme devextreme-angular devextreme-intl --save
```
* Add global styles to **angular-cli.json** ("styles" section)
```json
"styles": [
    "styles.css",
    //add DevExteme styles
    "../node_modules/devextreme-dist/css/dx.common.css",
    "../node_modules/devextreme-dist/css/dx.light.css"
],
```
* Add service providing data to your application
```Shell
ng g service orders
```
Change directory to **../src/app** and edit **orders.service.ts**. Let's describe some data here
```typescript
import {
  Injectable
} from '@angular/core';

export interface Order {
  OrderDate: string;
  SaleAmount: number;
  OrderStatus: string;
}

let orders : Order[] = [{
  OrderDate: "2014/02/13",
  SaleAmount: 11800,
  OrderStatus: "Refunded"
}, {
  OrderDate: "2014/03/21",
  SaleAmount: 16050,
  OrderStatus: "Cancelled"
}, {
  OrderDate: "2014/04/19",
  SaleAmount: 14750,
  OrderStatus: "Completed"
}, {
  OrderDate: "2014/01/12",
  SaleAmount: 3725,
  OrderStatus: "Completed"
}, {
  OrderDate: "2014/04/08",
  SaleAmount: 14200,
  OrderStatus: "Completed"
}, {
  OrderDate: "2014/02/28",
  SaleAmount: 7800,
  OrderStatus: "Cancelled"
}, {
  OrderDate: "2014/05/28",
  SaleAmount: 9050,
  OrderStatus: "Completed"
}, {
  OrderDate: "2014/02/06",
  SaleAmount: 20400,
  OrderStatus: "Completed"
}];

@Injectable()
export class OrdersService {
  //export function that returns orders data to our component
  getOrders(): Order[] {
    return orders;
  }
}
```
* Import DevExtreme modules to the application and load localization messages.
Open **..src/app/app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import it to change locale and load localization messages
import { locale, loadMessages } from 'devextreme/localization'; 

//Import DevExtreme and DevExteme-intl
import { DevExtremeModule } from 'devextreme-angular';
import 'devextreme-intl';

import { AppComponent } from './app.component';

//Load localized messages (English included by default)
let messagesDe = require("devextreme/localization/messages/de.json"),
  messagesJa = require("devextreme/localization/messages/ja.json"),
  messagesRu = require("devextreme/localization/messages/ru.json");
  
loadMessages(messagesRu);
loadMessages(messagesDe);
loadMessages(messagesJa);
  
//Set locale according the browser language
locale(navigator.language);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Add DevExtremeModule to imports
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
* Setup application component at **../src/app/app.component.ts**
```typescript
import { Component, OnInit } from '@angular/core';
//import data service to component
import { Order, OrdersService } from 'app/orders.service'; 
import { locale, loadMessages } from 'devextreme/localization';

@Component({
  selector: 'app-root',
  //add service to providers
  providers: [OrdersService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  orders: Order[];

  constructor(private ordersData: OrdersService) {}

  ngOnInit() {
    //get data from orders service
    this.orders = this.ordersData.getOrders(); 
  }
}
```
* Describe the html template at **../src/app/app.template.html**
```html
<h1>Grid with Intl date and currency formats</h1>
<dx-data-grid  
    [dataSource]="orders">
    <dxi-column 
        dataField="OrderDate" 
        dataType="date" 
        [format]="{ year: 'numeric', month: 'long', day: '2-digit', timeZoneName: 'short' }"></dxi-column>
    <dxi-column dataField="OrderStatus"></dxi-column>
    <dxi-column 
        dataField="SaleAmount" 
        dataType="number" 
        [format]="{ style: 'currency', currency: 'JPY', minimumFractionDigits: 2 }"></dxi-column>
    <dxo-summary>
        <dxi-total-item 
            column="OrderDate"
            summaryType="min"
            [valueFormat]="{ year: 'numeric', month: 'long', day: '2-digit' }"></dxi-total-item>
        <dxi-total-item 
            column="SaleAmount"
            summaryType="sum"
            [valueFormat]="{ style: 'currency', currency: 'JPY', minimumFractionDigits: 2 }"></dxi-total-item>
    </dxo-summary>
</dx-data-grid>
```
* Run `ng serve` and navigate to [http://localhost:4200/](http://localhost:4200/). Your project is ready!

## Further help
To get more help on the `@angular/cli` use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).  
To get more help on the `devextreme-angular` check out the [devextreme-angular README](https://github.com/DevExpress/devextreme-angular/blob/master/README.md).
