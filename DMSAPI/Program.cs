using System.Text.Json.Serialization;
using DMS.Persistence;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// ===============================
// Render Port Configuration
// ===============================
var port = Environment.GetEnvironmentVariable("PORT");

if (!string.IsNullOrEmpty(port))
{
    builder.WebHost.UseUrls($"http://0.0.0.0:{port}");
}


// ===============================
// Database Configuration
// ===============================
builder.Services.AddDbContext<DMSContext>(options =>
{
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection"));
});


// ===============================
// Controllers
// ===============================
builder.Services.AddControllers();


builder.Services
    .AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });


// ===============================
// Swagger
// ===============================
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// ===============================
// CORS Configuration
// ===============================
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "https://dms1.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


// ===============================
// Build App
// ===============================
var app = builder.Build();


// ===============================
// Database Migration
// ===============================
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider
        .GetRequiredService<DMSContext>();

    dbContext.Database.Migrate();
}


// ===============================
// Swagger
// ===============================
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// ===============================
// Middleware Pipeline
// ===============================

// در Render نیازی به HTTPS Redirect نیست
// چون SSL توسط Render مدیریت می‌شود.
// app.UseHttpsRedirection();


app.UseCors("AllowReact");


app.UseAuthorization();


app.MapControllers();


app.Run();