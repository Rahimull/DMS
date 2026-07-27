export function validateFields(fields, values){
    const errors = {};

    fields.forEach((field) => {
        if(!field.required) return;

        const value = values?.[field.name];

        if(
            value === undefined || value === null || value === ""
        ){
            errors[field.name] = `${field.label} ضروری است`;
        }
        
    });
    return errors;
}