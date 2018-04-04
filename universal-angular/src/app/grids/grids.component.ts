import { Component, OnInit } from '@angular/core';
import { CustomersService, Customer } from './customers.service';
import { EmployeesService, Employee } from './employees.service';
import { SalesService, Sale } from './sales.service';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css'],
  providers: [CustomersService, EmployeesService, SalesService]
})
export class GridsComponent implements OnInit {

  customers: Customer[];
  employees: Employee[];
  filter: Array<any>;
  fields: Array<any>;
  sales: Array<any>;

  devAVDataSource: any;
  salseDataSource: any;

  constructor(customersService: CustomersService, employeesService: EmployeesService, salesService: SalesService) {
    this.customers = customersService.getCustomers();
    this.employees = employeesService.getEmployees();
    this.filter = [
      ['Product_Current_Inventory', '<>', 0],
      'or',
      [
          ['Product_Name', 'contains', 'HD'],
          'and',
          ['Product_Cost', '<', 200]
      ]
    ];
    this.fields = [
      {
          dataField: 'Product_Name'
      }, {
          caption: 'Cost',
          dataField: 'Product_Cost',
          dataType: 'number',
          format: 'currency'
      }, {
          dataField: 'Product_Current_Inventory',
          dataType: 'number',
          caption: 'Inventory'
      }
  ];

    this.devAVDataSource = {
      store: {
          type: 'odata',
          url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
      },
      select: [
          'Product_ID',
          'Product_Name',
          'Product_Cost',
          'Product_Sale_Price',
          'Product_Retail_Price',
          'Product_Current_Inventory'
      ],
      filter: ['Product_Current_Inventory', '>', 0]
    };

    this.salseDataSource = {
      fields: [{
          caption: 'Region',
          width: 120,
          dataField: 'region',
          area: 'row'
      }, {
          caption: 'City',
          dataField: 'city',
          width: 150,
          area: 'row',
          selector: this.citySelector
      }, {
          dataField: 'date',
          dataType: 'date',
          area: 'column'
      }, {
          caption: 'Sales',
          dataField: 'amount',
          dataType: 'number',
          summaryType: 'sum',
          format: 'currency',
          area: 'data'
      }],
      store: salesService.getSales()
    };
  }

  citySelector(data) {
    return data.city + ' (' + data.country + ')';
  }
  calculateCellValue(data) {
    return [data.Title, data.FirstName, data.LastName].join(' ');
  }

  ngOnInit() {
  }

}
