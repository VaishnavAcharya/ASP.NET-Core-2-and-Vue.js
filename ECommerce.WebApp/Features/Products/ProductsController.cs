using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.WebApp.Features.Products
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly EcommerceContext _dbContext;

        public ProductsController(EcommerceContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _dbContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetProduct(string slug)
        {
            var product = await _dbContext.Products.SingleOrDefaultAsync(x => x.Slug == slug);
            if (product == null)
                return NotFound();
            return Ok(product);
        }
    }
}