using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace datagrid_mvc5.Controllers {

    public class OrdersController : Controller {
        Northwind _db = new Northwind();

        [HttpGet]
        public ActionResult Get(DataSourceLoadOptions loadOptions) {
            loadOptions.PrimaryKey = new[] { "OrderID" };

            var ordersQuery = from o in _db.Orders
                              select new {
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
                                  o.ShipCountry
                              };

            var loadResult = DataSourceLoader.Load(ordersQuery, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }

        [HttpPut]
        public ActionResult Put(int key, string values) {
            var order = _db.Orders.Find(key);
            JsonConvert.PopulateObject(values, order);

            if(!TryValidateModel(order)) {                
                Response.StatusCode = 400;
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }

            _db.SaveChanges();
            return new EmptyResult();
        }

        [HttpPost]
        public ActionResult Post(string values) {
            var order = new Order();
            JsonConvert.PopulateObject(values, order);

            if(!TryValidateModel(order)) {
                Response.StatusCode = 400;
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }

            _db.Orders.Add(order);
            _db.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete]
        public ActionResult Delete(int key) {
            var order = _db.Orders.Find(key);
            _db.Orders.Remove(order);
            _db.SaveChanges();

            return new EmptyResult();
        }
    }
}