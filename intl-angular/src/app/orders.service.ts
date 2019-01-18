import { Injectable } from '@angular/core';

export interface Order {
  OrderDate: string;
  SaleAmount: number;
  OrderStatus: string;
}

const orders: Order[] = [{
  OrderDate: '2014/02/13',
  SaleAmount: 11800,
  OrderStatus: 'Refunded'
}, {
  OrderDate: '2014/03/21',
  SaleAmount: 16050,
  OrderStatus: 'Cancelled'
}, {
  OrderDate: '2014/04/19',
  SaleAmount: 14750,
  OrderStatus: 'Completed'
}, {
  OrderDate: '2014/01/12',
  SaleAmount: 3725,
  OrderStatus: 'Completed'
}, {
  OrderDate: '2014/04/08',
  SaleAmount: 14200,
  OrderStatus: 'Completed'
}, {
  OrderDate: '2014/02/28',
  SaleAmount: 7800,
  OrderStatus: 'Cancelled'
}, {
  OrderDate: '2014/05/28',
  SaleAmount: 9050,
  OrderStatus: 'Completed'
}, {
  OrderDate: '2014/02/06',
  SaleAmount: 20400,
  OrderStatus: 'Completed'
}];

@Injectable()
export class OrdersService {
  // export function that returns orders data to our component
  getOrders(): Order[] {
    return orders;
  }
}
