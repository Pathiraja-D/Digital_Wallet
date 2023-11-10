using DigitalWallet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;


namespace DigitalWallet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        
        private DigitalWalletDataContext _context;
        public LoginController(DigitalWalletDataContext context)
        { 
            _context = context;
        }

        [HttpPost]
        [Route("login")]
        public int Login(LoginRequest loginrequest)
        {
            if (IsValidUser(loginrequest.Email, loginrequest.Password)=="user")
            {
                return 1;
            }
            else if(IsValidUser(loginrequest.Email,loginrequest.Password)=="admin")
            {
                return 2;
            }
            else
            {
                return 3;
            }
        }


        private String IsValidUser(string email,string password)
        {
            var checkuser = _context.Users.Where(x => x.Email == email && x.Password == password).FirstOrDefault();
            var checkadmin = _context.Admins.Where(y=>y.AdminEmail==email && y.AdminPassword==password).FirstOrDefault();
            if(checkuser!=null)
            { 
                return "user";
            }
            else if(checkadmin!=null)
            {
                return "admin";
            }
            return null;
        }
            
        
    }
}
