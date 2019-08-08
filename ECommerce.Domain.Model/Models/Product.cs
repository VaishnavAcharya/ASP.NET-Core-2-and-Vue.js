using System;
using System.Collections.Generic;
using System.Text;

namespace ECommerce.Domain.Model.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public string Thumbnail { get; set; }

        public string ShortDescription { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }
    }
}
