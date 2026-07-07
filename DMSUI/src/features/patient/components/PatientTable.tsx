import DataTable from "@/components/dataTable/DataTable";
import { patientColumns } from "../columns/patientColumns";
import type { Table } from "@tanstack/react-table";
import type { Patient } from "../types/patient";
import { patients } from "@/features/dashboard/data/patients";

interface PatientTableProps {
  table: Table<Patient>;
  loading?: boolean;
  search: string;
}

export default function PatientTable({
  table,
  search,
  loading = false,
}: PatientTableProps) {
  
  return (
    <DataTable
  columns={patientColumns}
  data={patients}
  search={search}
/>
  );
}



