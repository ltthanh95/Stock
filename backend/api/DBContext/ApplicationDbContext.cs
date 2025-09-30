using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;


namespace api.DBContext
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public DbSet<Portfolio> Portfolios{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.ConfigureWarnings(warnings =>
                warnings.Ignore(RelationalEventId.PendingModelChangesWarning));
        }
       protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Portfolio>(x => x.HasKey(p => new { p.AppUserId, p.StockId }));

            modelBuilder.Entity<Portfolio>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.AppUserId);

            modelBuilder.Entity<Portfolio>()
                .HasOne(u => u.Stock)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.StockId);

            var adminRoleId = "2b2c6d1c-5a2a-4eaa-8a6c-111111111111";
            var userRoleId = "7a8b9c0d-1234-4e5f-9abc-222222222222";

            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Id = adminRoleId,
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                    ConcurrencyStamp = "33333333-4444-5555-6666-777777777777"
                },
                new IdentityRole
                {
                    Id = userRoleId,
                    Name = "User",
                    NormalizedName = "USER",
                    ConcurrencyStamp = "88888888-9999-aaaa-bbbb-cccccccccccc"
                }
            );

            modelBuilder.Entity<Stock>(e =>
            {
                e.HasKey(x => x.Id);

              
                e.Property(x => x.Purchase).HasPrecision(18, 4);
                e.Property(x => x.LastDiv).HasPrecision(18, 4);

                e.HasMany(x => x.Comment)
                .WithOne(c => c.Stock)
                .HasForeignKey(c => c.StockId)
                .OnDelete(DeleteBehavior.Restrict);

                e.HasData(
                    new Stock { Id = 1, Symbol = "AAPL", CompanyName = "Apple Inc.", Purchase = 150.25m, LastDiv = 0.82m, Industry = "Technology", MarketCap = 2500000000000 },
                    new Stock { Id = 2, Symbol = "MSFT", CompanyName = "Microsoft Corp.", Purchase = 280.75m, LastDiv = 0.68m, Industry = "Technology", MarketCap = 2200000000000 }
                );
            });

            modelBuilder.Entity<Comment>(e =>
            {
                e.HasKey(x => x.Id);

                e.HasOne(x => x.Stock)
                .WithMany(s => s.Comment)
                .HasForeignKey(x => x.StockId)
                .OnDelete(DeleteBehavior.Restrict);

                e.HasData(
                    new Comment { Id = 1, Title = "Strong Q1 Results", Content = "Apple posted record-breaking earnings this quarter.", StockId = 1 },
                    new Comment { Id = 2, Title = "New Product Launch", Content = "Apple announced their new VR headset.", StockId = 1 },
                    new Comment { Id = 3, Title = "Cloud Growth", Content = "Azure revenue jumped 30% year over year.", StockId = 2 }
                );
            });
        }

    }
}