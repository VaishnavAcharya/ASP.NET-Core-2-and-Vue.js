using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Razor;

namespace ECommerce.Infrastructure
{
    public class FeatureLocationExpander : IViewLocationExpander
    {
        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            return new[] {"/Features/{1}/{0}.cshtml", "/Features/Shared/{0}.cshtml"};
        }

        public void PopulateValues(ViewLocationExpanderContext context)
        {
            //Use this method to populate any values to be used in the ExpandViewLocations method
            //context.Values["test"] = "test value";
        }
    }
}