import frontendDeleteFaculty from "@/services/frontend/faculty/frontendDeleteFaculty";
import AdminFacultyView from "@/views/admin/faculty/AdminFacultyView";
import { useState } from "react";

export default function AdminFaculty({ faculty }) {
  const [facultyData, setFacultyData] = useState(faculty);

  async function onDelete() {
    return frontendDeleteFaculty(faculty.id).then((res) => {
      setFacultyData(null);
    });
  }

  if (!facultyData) {
    return null;
  }

  return (
    <AdminFacultyView
      image={facultyData.user.image}
      name={facultyData.user.name}
      departmentName={facultyData?.department?.name}
      collegeName={facultyData?.department?.college?.name}
      onDelete={onDelete}
    />
  );
}
