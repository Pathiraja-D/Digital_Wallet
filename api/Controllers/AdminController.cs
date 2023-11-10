using DigitalWallet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DigitalWallet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DigitalWalletDataContext _context;

        public AdminController(DigitalWalletDataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddAdmins")]
        public async Task<Admin> AddAdmin(Admin objadmin)
        {
             _context.Admins.Add(objadmin);
             await _context.SaveChangesAsync();
            return objadmin;
        }
    }
}
