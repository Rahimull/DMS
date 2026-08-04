import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PatientApi from "../api/PatientApi";

export default function usePatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Refresh Patient
  const refreshPatient = ()=>{
    setRefreshKey(prev => prev + 1);
  }

  //  START LOAD PATINET BY ID
  useEffect(() => {
    loadPatient();
  }, [id, refreshKey]);
  const loadPatient = async () => {
    try {
      const response = await PatientApi.getById(id);
      setPatient(response.data);
    } catch (error) {
      console.error(error);
      console.log(error.response);
      console.log(error.response?.data);
    }
  };
  //  END LOAD PATINET BY ID

  // START PAYMENT OF INSTALLMENT
  const finance = useMemo(() => {
    if (!patient){
        return {
            feePayments: [],
            totalFee: 0,
            totalDiscount: 0,
            totalPaid: 0,
            remaining: 0,
            installment: 1,
            installmentCounter:1,
            appointments: [],
        };
    }
    const appointments = patient.appointments ?? [];
    const feePayments = appointments.flatMap((a) => a.feePayments ?? []) ?? [];
    const totalFee = appointments.reduce((sum, a) => sum + (a.totalFee ?? 0), 0) ?? 0;
    const totalDiscount = appointments.reduce((sum, a) => sum + (a.discount ?? 0), 0) ?? 0;
    const totalPaid = feePayments.reduce((sum, p) => sum + (p.paidAmount ?? 0), 0,);
    const remaining = totalFee - totalPaid;
    const installment = appointments?.at(-1).installment == 0 ? 1 : appointments?.at(-1).installment;
    const installmentCounter = feePayments?.at(-1).installmentCounter;

   
    return {feePayments, totalFee, totalDiscount, 
      totalPaid, remaining, installment, installmentCounter,
      appointments,
    };
  },[patient]);

  // END PAYMENT OF INSTALLMENT

  return {
    patient,
    loadPatient,
    finance,
    refreshPatient
  };
}
