using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace datagrid_mvc5.Controllers {

    public class ProductsController : Controller {
        Northwind _db = new Northwind();

        [HttpGet]
        public ActionResult Get(DataSourceLoadOptions loadOptions) {
            var query = from i in _db.Products
                        select new {
                            i.ProductID,
                            i.ProductName,
                            i.UnitPrice
                        };

            var loadResult = DataSourceLoader.Load(query, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }
    }

}