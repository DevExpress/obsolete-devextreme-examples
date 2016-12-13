using pivotgrid_webapi.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace pivotgrid_webapi.Controllers
{
    public class OrdersController : ApiController
    {
        Northwind _db = new Northwind();
        // GET api/<controller>
        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            loadOptions.PrimaryKey = new[] { "OrderID" };

            var orders = from o in _db.Orders
                         select new
                         {
                             o.OrderID,
                             o.CustomerID,
                             CustomerName = o.Customer.ContactName,
                             o.EmployeeID,
                             EmployeeName = o.Employee.FirstName + " " + o.Employee.LastName,
                             o.OrderDate,
                             o.RequiredDate,
                             o.ShippedDate,
                             o.ShipVia,
                             ShipViaName = o.Shipper.CompanyName,
                             o.Freight,
                             o.ShipName,
                             o.ShipAddress,
                             o.ShipCity,
                             o.ShipRegion,
                             o.ShipPostalCode,
                             o.ShipCountry,
                             SalesAmount = o.Order_Details.Sum((detail) => detail.UnitPrice * detail.Quantity * (100 - (int)(detail.Discount * 100)) / 100)
                         };

            return Request.CreateResponse(DataSourceLoader.Load(orders, loadOptions));
        }
    }
}