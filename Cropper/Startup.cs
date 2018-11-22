using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Cropper.Startup))]
namespace Cropper
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
