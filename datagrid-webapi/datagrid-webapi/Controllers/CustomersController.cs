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
    public class CustomersController : ApiController
    {
        private Northwind _db = new Northwind();
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            return Request.CreateResponse(DataSourceLoader.Load(_db.Customers, loadOptions));
        }
    }
}