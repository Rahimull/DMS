import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { User, Edit } from "lucide-react";

const PatientInformation = ({ patient, onEdit }) => {
  if (!patient) {
    return null;
  }

  return (
    <Card dir="rtl">
  <CardHeader
    className="
      flex
      flex-row-reverse
      justify-between
      items-center
    "
  >
    <CardTitle className="flex flex-row-reverse gap-2 items-center">
      <User size={20} />
      معلومات مریض
    </CardTitle>

    <Button variant="outline" size="sm" onClick={onEdit}>
      <Edit size={16} />
      ویرایش
    </Button>
  </CardHeader>

  <CardContent>
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        text-right
      "
    >
      <InfoItem
        label="نام مکمل"
        value={`${patient.firstName ?? ""} ${patient.lastName ?? ""}`}
      />

      <InfoItem
        label="نام پدر"
        value={patient.fatherName}
      />

      <InfoItem
        label="جنسیت"
        value={patient.gender}
      />

      <InfoItem
        label="سن"
        value={patient.age}
      />

      <InfoItem
        label="شماره تماس"
        value={patient.phone}
      />

      <InfoItem
        label="گروپ خون"
        value={patient.bloodGroup}
      />

      <InfoItem
        label="تاریخ ثبت"
        value={patient.registrationDate}
      />

      <InfoItem
        label="تمویل‌کننده"
        value={patient.sponsorBy}
      />

      <div className="md:col-span-2">
        <InfoItem
          label="آدرس"
          value={patient.address}
        />
      </div>
    </div>
  </CardContent>
</Card>
  );
};

const InfoItem = ({ label, value }) => {
  return (
    <div className="text-right">
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
};

export default PatientInformation;
