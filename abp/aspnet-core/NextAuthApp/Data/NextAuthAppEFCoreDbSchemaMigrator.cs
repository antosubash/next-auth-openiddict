using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace NextAuthApp.Data;

public class NextAuthAppEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public NextAuthAppEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the NextAuthAppDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<NextAuthAppDbContext>()
            .Database
            .MigrateAsync();
    }
}
