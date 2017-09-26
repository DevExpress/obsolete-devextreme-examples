using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace datagrid_mvc5.Controllers {

    public class CustomersController : Controller {
        Northwind _db = new Northwind();

        public ActionResult Get(DataSourceLoadOptions loadOptions) {
            var loadResult = DataSourceLoader.Load(_db.Customers, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }
    }

}