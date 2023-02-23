import frontendCreateActiveFaculty from "@/services/frontend/admin/active_faculty/frontendCreateActiveFaculty";
import frontendDeleteActiveFaculty from "@/services/frontend/admin/active_faculty/frontendDeleteActiveFaculty";
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

  async function onActivate() {
    try {
      return frontendCreateActiveFaculty({
        userId: facultyData.userId,
        facultyId: facultyData.id,
        departmentId: facultyData.departmentId,
      }).then((res) => {
        setFacultyData((prev) => ({ ...prev, ActiveFaculty: res }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveFaculty(facultyData.ActiveFaculty.id).then(
      (res) => {
        setFacultyData((prev) => ({ ...prev, ActiveFaculty: null }));
      }
    );
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
      active={Boolean(facultyData.ActiveFaculty)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
