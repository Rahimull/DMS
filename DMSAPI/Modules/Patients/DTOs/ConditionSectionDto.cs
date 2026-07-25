namespace DMS.Modules.Patients.DTOs;
public class ConditionSectionDto
{
    public Dictionary<string, ConditionDetailDto> ConditionDetails { get; set; }
        = new();
}