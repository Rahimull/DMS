import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PatientApi from "../api/PatientApi";

export default function useXray() {
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



  // END PAYMENT OF INSTALLMENT

  return {
    patient,
    loadPatient,
    refreshPatient
  };
}
