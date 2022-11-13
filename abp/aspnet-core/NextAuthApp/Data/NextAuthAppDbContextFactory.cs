using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace NextAuthApp.Data;

public class NextAuthAppDbContextFactory : IDesignTimeDbContextFactory<NextAuthAppDbContext>
{
    public NextAuthAppDbContext CreateDbContext(string[] args)
    {

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<NextAuthAppDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new NextAuthAppDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
