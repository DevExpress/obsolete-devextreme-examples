$(function() {
    $("#grid").dxPivotGrid({
        height: 800,
        scrolling: { mode: "virtual" },
        fieldPanel: { visible: true },
        allowSorting: true,
        allowSortingBySummary: true,
        onCellClick: function(e) {
            if(e.area == "data") {
                var drillDownDataSource = e.component.getDataSource().createDrillDownDataSource(e.cell);

                $("#popup").dxPopup({
                    title: "Drill Down Data",
                    onShown: function(e) {
                        if(!e.component.content().children().length) {
                            e.component.content().append($("<div>"))
                        }
                        e.component.content().children().dxDataGrid({
                            height: "100%",
                            remoteOperations: true,
                            columnAutoWidth: true,
                            dataSource: drillDownDataSource,
                            columns: ["OrderID", "CustomerName", "EmployeeName",
                                { dataField: "OrderDate", dataType: "date" },
                                { dataField: "RequiredDate", dataType: "date" },
                                { dataField: "ShippedDate", dataType: "date" },
                               "ShipViaName",
                                "Freight",
                                "ShipName",
                                "ShipCountry",
                                "ShipCity",
                                "ShipAddress",
                                { dataField: "SalesAmount", format: { type: "currency", presicion: 2 }, fixed: true, fixedPosition: "right" }
                            ]
                        });
                    }
                }).dxPopup("show");
            }
        },
        dataSource: {
            fields: [
                { dataField: "OrderDate", dataType: "date", area: "column", sortByPath: [] },
                { groupName: "OrderDate", groupInterval: "quarter", visible: false },
                { dataField: "ShipCountry", area: "row", sortBySummaryField: "SalesAmount", sortOrder: "desc" },
                { dataField: "ShipCity", area: "row", sortBySummaryField: "SalesAmount", sortOrder: "desc" },
                { dataField: "SalesAmount", caption: "Sale Amount", format: { type: "currency", presicion: 2 }, summaryType: "sum", area: "data" }
            ],
            remoteOperations: true,
            store: DevExpress.data.AspNet.createStore({
                key: "OrderID",
                loadUrl: "api/Orders"
            })
        }
    });
});