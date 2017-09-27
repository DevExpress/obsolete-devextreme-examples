using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace datagrid_mvc5.Controllers {

    public class EmployeesController : Controller {
        Northwind _db = new Northwind();

        public ActionResult Get(DataSourceLoadOptions loadOptions) {
            var employeesQuery = from o in _db.Employees
                                 select new {
                                     o.EmployeeID,
                                     o.FirstName,
                                     o.LastName,
                                     FullName = o.FirstName + " " + o.LastName
                                 };

            var loadResult = DataSourceLoader.Load(employeesQuery, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }
    }

}