using HMSApi.Models;

public class UserQueryParams : QueryParams
{
    public int? StaffId { get; set; }

    public bool? IsActive { get; set; }

    public string? Role { get; set; }
}