import { Component, OnInit } from '@angular/core';
// import data service to component
import { Order, OrdersService } from 'app/orders.service';
import { locale, loadMessages } from 'devextreme/localization';

@Component({
  selector: 'app-root',
  providers: [OrdersService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  orders: Order[];

  constructor(private ordersData: OrdersService) {}

  ngOnInit() {
    // get data from orders service
    this.orders = this.ordersData.getOrders();
  }
}
