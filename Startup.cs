using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace UIBlocks
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }

        public void ConfigureServices(IServiceCollection services) =>
            services.AddMvc();

        public void Configure(
            IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory
                .AddConsole(Configuration.GetSection("Logging"))
                .AddDebug();

            if (env.IsDevelopment())
                app
                    .UseDeveloperExceptionPage()
                    .UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                        HotModuleReplacement = true,
                        ReactHotModuleReplacement = true
                    });
            else
                app
                    .UseExceptionHandler("/Home/Error");

            app
                .UseStaticFiles()
                .UseMvc(routes =>
                {
                    routes.MapRoute(name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                    routes.MapSpaFallbackRoute(name: "spa-fallback",
                        defaults: new { controller = "Home", action = "Index" });
                });
        }
    }
}
