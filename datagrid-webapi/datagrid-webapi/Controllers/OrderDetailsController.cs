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

namespace datagrid_webapi.Controllers
{
    public class OrderDetailsController : ApiController
    {
        private Northwind _db = new Northwind();
        // GET api/<controller>
        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            loadOptions.PrimaryKey = new string[] { "OrderID", "ProductID" };

            var orderDetails = from o in _db.Order_Details
                               select new
                               {
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

            return Request.CreateResponse(DataSourceLoader.Load(orderDetails, loadOptions));
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            var key = JsonConvert.DeserializeObject<Order_Detail>(form.Get("key"));
            var values = form.Get("values");

            var orderDetail = _db.Order_Details.Find(key.OrderID, key.ProductID);
            JsonConvert.PopulateObject(values, orderDetail);

            Validate(orderDetail);

            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            var values = form.Get("values");
            var orderDetail = new Order_Detail();
            JsonConvert.PopulateObject(values, orderDetail);

            Validate(orderDetail);

            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _db.Order_Details.Add(orderDetail);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            var key = JsonConvert.DeserializeObject<Order_Detail>(form.Get("key"));
            var orderDetail = _db.Order_Details.Find(key.OrderID, key.ProductID);
            _db.Order_Details.Remove(orderDetail);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}