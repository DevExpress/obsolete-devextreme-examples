import { Component, OnInit } from '@angular/core';
import { Service, Customer, Employee } from './grids.service';
import 'devextreme/data/odata/store';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css'],
  providers: [Service]
})
export class GridsComponent implements OnInit {

  customers: Customer[];
  employees: Employee[];
  filter: Array<any>;
  fields: Array<any>;
  sales: Array<any>;
  pivotGridDataSource: PivotGridDataSource;

  devAVDataSource:any;

  constructor(service: Service) {
    this.customers = service.getCustomers();
    this.employees = service.getEmployees();
    this.filter = [
      ["Product_Current_Inventory", "<>", 0],
      "or",
      [
          ["Product_Name", "contains", "HD"],
          "and",
          ["Product_Cost", "<", 200]
      ]
    ];
    this.fields = [
      {
          dataField: "Product_Name"
      }, {
          caption: "Cost",
          dataField: "Product_Cost",
          dataType: "number",
          format: "currency"
      }, {
          dataField: "Product_Current_Inventory",
          dataType: "number",
          caption: "Inventory"
      }
  ];

  this.pivotGridDataSource = new PivotGridDataSource({
      fields: [{
          dataField: "region",
          area: "row",
      }, {
          dataField: "city",
          area: "row",
      }, {
          dataField: "date",
          dataType: "date",
          area: "column"
      }, {
          dataField: "amount",
          dataType: "number",
          summaryType: "sum",
          format: "currency",
          area: "data"
      }]
  });

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
  }
  calculateCellValue(data) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
  }

  ngOnInit() {
  }

}
