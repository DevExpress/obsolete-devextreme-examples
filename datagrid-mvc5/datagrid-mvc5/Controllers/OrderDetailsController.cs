using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace datagrid_mvc5.Controllers {

    public class OrderDetailsController : Controller {
        Northwind _db = new Northwind();

        [HttpGet]
        public ActionResult Get(DataSourceLoadOptions loadOptions) {
            loadOptions.PrimaryKey = new string[] { "OrderID", "ProductID" };

            var orderDetailsQuery = from o in _db.Order_Details
                                    select new {
                                        o.OrderID,
                                        o.ProductID,
                                        ShipCity = o.Order.ShipCity,
                                        ShipCountry = o.Order.ShipCountry,
                                        ShippedDate = o.Order.ShippedDate,
                                        RequiredDate = o.Order.RequiredDate,
                                        ProductName = o.Product.ProductName,
                                        o.UnitPrice,
                                        o.Quantity,
                                        o.Discount,
                                        Total = o.UnitPrice * o.Quantity * (100 - (int)(o.Discount * 100)) / 100
                                    };

            var loadResult = DataSourceLoader.Load(orderDetailsQuery, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }

        [HttpPut]
        public ActionResult Put(string key, string values) {
            var keyObj = JsonConvert.DeserializeObject<IDictionary>(key);

            var orderDetail = _db.Order_Details.Find(keyObj["OrderID"], keyObj["ProductID"]);
            JsonConvert.PopulateObject(values, orderDetail);

            if(!TryValidateModel(orderDetail)) {
                Response.StatusCode = 400;                
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }

            _db.SaveChanges();
            return new EmptyResult();
        }

        [HttpPost]
        public ActionResult Post(string values) {
            var orderDetail = new Order_Detail();
            JsonConvert.PopulateObject(values, orderDetail);

            if(!TryValidateModel(orderDetail)) {
                Response.StatusCode = 400;
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }

            _db.Order_Details.Add(orderDetail);
            _db.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete]
        public ActionResult Delete(string key) {
            var keyObj = JsonConvert.DeserializeObject<IDictionary>(key);
            var orderDetail = _db.Order_Details.Find(keyObj["OrderID"], keyObj["ProductID"]);
            _db.Order_Details.Remove(orderDetail);
            _db.SaveChanges();

            return new EmptyResult();
        }
    }
}