using datagrid_webapi.Models;
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

namespace datagrid_webapi.Controllers
{
    public class OrdersController : ApiController
    {
        Northwind _db = new Northwind();
        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            //  used for create case for show error in DataSourceLoader.Load which leads to break work of DxGrid
            if (_db.Orders.All(q => q.EmployeeID != null))
            {
                var someOrders = _db.Orders.Take(10).ToList();
                someOrders.ForEach(q => q.EmployeeID = null);
                _db.SaveChanges();
            }

            loadOptions.PrimaryKey = new[] { "OrderID" };

            var orders = from o in _db.Orders
                         select new
                         {
                             o.OrderID,
                             o.CustomerID,
                             CustomerName = o.Customer.ContactName,
                             o.EmployeeID,
                             // need for reproduce case when group item key is null
                             EmployeeName = o.Employee != null ? o.Employee.FirstName + " " + o.Employee.LastName : null,
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

            return Request.CreateResponse(DataSourceLoader.Load(orders, loadOptions));
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");

            var order = _db.Orders.Find(key);
            JsonConvert.PopulateObject(values, order);

            Validate(order);

            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            var values = form.Get("values");
            var order = new Order();
            JsonConvert.PopulateObject(values, order);

            Validate(order);

            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _db.Orders.Add(order);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var order = _db.Orders.Find(key);
            _db.Orders.Remove(order);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}