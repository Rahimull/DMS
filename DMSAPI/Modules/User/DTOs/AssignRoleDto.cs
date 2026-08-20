namespace DMSAPI.Modules.User.DTOs;

public class AssignRoleDto
{
    public int UserId { get; set; }
    public List<int> RoleIds { get; set; } = new();
    
}