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
    public class EmployeesController : ApiController
    {
        private Northwind _db = new Northwind();
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            var employees = from o in _db.Employees
                            select new
                               {
                                   o.EmployeeID,
                                   o.FirstName,
                                   o.LastName,
                                   FullName = o.FirstName + " " + o.LastName
                               };
            return Request.CreateResponse(DataSourceLoader.Load(employees, loadOptions));
        }
    }
}