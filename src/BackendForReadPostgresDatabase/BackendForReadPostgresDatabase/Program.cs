using ICSSoft.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

using Unity;
using Unity.Microsoft.DependencyInjection;

namespace BackendForReadPostgresDatabase
{
    public class Program
    {
        private static readonly IUnityContainer Container = UnityFactory.GetContainer();

        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseUnityServiceProvider(Container)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
