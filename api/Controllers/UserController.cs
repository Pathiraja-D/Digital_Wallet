using DigitalWallet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace DigitalWallet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DigitalWalletDataContext _context;

        public UserController(DigitalWalletDataContext context)
        {
            _context = context;
        }




        [HttpGet]
        [Route("GetUser")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<User> AddUser(User objuser)
        {
            _context.Users.Add(objuser);
            await _context.SaveChangesAsync();
            return objuser;
        }

        [HttpPatch]
        [Route("UpdateUser/{id}")]

        public async Task<User> UpdateUser(User objuser)
        {
            _context.Entry(objuser).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objuser;
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]

        public bool DeleteUser(int id)
        {
            bool a = false;
            var user = _context.Users.Find(id);
            if (user != null)
            {
                a = true;
                _context.Entry(user).State = EntityState.Deleted;
                _context.SaveChanges();
            }
            else
            {
                a = false;
            }

            return a;
        }
    }
}
