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
    public class ShippersController : ApiController
    {
        Northwind _db = new Northwind();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            var lookup = from i in _db.Shippers
                         select new
                         {
                             ShipperID = i.ShipperID,
                             CompanyName = i.CompanyName
                         };

            return Request.CreateResponse(DataSourceLoader.Load(lookup, loadOptions));
        }
    }
}