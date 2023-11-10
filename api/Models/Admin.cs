using System.ComponentModel.DataAnnotations;

namespace DigitalWallet.Models
{
    public class Admin
    {
        [Key]
        public int AdminId {  get; set; }
        public string AdminEmail {  get; set; }
        public string AdminPassword { get; set; }


    }
}
