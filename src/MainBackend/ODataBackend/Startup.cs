namespace Flexberry.Sample.AuditBigData
{
    using System;
    using ICSSoft.Services;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    using ICSSoft.STORMNET.Security;
    using IIS.Caseberry.Logging.Objects;
    using Microsoft.AspNet.OData.Extensions;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using NewPlatform.Flexberry.AuditBigData;
    using NewPlatform.Flexberry.AuditBigData.Serialization;
    using NewPlatform.Flexberry.ORM;
    using NewPlatform.Flexberry.ORM.ODataService.Extensions;
    using NewPlatform.Flexberry.ORM.ODataService.Files;
    using NewPlatform.Flexberry.ORM.ODataService.Model;
    using NewPlatform.Flexberry.ORM.ODataService.WebApi.Extensions;
    using NewPlatform.Flexberry.ORM.ODataServiceCore.Common.Exceptions;
    using NewPlatform.Flexberry.Services;
    using Unity;

    /// <summary>
    /// Класс настройки запуска приложения.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Startup" /> class.
        /// </summary>
        /// <param name="configuration">An application configuration properties.</param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// An application configuration properties.
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// Configurate application services.
        /// </summary>
        /// <remarks>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </remarks>
        /// <param name="services">An collection of application services.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            string connStr = Configuration["DefConnStr"];

            services.AddMvcCore(
                    options =>
                    {
                        options.Filters.Add<CustomExceptionFilter>();
                        options.EnableEndpointRouting = false;
                    })
                .AddFormatterMappings();

            services.AddOData();

            services.AddControllers().AddControllersAsServices();

            services.AddCors();
            services
                .AddHealthChecks()
                .AddNpgSql(connStr);
        }

        /// <summary>
        /// Configurate the HTTP request pipeline.
        /// </summary>
        /// <remarks>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </remarks>
        /// <param name="app">An application configurator.</param>
        /// <param name="env">Information about web hosting environment.</param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            LogService.LogInfo("Инициирован запуск приложения.");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHealthChecks("/health");
            });

            app.UseODataService(builder =>
            {
                builder.MapFileRoute();

                var assemblies = new[]
                {
                    typeof(ObjectsMarker).Assembly,
                    typeof(ApplicationLog).Assembly,
                    typeof(UserSetting).Assembly,
                    typeof(Lock).Assembly,

                };
                var modelBuilder = new DefaultDataObjectEdmModelBuilder(assemblies, true);

                var token = builder.MapDataObjectRoute(modelBuilder);
            });
        }

        /// <summary>
        /// Configurate application container.
        /// </summary>
        /// <param name="container">Container to configure.</param>
        public void ConfigureContainer(IUnityContainer container)
        {
            if (container == null)
            {
                throw new ArgumentNullException(nameof(container));
            }

            // FYI: сервисы, в т.ч. контроллеры, создаются из дочернего контейнера.
            while (container.Parent != null)
            {
                container = container.Parent;
            }

            // FYI: сервис данных ходит в контейнер UnityFactory.
            container.RegisterInstance(Configuration);

            RegisterDataObjectFileAccessor(container);

            ISecurityManager emptySecurityManager = new EmptySecurityManager();

            // Регистрируем основной DataService.
            string mainConnectionString = Configuration.GetConnectionString("DefConnStr");
            IDataService mainDataService = new PostgresDataService(emptySecurityManager)
            {
                CustomizationString = mainConnectionString
            };

            container.RegisterInstance<IDataService>(mainDataService, InstanceLifetime.Singleton);

            // Регистрируем DataService аудита.
            string auditConnectionString = Configuration.GetConnectionString("AuditConnString");
            var environmentVariable = Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT");

            if (environmentVariable == "DockerAuditClickhouse")
            {
                IDataService auditDataServiceClickhouse = new ClickHouseDataService()
                {
                    CustomizationString = auditConnectionString
                };
                container.RegisterInstance<IDataService>("auditDataService", auditDataServiceClickhouse, InstanceLifetime.Singleton);
            }
            else
            {
                IDataService auditDataServicePostgres = new PostgresDataService(emptySecurityManager)
                {
                    CustomizationString = auditConnectionString
                };
                container.RegisterInstance<IDataService>("auditDataService", auditDataServicePostgres, InstanceLifetime.Singleton);
            }

            // Инициализируем сервис аудита.
            var auditAppSetting = new AuditAppSetting
            {
                AppName = "Test.audit",
                AuditEnabled = true,
            };

            ILegacyAuditSerializer auditSerializer = new JsonLegacyAuditSerializer();
            ILegacyAuditConverter auditConverter = new LegacyAuditConverter<JsonFieldAuditData>();
            IAudit audit = new LegacyAuditManager(container.Resolve<IDataService>("auditDataService"), auditConverter, auditSerializer);
            IAuditService auditService = new AuditService();

            AuditService.InitAuditService(auditAppSetting, audit, auditService);
        }

        /// <summary>
        /// Register implementation of <see cref="IDataObjectFileAccessor"/>.
        /// </summary>
        /// <param name="container">Container to register at.</param>
        private void RegisterDataObjectFileAccessor(IUnityContainer container)
        {
            const string fileControllerPath = "api/file";
            string baseUriRaw = Configuration["BackendRoot"];
            if (string.IsNullOrEmpty(baseUriRaw))
            {
                throw new System.Configuration.ConfigurationErrorsException("BackendRoot is not specified in Configuration or enviromnent variables.");
            }

            Console.WriteLine($"baseUriRaw is {baseUriRaw}");
            var baseUri = new Uri(baseUriRaw);
            string uploadPath = Configuration["UploadUrl"];
            container.RegisterSingleton<IDataObjectFileAccessor, DefaultDataObjectFileAccessor>(
                Invoke.Constructor(
                    baseUri,
                    fileControllerPath,
                    uploadPath,
                    null));
        }
    }
}
