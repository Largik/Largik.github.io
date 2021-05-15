using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace laba7
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!\n This web application was made by Vladimir Afanasev");
                });

                endpoints.MapGet("/time", async context =>
                {
                    await context.Response.WriteAsync($"Time: {DateTime.Now.ToString("HH:mm:ss")}");
                });

                endpoints.MapGet("/browser", async context =>
                {
                    string user = context.Request.Headers["User-Agent"];
                    await context.Response.WriteAsync(user);
                });
                endpoints.MapGet("/rectangle", async context =>
                {
                    int? width = context.Request.Query["width"].ToString() != "" ? Convert.ToInt32(context.Request.Query["width"].ToString()) : 0;
                    int? height = context.Request.Query["height"].ToString() != "" ? Convert.ToInt32(context.Request.Query["height"].ToString()) : 0;
                    string area = (width > 0 && height > 0) ? (width * height).ToString() : "0";
                    string perimeter = (width > 0 && height > 0) ? (2*(width + height)).ToString() : "0";
                    
                    await context.Response.WriteAsync($"Height rectangle: {height}\n");
                    await context.Response.WriteAsync($"Width rectangle: {width}\n");
                    await context.Response.WriteAsync($"Perimeter rectangle: {perimeter}\n");
                    await context.Response.WriteAsync($"Area rectangle: {area}\n");
                });
                endpoints.MapGet("/error", async context =>
                {
                    string error = context.Request.Query["status"].ToString();
                    error = error != "" ? error : "200";
                    await context.Response.WriteAsync(error);
                });
            });
        }
    }
}
