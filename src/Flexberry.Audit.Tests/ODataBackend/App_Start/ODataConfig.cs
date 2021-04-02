namespace AuditTestSimple
{
    using System;
    using System.Reflection;
    using System.Web.Http;

    using ICSSoft.STORMNET;
    using ICSSoft.Services;
    using IIS.Caseberry.Logging.Objects;

    using NewPlatform.Flexberry;
    using NewPlatform.Flexberry.AspNet.WebApi.Cors;
    using NewPlatform.Flexberry.ORM.ODataService;
    using NewPlatform.Flexberry.ORM.ODataService.Extensions;
    using NewPlatform.Flexberry.ORM.ODataService.Functions;
    using NewPlatform.Flexberry.ORM.ODataService.Model;
    using NewPlatform.Flexberry.Services;

    using Unity;
    using Unity.AspNet.WebApi;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Business.Audit;
    using System.Web.Http.Cors;
    using ICSSoft.STORMNET.Security;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    using NewPlatform.Flexberry.Security;
    using System.Web;
    using System.Web.Security;

    /// <summary>
    /// Configure OData Service.
    /// </summary>
    internal static class ODataConfig
    {
        /// <summary>
        /// Configure OData by DataObjects assembly.
        /// </summary>
        /// <param name="config">Http configuration object.</param>
        /// <param name="container">Unity container.</param>
        public static void Configure(HttpConfiguration config, IUnityContainer container, HttpServer httpServer)
        {
            if (config == null)
            {
                throw new ArgumentNullException("config");
            }

            if (container == null)
            {
                throw new ArgumentNullException("container");
            }

            // To support CORS uncomment the line below.
            var cors = new EnableCorsAttribute("http://localhost:4200", "*", "*") { SupportsCredentials = true };
            config.EnableCors(cors);

            // Init audit.
            var dataService = container.Resolve<IDataService>();
            AuditSetter.InitAuditService(dataService);

            // Use Unity as WebAPI dependency resolver
            config.DependencyResolver = new UnityDependencyResolver(container);

            // Create EDM model builder
            var assemblies = new[]
            { 
                Assembly.Load("Flexberry.Audit.Tests.Objects"),
                typeof(ApplicationLog).Assembly,
                typeof(UserSetting).Assembly,
                typeof(FlexberryUserSetting).Assembly,
                typeof(Agent).Assembly,
                typeof(AuditEntity).Assembly,
                typeof(Lock).Assembly
            };
            var builder = new DefaultDataObjectEdmModelBuilder(assemblies);
            builder.PropertyFilter = PropertyFilter;

            // Map OData Service
            var token = config.MapDataObjectRoute(builder, httpServer);

            // User functions
            token.Functions.Register(new Func<QueryParameters, string>(Test));
            token.Functions.Register(new Func<string, string, bool>(Login));
            token.Functions.Register(new Func<bool>(Logout));
            token.Functions.Register(new Func<string>(GetAuthenticatedUser));

            // Event handlers
            token.Events.CallbackAfterCreate = CallbackAfterCreate;
        }

        private static void CallbackAfterCreate(DataObject dataObject)
        {
            // TODO: implement handler
        }

        private static string Test(QueryParameters queryParameters)
        {
            return "Hello world!";
        }

        /// <summary>
        /// Delegate containing properties filtering logic.
        /// Resulting EDM models will contain only those properties for which this delegate will return <c>true</c>.
        /// </summary>
        /// <param name="propertyInfo">Property metadata.</param>
        /// <returns>Flag indicating whether to include property into resulting EDM model or not.</returns>
        private static bool PropertyFilter(PropertyInfo propertyInfo)
        {
            return Information.ExtractPropertyInfo<Agent>(x => x.Pwd) != propertyInfo;
        }

        /// <summary>
        /// User function to log in user with it's login and password.
        /// </summary>
        /// <param name="login">User's login.</param>
        /// <param name="password">User's password.</param>
        /// <returns>
        /// Flag indicating whether user was logged in succesfully or not.
        /// </returns>
        private static bool Login(string login, string password)
        {
            IAgentManager userManager = UnityFactory.GetContainer().Resolve<IAgentManager>();

            if (userManager.IsUserExist(login, null, password))
            {
                FormsAuthentication.SetAuthCookie(login, true);
                return true;
            }

            return false;
        }

        /// <summary>
        /// User function to log user out.
        /// </summary>
        /// <returns>
        /// Flag indicating whether user was logged out succesfully or not.
        /// </returns>
        private static bool Logout()
        {
            FormsAuthentication.SignOut();
            return true;
        }

        /// <summary>
        /// User function to get authenticated user name.
        /// </summary>
        /// <returns>
        /// Authenticated user name.
        /// </returns>
        private static string GetAuthenticatedUser()
        {
            HttpCookie authCookie = HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName];
            if (authCookie == null)
                return string.Empty;

            FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(authCookie.Value);
            if (ticket == null)
                return string.Empty;

            return ticket.Name;
        }
    }
}