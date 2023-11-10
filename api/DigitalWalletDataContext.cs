using DigitalWallet.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace DigitalWallet
{
    public class DigitalWalletDataContext : IdentityDbContext
    {
        public DigitalWalletDataContext(DbContextOptions<DigitalWalletDataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Admin>Admins { get; set; }
       

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=ASUS_TUF_A15_D\\SQLEXPRESS;Initial Catalog=DigitalWalletDB;Integrated Security=true;TrustServerCertificate=True");
        }

        

    }
}
