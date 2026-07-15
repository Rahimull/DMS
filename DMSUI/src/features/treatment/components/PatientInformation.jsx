import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { User, Edit } from "lucide-react";

const PatientInformation = ({ patient, onEdit }) => {
  if (!patient) {
    return null;
  }

  return (
    <Card>
      <CardHeader
        className="
flex
flex-row
justify-between
items-center
"
      >
        <CardTitle className="flex gap-2 items-center">
          <User size={20} />
          Patient Information
        </CardTitle>

        <Button variant="outline" size="sm" onClick={onEdit}>
          <Edit size={16} />
          Edit
        </Button>
      </CardHeader>

      <CardContent>
        <div
          className="
grid
grid-cols-1
md:grid-cols-2
gap-4
"
        >
          <InfoItem
            label="Full Name"
            value={`${patient.firstName ?? ""} ${patient.lastName ?? ""}`}
          />

          <InfoItem label="Father Name" value={patient.fatherName} />

          <InfoItem label="Gender" value={patient.gender} />

          <InfoItem label="Age" value={patient.age} />

          <InfoItem label="Phone" value={patient.phone} />

          <InfoItem label="Blood Group" value={patient.bloodGroup} />

          <InfoItem
            label="Registration Date"
            value={patient.registrationDate}
          />

          <InfoItem label="Sponsor" value={patient.sponsorBy} />

          <div className="md:col-span-2">
            <InfoItem label="Address" value={patient.address} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const InfoItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>

      <p className="font-medium">{value || "-"}</p>
    </div>
  );
};

export default PatientInformation;
