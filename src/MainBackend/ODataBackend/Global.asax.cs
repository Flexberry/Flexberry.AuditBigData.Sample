namespace AuditTestSimple
{
    using System;
    using System.Web;
    using System.Web.Http;
    using System.Web.Security;
    using ICSSoft.STORMNET.Business;

    using Microsoft.Practices.Unity.Configuration;
    using Unity;

    public class Global : HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            IUnityContainer container = new UnityContainer();
            container.LoadConfiguration();
            container.RegisterInstance(DataServiceProvider.DataService);
            GlobalConfiguration.Configure(configuration => ODataConfig.Configure(configuration, container, GlobalConfiguration.DefaultServer));
        }

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            HttpCookie authCookie = HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName];
            if (authCookie == null)
            {
                FormsAuthentication.SetAuthCookie("admin", true);
            }
        }
    }
}
