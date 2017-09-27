$(function() {

    $("#grid").dxDataGrid({
        height: 800,
        remoteOperations: { paging: true, filtering: true, sorting: true, grouping: true, summary: true, groupPaging: true },
        dataSource: DevExpress.data.AspNet.createStore({
            key: "OrderID",
            loadUrl: "Orders/Get",
            insertUrl: "Orders/Post",
            updateUrl: "Orders/Put",
            deleteUrl: "Orders/Delete"
        }),
        editing: {
            mode: "form",
            form: {
                colCount: 4
            },
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        onInitNewRow: function(e) {
            e.data = {
                OrderDate: new Date()
            };
        },
        columnAutoWidth: true,
        filterRow: { visible: true },
        groupPanel: { visible: true },
        grouping: { autoExpandAll: false },
        pager: {
            showInfo: true
        },
        masterDetail: {
            enabled: true,
            template: masterDetailTemplate
        },
        columns: [
            {
                dataField: "OrderID",
                formItem: {
                    visible: false
                }
            },
            {
                caption: "Customer",
                calculateDisplayValue: "CustomerName",
                dataField: "CustomerID",
                lookup: {
                    valueExpr: "CustomerID",
                    displayExpr: "ContactName",
                    dataSource: {
                        paginate: true,
                        store: DevExpress.data.AspNet.createStore({
                            key: "CustomerID",
                            loadUrl: "Customers/Get"
                        })
                    }
                }
            },
            {
                caption: "Employee",
                calculateDisplayValue: "EmployeeName",
                dataField: "EmployeeID",
                lookup: {
                    valueExpr: "EmployeeID",
                    displayExpr: "FullName",
                    dataSource: {
                        paginate: true,
                        store: DevExpress.data.AspNet.createStore({
                            key: "EmployeeID",
                            loadUrl: "Employees/Get"
                        })
                    }
                }
            },
            { dataField: "OrderDate", dataType: "date" },
            { dataField: "RequiredDate", dataType: "date" },
            { dataField: "ShippedDate", dataType: "date" },
            {
                dataField: "ShipVia",
                calculateDisplayValue: "ShipViaName",
                lookup: {
                    valueExpr: "ShipperID",
                    displayExpr: "CompanyName",
                    dataSource: {
                        paginate: true,
                        store: DevExpress.data.AspNet.createStore({
                            key: "ShipperID",
                            loadUrl: "Shippers/Get"
                        })
                    }
                }
            },
            "Freight",
            "ShipName",
            "ShipAddress",
            "ShipCity",
            "ShipCountry"
        ]
    });

    function masterDetailTemplate(container, options) {
        $("<div>").addClass("grid").appendTo(container).dxDataGrid({
            remoteOperations: true,
            dataSource: {
                filter: ["OrderID", "=", options.key],
                store: DevExpress.data.AspNet.createStore({
                    key: ["OrderID", "ProductID"],
                    loadUrl: "OrderDetails/Get",
                    insertUrl: "OrderDetails/Post",
                    updateUrl: "OrderDetails/Put",
                    deleteUrl: "OrderDetails/Delete",
                })
            },
            showBorders: true,
            editing: {
                allowUpdating: true,
                allowAdding: true,
                allowDeleting: true
            },
            onInitNewRow: function(e) {
                e.data = {
                    OrderID: options.key,
                    Quantity: 1,
                    Discount: 0
                }
            },
            onEditorPreparing: function(e) {
                if(e.dataField === "ProductID") {
                    var dataGrid = e.component;
                    var valueChanged = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(args) {
                        valueChanged.apply(this, arguments);

                        var product = args.component.getDataSource().items().filter(function(data) { return data.ProductID === args.value })[0];

                        if(product) {
                            dataGrid.cellValue(e.row.rowIndex, "UnitPrice", product.UnitPrice);
                        }
                    }
                }
            },
            summary: {
                totalItems: [
                    { column: "Total", summaryType: "sum", displayFormat: "Total: {0}", valueFormat: { type: "currency", precision: 2 } }
                ]
            },
            columns: [
                {
                    dataField: "ProductID",
                    caption: "Product",
                    calculateDisplayValue: "ProductName",
                    lookup: {
                        valueExpr: "ProductID",
                        displayExpr: "ProductName",
                        dataSource: {
                            paginate: true,
                            store: DevExpress.data.AspNet.createStore({
                                key: "ProductID",
                                loadUrl: "Products/Get"
                            })
                        }
                    }
                },
                { dataField: "UnitPrice", format: { type: "currency", precision: 2 }, allowEditing: false },
                "Quantity",
                "Discount",
                { dataField: "Total", format: { type: "currency", precision: 2 }, allowEditing: false, calculateCellValue: function(data) { return data.UnitPrice ? data.UnitPrice * data.Quantity * (1 - data.Discount) : null } }
            ]
        })
    }
});