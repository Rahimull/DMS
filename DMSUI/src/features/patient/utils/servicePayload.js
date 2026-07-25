export function buildAppointmentPayload(
    formData,
    patientId
){

    const appointment =
        formData.services?.appointment ?? {};


    const services =
        formData.services?.patientServices ?? [];



    const totalFee =
        services.reduce(
            (sum,item)=>
                sum + Number(item.fee || 0),
            0
        );



    return {

        patientId,

        staffId:
            Number(appointment.staffId),


        installment:
            Number(
                appointment.installment || 1
            ),


        round:1,


        discount:
            Number(
                appointment.discount || 0
            ),


        serviceFee:
            totalFee,


        totalFee:
            totalFee -
            Number(
                appointment.discount || 0
            ),


        meetDate:
            appointment.meetDate,


        status:
            "Pending",


        details:
            appointment.details ?? ""

    };

}



export function buildPatientServicesPayload(
    formData,
    patientId,
    appointmentId=null
){

    const services =
        formData.services?.patientServices ?? [];



    const result=[];



    services.forEach(service=>{


        if(
            !service.values ||
            service.values.length===0
        ){

            result.push({

                patientId,

                appointmentId,

                treatmentPlanId:null,

                serviceId:
                    service.serviceId,

                requirementServiceId:null,

                value:null

            });


        }


        else{


            service.values.forEach(item=>{


                result.push({

                    patientId,

                    appointmentId,

                    treatmentPlanId:null,

                    serviceId:
                        service.serviceId,


                    requirementServiceId:
                        item.serviceRequirementId,


                    value:
                        item.value

                });


            });


        }


    });



    return result;

}