using datagrid_webapi.Models;
using DevExtreme.AspNet.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace datagrid_webapi.Controllers
{
    public class ProductsController : ApiController
    {
        private Northwind _db = new Northwind();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            var lookup = from i in _db.Products
                         select new
                         {
                             i.ProductID,
                             i.ProductName,
                             i.UnitPrice
                         };

            return Request.CreateResponse(DataSourceLoader.Load(lookup, loadOptions));
        }
    }
}