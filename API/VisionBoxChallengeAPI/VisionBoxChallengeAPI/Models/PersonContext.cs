using Microsoft.EntityFrameworkCore;

namespace VisionBoxChallengeAPI.Models
{
    public class PersonContext: DbContext
    {

        public PersonContext(DbContextOptions<PersonContext> options) : base(options) { }

        public DbSet<Person> Persons { get; set; } = null;

    }
}
