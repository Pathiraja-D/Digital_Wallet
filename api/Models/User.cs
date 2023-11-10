using System.ComponentModel.DataAnnotations;

namespace DigitalWallet.Models
{
    public class User
    {
        [Key]
        public int IncrementId { get; set; }
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }
        public string? Address { get; set; }
        public int TelephoneNo { get; set; }
        public string? Email { get; set; }
    }
}
