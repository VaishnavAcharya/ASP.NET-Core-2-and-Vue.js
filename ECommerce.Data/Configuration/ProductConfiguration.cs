using ECommerce.Domain.Model.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace ECommerce.Data.Configuration
{
    public class ProductConfiguration: IEntityTypeConfiguration<Product>
    {
        public void Configure (EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName(@"Id").HasColumnType("int").IsRequired();
            builder.Property(x => x.Name).HasColumnName(@"Name").HasColumnType("varchar").IsRequired();
            builder.Property(x => x.Slug).HasColumnName(@"Slug").HasColumnType("varchar").IsRequired();
            builder.Property(x => x.Thumbnail).HasColumnName(@"Thumbnail").HasColumnType("varchar").IsRequired();
            builder.Property(x => x.ShortDescription).HasColumnName(@"ShortDescription").HasColumnType("varchar").IsRequired();
            builder.Property(x => x.Description).HasColumnName(@"Description").HasColumnType("varchar").IsRequired();
            builder.Property(x => x.Price).HasColumnName(@"Price").HasColumnType("decimal(14, 3)").IsRequired();

            builder.HasIndex(x => x.Slug).IsUnique();
        }
    }
}
