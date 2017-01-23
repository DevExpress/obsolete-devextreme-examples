import {Component, OnInit} from '@angular/core'
import {Order, OrderService} from './order.service'

@Component({
    selector: 'my-app',
    template: `
        <dx-data-grid
            [dataSource]="orders">

            <dxo-editing mode="row" [allowUpdating]="true"></dxo-editing>

            <dxi-column dataField="OrderNumber" caption="Invoice Number"></dxi-column>
            <dxi-column dataField="OrderDate" dataType="date" format="longDate" alignment="right"></dxi-column>
            <dxi-column dataField="SaleAmount" [format]="{ currency: 'EUR' }"></dxi-column>
            <dxi-column dataField="Employee"></dxi-column>
            <dxi-column dataField="CustomerStoreCity" caption="City"></dxi-column>
            <dxi-column dataField="CustomerStoreState" caption="State"></dxi-column>

            <dxo-paging [pageSize]="10"></dxo-paging>
            <dxo-pager
                [showPageSizeSelector]="true"
                [allowedPageSizes]="[5, 10, 20]"
                [showInfo]="true"></dxo-pager>
        </dx-data-grid>
    `
    ,
    providers: [ OrderService ]
})
export class App implements OnInit {
    orders: Order[];
    constructor(private orderService: OrderService) {}

    ngOnInit() {
        this.orders = this.orderService.getOrders();
    }
}