export const formatDate = (date) => {
  if (!date) return "ثبت نشده";

  try {
    return new Date(date).toLocaleDateString("fa-IR");
  } catch {
    return date;
  }
};


export const formatPrice = (price) => {
  if (price === null || price === undefined) {
    return "0";
  }

  return Number(price).toLocaleString("fa-IR");
};


export const getPatientName = (patient) => {
  if (!patient) return null;

  return `${patient.firstName || ""} ${patient.lastName || ""}`.trim();
};


export const getStaffName = (staff) => {
  if (!staff) return null;

  return `${staff.firstName || ""} ${staff.lastName || ""}`.trim();
};

