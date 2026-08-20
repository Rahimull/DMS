

using DMSAPI.Modules.User.UserMapping;
using DMSAPI.Modules.User.Services;

namespace DMSAPI.Modules.User;

public static class UserModule
{
    public static IServiceCollection AddUserModule(
     this IServiceCollection services
    )
    {

        // ===============================
        // Repositories
        // ===============================
        

        // ===============================
        // Services
        // ===============================
        services.AddScoped<IUserService, UserService>();
        



        // ===============================
        // AutoMapper
        // ===============================\
        services.AddAutoMapper(typeof(UserProfile).Assembly);





        return services;
    }
}