using DevExtreme.AspNet.Data.Helpers;
using System.Web.Mvc;
using System;

namespace DevExtreme.AspNet.Data {

    [ModelBinder(typeof(DataSourceLoadOptionsBinder))]
    public class DataSourceLoadOptions : DataSourceLoadOptionsBase { }

    class DataSourceLoadOptionsBinder : IModelBinder {

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext) {
            var loadOptions = new DataSourceLoadOptions();
            DataSourceLoadOptionsParser.Parse(loadOptions, key => bindingContext.ValueProvider.GetValue(key)?.AttemptedValue);
            return loadOptions;
        }
    }

}

